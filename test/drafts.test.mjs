import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  groupDarks, logTail, redact, dedupQuery, dedupTerms, draftTitle, draftBody, renderDraft, parseDraft,
  parseQueueApprovals, queueSection, replaceQueueSection, resolveLit, reviewHint, likelyCause, draftFileName, isRealDuplicate, entryFromIssue, collectHistory, backfillPlan,
} from '../lib/drafts.mjs';
import { draftAll, createReader } from '../scripts/draft-upstream.mjs';
import { fileApproved } from '../scripts/file-approved.mjs';

const light = (o = {}) => ({
  key: 'acme/widget#.github/workflows/ci.yml', repo: 'acme/widget', stars: 5000, workflow: 'CI', path: '.github/workflows/ci.yml',
  light: 'dark', darkSince: '2026-10-02T22:11:51Z', cause: 'step "Test" in job "build" exited nonzero', class: 'code bug',
  run: 'https://github.com/acme/widget/actions/runs/111', runAt: '2026-10-16T10:22:56Z', conclusion: 'failure', status: 'new', ...o,
});
const LOG = [
  '2026-10-17T17:36:17.1Z ##[group]Run npm test',
  '2026-10-17T17:36:17.1Z npm test',
  '2026-10-17T17:36:17.1Z shell: /usr/bin/bash -e {0}',
  '2026-10-17T17:36:17.1Z ##[endgroup]',
  '2026-10-17T17:36:17.2Z > widget@1.0.0 test',
  '2026-10-17T17:36:17.3Z \x1b[31mFAIL\x1b[0m src/a.test.js',
  '2026-10-17T17:36:17.4Z   Error: expected 3 to equal 4',
  '2026-10-17T17:36:17.5Z   token=ghp_abcdefghijklmnopqrstuvwxyz0123456789',
  '2026-10-17T17:36:17.6Z ##[error]Process completed with exit code 1.',
  '2026-10-17T17:36:17.7Z Post job cleanup.',
  '2026-10-17T17:36:17.8Z [command]/usr/bin/git version',
].join('\n');

test('groupDarks: one group per repo, case-insensitive, no duplicate workflow, lit ignored', () => {
  const g = groupDarks({ darks: {
    a: light(), b: light({ key: 'Acme/Widget#.github/workflows/ci.yml', repo: 'Acme/Widget' }),
    c: light({ key: 'acme/widget#.github/workflows/nightly.yml', path: '.github/workflows/nightly.yml', workflow: 'Nightly', darkSince: '2026-09-01T00:00:00Z' }),
    d: light({ key: 'x/y#ci', repo: 'x/y', light: 'lit' }),
  } });
  assert.deepEqual([...g.keys()], ['acme/widget']);
  assert.equal(g.get('acme/widget').lights.length, 2);
  assert.equal(g.get('acme/widget').lights[0].workflow, 'Nightly'); // oldest dark first
});

