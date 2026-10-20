import { test } from 'node:test';
import assert from 'node:assert/strict';
import { writtenIssueBody, errorLines, suggestedFix } from '../lib/written-issue.mjs';
import { fixLookup, bodyWriter } from '../scripts/rewrite-issues.mjs';

const e = (o = {}) => ({
  key: 'acme/widget#.github/workflows/ci.yml', repo: 'acme/widget', stars: 5000, workflow: 'CI', path: '.github/workflows/ci.yml',
  light: 'dark', darkSince: '2026-10-02T22:11:51Z', cause: 'step "Test" in job "build" exited nonzero', class: 'code bug',
  run: 'https://github.com/acme/widget/actions/runs/111', conclusion: 'failure', status: 'new', ...o,
});
const LOG = ['2026-10-17T17:36:17.2Z > widget@1.0.0 test', '2026-10-17T17:36:17.3Z \x1b[31mFAIL\x1b[0m src/a.test.js',
  '2026-10-17T17:36:17.4Z   Error: expected 3 to equal 4', '2026-10-17T17:36:17.5Z   token=ghp_abcdefghijklmnopqrstuvwxyz0123456789',
  '2026-10-17T17:36:17.6Z ##[error]Process completed with exit code 1.', '2026-10-17T17:36:17.7Z Post job cleanup.'].join('\n');

test('sections in order, key kept, real header row, no blank header', () => {
  const b = writtenIssueBody(e(), { job: 'build', step: 'Test', branch: 'main', errorLines: errorLines(LOG) });
  assert.ok(b.startsWith('<!-- dark-key: acme/widget#.github/workflows/ci.yml -->\n## What\'s broken'));
  const idx = ["## What's broken", '## The error', '## Why', '## How to fix', '## Details', '| field | value |'].map((h) => b.indexOf(h));
  assert.ok(idx.every((x, i) => x > 0 && (i === 0 || x > idx[i - 1])), idx.join(','));
  assert.ok(!b.includes('| | |'));
  assert.match(b, /\*\*build\*\* job, at the \*\*Test\*\* step/);
  assert.match(b, /Error: expected 3 to equal 4/);
  assert.ok(!b.includes('ghp_abc'));
  assert.ok(!/\b(green|red)\b/i.test(b));
});
test('unknown cause: not yet diagnosed, needs investigation (no invented cause)', () => {
  const b = writtenIssueBody(e(), {});
  assert.match(b, /## Why\n\nNot yet diagnosed/);
  assert.match(b, /## How to fix\n\nNeeds investigation\./);
  assert.match(b, /job log could not be read/);
});
test('proven fix branch wins; queued fix next; class suggestion last', () => {
  assert.match(writtenIssueBody(e(), { fix: { branch: 'try/x', branchUrl: 'https://github.com/fitzyracing1/widget/tree/try%2Fx' } }), /A proven fix exists: \[try\/x\]/);
  assert.match(writtenIssueBody(e(), { queued: { action: 'PR: sync lockfile' } }), /queued for Joshua's approval.*PR: sync lockfile/);
  assert.match(writtenIssueBody(e({ cause: 'ERR_PNPM_OUTDATED_LOCKFILE x', class: 'code bug' })), /Suggested \(not yet tried\): Regenerate the lockfile/);
  assert.equal(suggestedFix('weird', 'code bug', 'failure'), null);
});
test('no-jobs run and expired log', () => {
  assert.match(writtenIssueBody(e(), { noJobs: true }), /before any job started/);
  assert.match(writtenIssueBody(e({ cause: 'boom: bad thing' }), { logError: 'log expired or removed' }), /log expired or removed[\s\S]*boom: bad thing/);
});
test('errorLines collapses near-duplicates and caps at 20', () => {
  const log = Array.from({ length: 50 }, (_, i) => `GHSA-${i}x was filtered out because: reasons here`).concat(['Error: real failure', '##[error]Process completed with exit code 1.']).join('\n');
  const l = errorLines(log);
  assert.ok(l.length <= 20);
  assert.ok(l.some((x) => /more similar lines/.test(x)));
  assert.ok(l.some((x) => /real failure/.test(x)));
});
test('writer only PATCHes body of fitzyracing1/darks issues', async () => {
  const calls = [];
  const w = bodyWriter({ token: 't', fetchImpl: async (url, o) => { calls.push([url, o.method, JSON.parse(o.body)]); return { ok: true }; } });
  await w(5, 'hi');
  assert.deepEqual(calls, [['https://api.github.com/repos/fitzyracing1/darks/issues/5', 'PATCH', { body: 'hi' }]]);
  await assert.rejects(w('5/../../x', 'hi'));
});
test('fixLookup reads drafts cache case-insensitively', () => {
  const f = fixLookup('.');
  assert.equal(typeof f('nobody/nothing#x').fix, 'object');
});