test('logTail: strips timestamps/ANSI/noise, redacts tokens, finds a cause', () => {
  const { cause, tail } = logTail(LOG);
  assert.equal(cause, 'Error: expected 3 to equal 4');
  assert.ok(tail.includes('FAIL src/a.test.js'));
  assert.ok(!tail.join('\n').includes('ghp_'));
  assert.ok(!tail.some((l) => /Post job cleanup|git version|##\[group\]|shell: /.test(l)));
  assert.equal(logTail('##[error]Node version 99 not found').cause, 'Node version 99 not found');
  assert.deepEqual(logTail(''), { cause: null, tail: [] });
  // no ##[error]: stop before post-job cleanup; skip wrapper lines like ELIFECYCLE
  const noErr = ['Tests  1 failed | 825 passed', '[ELIFECYCLE] Command failed with exit code 1.', 'Post job cleanup.', 'Removing includeIf entries pointing to credentials config files'].join('\n');
  assert.equal(logTail(noErr).cause, 'Tests  1 failed | 825 passed');
  assert.ok(!logTail(noErr).tail.some((l) => /includeIf/.test(l)));
});

test('redact', () => {
  assert.equal(redact('x github_pat_ABCDEFGHIJKLMNOPQRSTUVWXYZ y'), 'x [redacted] y');
  assert.equal(redact('password: hunter2'), 'password: [redacted]');
});

test('likelyCause prefers a real annotation, else the log', () => {
  assert.equal(likelyCause(light({ cause: 'ERR_PNPM_OUTDATED_LOCKFILE' }), { logCause: 'x' }), 'ERR_PNPM_OUTDATED_LOCKFILE');
  assert.equal(likelyCause(light(), { logCause: 'Error: boom' }), 'Error: boom');
});

test('dedup query: file name always, workflow name only when specific', () => {
  assert.equal(dedupQuery('acme/widget', light()), 'repo:acme/widget is:open "ci.yml"');
  const l = light({ workflow: '⏰ Integration Tests', path: '.github/workflows/integration_tests.yml' });
  assert.deepEqual(dedupTerms(l), ['integration_tests.yml', 'Integration Tests']);
  assert.equal(dedupQuery('a/b', l), 'repo:a/b is:open ("integration_tests.yml" OR "Integration Tests")');
});

test('isRealDuplicate: only issues/PRs that are about this dark workflow', () => {
  const nightly = light({ workflow: 'Node Nightly CI', path: '.github/workflows/nightly.yml' });
  assert.equal(isRealDuplicate({ title: 'Failed build: Node Nightly CI' }, nightly), true);
  assert.equal(isRealDuplicate({ title: 'Dependency Dashboard', body: 'nightly.yml failing' }, nightly), false);
  const smoke = light({ workflow: 'all-plugins-smoke', path: '.github/workflows/all-plugins-smoke.yml' });
  assert.equal(isRealDuplicate({ title: 'all-plugins-smoke: native bundle drift fails' }, smoke), true);
  const up = light({ workflow: 'Upgrade checks', path: '.github/workflows/run-upgrade-checks.yml' });
  assert.equal(isRealDuplicate({ title: 'Upgrade checks failing on main branch' }, up), true);
  assert.equal(isRealDuplicate({ title: 'Upgrade GitHub Actions for Node 24 compatibility', isPr: true, body: 'touches run-upgrade-checks.yml' }, up), false);
  const fb = light({ workflow: 'FreeBSD', path: '.github/workflows/freebsd.yml' });
  assert.equal(isRealDuplicate({ title: 'CI: FreeBSD and Windows ARM64 nightly and on release', isPr: true }, fb), false);
  assert.equal(isRealDuplicate({ title: 'FreeBSD nightly is dark: two layout tests', body: '' }, fb), true);
  assert.equal(isRealDuplicate({ title: 'fix(ci): isolate git env in check-license-header', isPr: true }, light({ workflow: 'Check License Header', path: '.github/workflows/check-license-header.yml' })), true);
  assert.equal(isRealDuplicate({ title: 'Something else', body: 'see https://github.com/acme/widget/actions/runs/111' }, light()), true);
  assert.equal(isRealDuplicate({ title: 'Rename gemini-scheduled-issue-triage.yml', isPr: true }, light({ workflow: 'Triage', path: '.github/workflows/gemini-scheduled-issue-triage.yml' })), false);
});

test('title and body: plain, lit/dark wording only, footer, links', () => {
  const g = { repo: 'acme/widget', stars: 5000 };
  const l = light();
  assert.equal(draftTitle(g, [l], 'main'), 'CI: "CI" workflow failing on main since 2026-10-02');
  assert.match(draftTitle(g, [l, light({ workflow: 'A' }), light({ workflow: 'B' }), light({ workflow: 'C' })], 'main'), /^CI: 4 workflows dark on main \("CI", "A", "B", \+1 more\)$/);
  const body = draftBody(g, [l], { [l.key]: { branch: 'main', job: 'build', step: 'Test', logCause: 'Error: boom', tail: ['a', 'b'], fix: { branchUrl: 'https://github.com/fitzyracing1/widget/tree/fix', runUrl: 'https://github.com/fitzyracing1/widget/actions/runs/9' } } });
  assert.match(body, /actions\/runs\/111/);
  assert.match(body, /Dark since: 2026-10-02/);
  assert.match(body, /Likely cause: Error: boom/);
  assert.match(body, /fitzyracing1\/widget\/tree\/fix/);
  assert.match(body, /Found by the \[dark crawler\]/);
  assert.doesNotMatch(body, /\b(green|red)\b/i);
  assert.ok(body.length < 3000);
});

test('renderDraft / parseDraft round trip', () => {
  const g = { repo: 'acme/widget', stars: 5 };
  const text = renderDraft(g, 'T', 'line1\n\nline2', { state: 'ready', generatedAt: 'now', hints: ['h'] });
  assert.deepEqual(parseDraft(text), { repo: 'acme/widget', state: 'ready', title: 'T', body: 'line1\n\nline2' });
  assert.equal(draftFileName('acme/widget'), 'acme__widget.md');
});

test('reviewHint flags low-value darks', () => {
  assert.match(reviewHint(light({ conclusion: 'skipped' })), /skipped/);
  assert.match(reviewHint(light({ cause: 'Canceling since a higher priority waiting request for x exists' })), /concurrency/);
  assert.equal(reviewHint(light()), null);
});

test('QUEUE.md: section replaced in place, other content intact, checkboxes parsed', () => {
  const orig = '# Queued\n\n| a | b |\n|---|---|\n| x | y |\n\nEdit queued.json.\n';
  const index = { drafts: { 'acme/widget': { repo: 'acme/widget', stars: 2, title: 'T1', file: 'drafts/acme__widget.md', state: 'ready', approved: false } } };
  const once = replaceQueueSection(orig, queueSection(index));
  assert.ok(once.startsWith(orig.trimEnd()));
  assert.match(once, /^- \[ \] acme\/widget — T1 — drafts\/acme__widget\.md$/m);
  const ticked = once.replace('- [ ] acme/widget', '- [x] acme/widget');
  assert.equal(parseQueueApprovals(ticked)['acme/widget'].checked, true);
  index.drafts['acme/widget'].approved = true;
  const twice = replaceQueueSection(ticked, queueSection(index));
  assert.equal(twice.split('drafts:start').length, 2); // not duplicated
  assert.equal(parseQueueApprovals(orig), null);
});

test('resolveLit moves repos that are no longer dark', () => {
  const index = { drafts: { 'a/b': { repo: 'a/b', file: 'drafts/a__b.md', state: 'ready', approved: true }, 'c/d': { repo: 'c/d', file: 'drafts/c__d.md', state: 'ready' } } };
  const moves = resolveLit(index, new Map([['c/d', {}]]), { now: '2026-10-18T00:00:00Z', state: { darks: { k: { repo: 'a/b', light: 'lit' } } } });
  assert.deepEqual(moves, [{ key: 'a/b', from: 'drafts/a__b.md', to: 'drafts/resolved/a__b.md' }]);
  assert.equal(index.drafts['a/b'].state, 'resolved');
  assert.equal(index.drafts['a/b'].approved, false);
  assert.equal(index.drafts['c/d'].state, 'ready');
});

// ---------- end to end with a fake, read-only GitHub ----------
function fakeGitHub({ dupFor = [] } = {}) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, method: init.method });
    if (init.method !== 'GET') throw new Error('write attempted');
    const u = new URL(url);
    const ok = (body, text = false) => ({ ok: true, status: 200, headers: new Map([['x-ratelimit-remaining', '900']]), json: async () => body, text: async () => (text ? body : JSON.stringify(body)) });
    if (u.pathname.startsWith('/users/')) return ok([{ name: 'widget', fork: true }]);
    if (u.pathname === '/repos/fitzyracing1/widget') return ok({ full_name: 'fitzyracing1/widget', default_branch: 'main', parent: { full_name: 'acme/widget' } });
    if (u.pathname.startsWith('/repos/fitzyracing1/widget/actions/workflows/')) return ok({ workflow_runs: [{ head_branch: 'fix-ci', created_at: '2026-10-10T00:00:00Z', html_url: 'https://github.com/fitzyracing1/widget/actions/runs/777' }] });
    if (/\/actions\/runs\/\d+$/.test(u.pathname)) return ok({ head_branch: 'main', repository: { full_name: u.pathname.split('/').slice(2, 4).join('/') } });
    if (u.pathname.endsWith('/jobs')) return ok({ jobs: [{ id: 5, name: 'build', conclusion: 'failure', steps: [{ name: 'Test', conclusion: 'failure' }] }] });
    if (u.pathname.endsWith('/logs')) return ok(LOG, true);
    if (u.pathname === '/search/issues') {
      const q = u.searchParams.get('q');
      const hit = dupFor.find((r) => q.includes(`repo:${r} `));
      return ok({ items: hit ? [{ number: 42, title: 'release.yml is broken', html_url: `https://github.com/${hit}/issues/42` }, { number: 7, title: 'Dependency Dashboard', html_url: 'x' }] : [{ number: 9, title: 'Upgrade GitHub Actions', pull_request: {}, html_url: 'y' }] });
    }
    return { ok: false, status: 404, headers: new Map(), json: async () => ({}) };
  };
  return { calls, fetchImpl };
}
const sandbox = () => {
  const dir = mkdtempSync(join(tmpdir(), 'drafts-'));
  writeFileSync(join(dir, 'darks.json'), JSON.stringify({ darks: {
    a: light(),
    b: light({ key: 'other/thing#.github/workflows/release.yml', repo: 'other/thing', stars: 100, workflow: 'Release', path: '.github/workflows/release.yml', run: 'https://github.com/other/thing/actions/runs/222' }),
  } }));
  writeFileSync(join(dir, 'QUEUE.md'), '# Queued for Joshua\'s approval\n\n| existing | row |\n');
  return dir;
};

test('draftAll: drafts, duplicates, fork fix, queue lines, read-only', async () => {
  const dir = sandbox();
  const fake = fakeGitHub({ dupFor: ['other/thing'] });
  const gh = createReader({ token: 't', fetchImpl: fake.fetchImpl, searchDelay: 0 });
  const s = await draftAll({ dir, gh, now: '2026-10-18T12:00:00Z', log: () => {} });
  assert.deepEqual(s.drafted.map((d) => d.repo), ['acme/widget']);
  assert.deepEqual(s.duplicate.map((d) => d.repo), ['other/thing']);
  assert.ok(fake.calls.every((c) => c.method === 'GET'));
  const draft = readFileSync(join(dir, 'drafts/acme__widget.md'), 'utf8');
  assert.match(draft, /fitzyracing1\/widget\/tree\/fix-ci/);
  assert.match(draft, /CI: "CI" workflow failing on main since 2026-10-02/);
  const dup = readFileSync(join(dir, 'drafts/other__thing.md'), 'utf8');
  assert.match(dup, /draft-state: duplicate/);
  assert.match(dup, /issues\/42/);
  const q = readFileSync(join(dir, 'QUEUE.md'), 'utf8');
  assert.match(q, /\| existing \| row \|/);
  assert.match(q, /^- \[ \] acme\/widget — CI: "CI" workflow failing on main since 2026-10-02 — drafts\/acme__widget\.md$/m);
  assert.doesNotMatch(q, /- \[ \] other\/thing/);
});

test('draftAll: approvals survive the crawler rewriting QUEUE.md; lit repo moves to resolved', async () => {
  const dir = sandbox();
  const mk = () => createReader({ token: 't', fetchImpl: fakeGitHub().fetchImpl, searchDelay: 0 });
  await draftAll({ dir, gh: mk(), log: () => {} });
  const ticked = readFileSync(join(dir, 'QUEUE.md'), 'utf8').replace('- [ ] acme/widget', '- [x] acme/widget');
  writeFileSync(join(dir, 'QUEUE.md'), '# Queued (rewritten by crawler)\n'); // crawler drops our section
  await draftAll({ dir, gh: mk(), prevQueue: ticked, log: () => {} });
  assert.match(readFileSync(join(dir, 'QUEUE.md'), 'utf8'), /^- \[x\] acme\/widget/m);
  // other/thing turns lit
  const st = JSON.parse(readFileSync(join(dir, 'darks.json'), 'utf8')); st.darks.b.light = 'lit'; st.darks.b.status = 'relit';
  writeFileSync(join(dir, 'darks.json'), JSON.stringify(st));
  const s = await draftAll({ dir, gh: mk(), log: () => {} });
  assert.deepEqual(s.resolved, ['other/thing']);
  assert.ok(!existsSync(join(dir, 'drafts/other__thing.md')));
  assert.match(readFileSync(join(dir, 'drafts/resolved/other__thing.md'), 'utf8'), /draft-state: resolved/);
  assert.match(readFileSync(join(dir, 'QUEUE.md'), 'utf8'), /~~other\/thing — .*~~ — drafts\/resolved\/other__thing\.md — resolved/);
});

test('file-approved: dry run by default, only [x] + named repo + confirm, never anything else', async () => {
  const dir = sandbox();
  const reader = createReader({ token: 't', fetchImpl: fakeGitHub().fetchImpl, searchDelay: 0 });
  await draftAll({ dir, gh: reader, log: () => {} });
  const posts = [];
  const fetchImpl = async (url, init) => { posts.push({ url, init }); return { ok: true, status: 201, json: async () => ({ html_url: 'https://github.com/acme/widget/issues/1' }) }; };
  // nothing checked → nothing
  let r = await fileApproved({ dir, reader, token: 'x', fetchImpl, confirm: 'FILE', repo: 'acme/widget', log: () => {} });
  assert.equal(r.filed.length, 0);
  // checked, but no confirm → dry run
  const q = join(dir, 'QUEUE.md');
  writeFileSync(q, readFileSync(q, 'utf8').replace('- [ ] acme/widget', '- [x] acme/widget'));
  r = await fileApproved({ dir, reader, token: 'x', fetchImpl, log: () => {} });
  assert.equal(r.dryRun, true); assert.equal(posts.length, 0);
  // confirm without --repo → refuse
  await assert.rejects(fileApproved({ dir, reader, token: 'x', fetchImpl, confirm: 'FILE', log: () => {} }), /--repo/);
  // unchecked repo named → nothing
  r = await fileApproved({ dir, reader, token: 'x', fetchImpl, confirm: 'FILE', repo: 'other/thing', log: () => {} });
  assert.equal(posts.length, 0);
  // the real thing (mocked)
  r = await fileApproved({ dir, reader, token: 'x', fetchImpl, confirm: 'FILE', repo: 'acme/widget', log: () => {} });
  assert.equal(posts.length, 1);
  assert.equal(posts[0].url, 'https://api.github.com/repos/acme/widget/issues');
  assert.match(readFileSync(q, 'utf8'), /- \[x\] acme\/widget — .* — filed: https:\/\/github.com\/acme\/widget\/issues\/1/);
  // never twice
  r = await fileApproved({ dir, reader, token: 'x', fetchImpl, confirm: 'FILE', repo: 'acme/widget', log: () => {} });
  assert.equal(posts.length, 1);
});

// ---------- backfill ----------
const ISSUE = { number: 7, state: 'closed', closed_at: '2026-10-15T00:00:00Z', html_url: 'https://github.com/fitzyracing1/darks/issues/7', title: '○ dark: old/gone — Build',
  body: '<!-- dark-key: old/gone#.github/workflows/build.yml -->\n| repo | [old/gone](https://github.com/old/gone) (1234 ★) |\n| workflow | `.github/workflows/build.yml` (Build) |\n| cause | boom |\n| class | code bug |\n| run | https://github.com/old/gone/actions/runs/55 |' };

test('entryFromIssue reads our own darks issue', () => {
  const e = entryFromIssue(ISSUE);
  assert.equal(e.key, 'old/gone#.github/workflows/build.yml');
  assert.equal(e.workflow, 'Build'); assert.equal(e.stars, 1234); assert.equal(e.cause, 'boom');
  assert.equal(e.run, 'https://github.com/old/gone/actions/runs/55');
});

test('collectHistory + backfillPlan: still dark vs resolved vs live, one per repo', () => {
  const s1 = { darks: { a: light({ key: 'p/q#.github/workflows/a.yml', repo: 'p/q', path: '.github/workflows/a.yml' }), b: light({ key: 'p/q#.github/workflows/b.yml', repo: 'p/q', path: '.github/workflows/b.yml' }), c: light({ key: 'r/s#x.yml', repo: 'r/s', path: 'x.yml' }) } };
  const s2 = { darks: { a: light({ key: 'p/q#.github/workflows/a.yml', repo: 'p/q', path: '.github/workflows/a.yml', light: 'lit', status: 'relit', relitAt: '2026-10-16T00:00:00Z' }), c: light({ key: 'r/s#x.yml', repo: 'r/s', path: 'x.yml' }) } };
  const hist = collectHistory({ snapshots: [s1, s2], issues: [ISSUE, { ...ISSUE, number: 8, state: 'open', title: '○ dark: still/open — CI', body: '<!-- dark-key: still/open#ci.yml -->' }], queued: [{ key: 'nukeop/nuclear#.github/workflows/ci.yml', action: 'PR: x' }] });
  const live = groupDarks({ darks: { z: light({ key: 'r/s#x.yml', repo: 'R/S', path: 'x.yml' }) } });
  const plan = backfillPlan(hist, live);
  assert.deepEqual(plan.stillDark.map((e) => e.key).sort(), ['p/q#.github/workflows/b.yml', 'still/open#ci.yml']);
  assert.deepEqual([...plan.resolved.keys()].sort(), ['nukeop/nuclear', 'old/gone', 'p/q']);
  assert.equal(plan.resolved.get('p/q').lights.length, 1);
  assert.equal(plan.resolved.get('p/q').relitAt, '2026-10-16T00:00:00Z');
  assert.ok(!plan.resolved.has('r/s')); // live crawl owns it
});

test('draftAll with history: resolved drafts kept as history, live repos not duplicated', async () => {
  const dir = sandbox();
  const gh = createReader({ token: 't', fetchImpl: fakeGitHub().fetchImpl, searchDelay: 0 });
  const hist = collectHistory({ snapshots: [], issues: [ISSUE, { ...ISSUE, number: 9, title: '○ dark: acme/widget — CI', body: '<!-- dark-key: acme/widget#.github/workflows/ci.yml -->' }] });
  const s = await draftAll({ dir, gh, history: hist, now: '2026-10-18T12:00:00Z', log: () => {} });
  assert.deepEqual(s.backfill.resolved, ['old/gone']);
  assert.match(readFileSync(join(dir, 'drafts/resolved/old__gone.md'), 'utf8'), /draft-state: resolved[\s\S]*lit again 2026-10-15/);
  const q = readFileSync(join(dir, 'QUEUE.md'), 'utf8');
  assert.equal((q.match(/acme\/widget —/g) || []).length, 1);
  assert.match(q, /~~old\/gone — .*~~ — drafts\/resolved\/old__gone\.md — resolved 2026-10-15/);
  // a later run must not drop the history
  await draftAll({ dir, gh, now: '2026-12-30T12:00:00Z', log: () => {} });
  assert.match(readFileSync(join(dir, 'QUEUE.md'), 'utf8'), /~~old\/gone/);
});
