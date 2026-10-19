// drafts.mjs — pure helpers that turn dark lights into ready-to-file upstream issue DRAFTS.
//
// Nothing in this file talks to the network. Drafts are files in this repo; they are only ever
// filed upstream by scripts/file-approved.mjs, run by hand, for entries Joshua has checked [x].
//
// Terminology: a CI light is "lit" (success) or "dark" (anything else).

export const SECTION_START = '<!-- drafts:start -->';
export const SECTION_END = '<!-- drafts:end -->';
export const SECTION_TITLE = "## Drafted upstream issues — awaiting Joshua's OK";
export const CACHE_VERSION = 4;
export const CRAWLER_URL = 'https://github.com/fitzyracing1/darks';

const GENERIC_NAMES = new Set(['ci', 'build', 'test', 'tests', 'release', 'lint', 'main', 'docs', 'deploy', 'publish', 'push', 'nightly', 'check', 'checks', 'e2e', 'triage', 'stale']);

/** "Owner/Repo" → "owner/repo" (GitHub names are case-insensitive). */
export const repoKey = (repo) => String(repo).toLowerCase();
/** "owner/repo" → "owner__repo.md" */
export const draftFileName = (repo) => `${repo.replace('/', '__')}.md`;

/**
 * Group dark lights from darks.json by repo (case-insensitive) and drop duplicate workflow paths.
 * Returns Map<repoKey, { repo, stars, lights: [entry] }>, sorted by stars desc.
 */
export function groupDarks(state) {
  const groups = new Map();
  for (const e of Object.values(state?.darks || {})) {
    if (e.light !== 'dark' || !e.repo) continue;
    const k = repoKey(e.repo);
    const g = groups.get(k) || { repo: e.repo, stars: 0, lights: [] };
    if ((e.stars || 0) > g.stars) { g.stars = e.stars || 0; g.repo = e.repo; }
    if (!g.lights.some((l) => String(l.path).toLowerCase() === String(e.path).toLowerCase())) g.lights.push(e);
    groups.set(k, g);
  }
  for (const g of groups.values()) g.lights.sort((a, b) => String(a.darkSince || '').localeCompare(String(b.darkSince || '')));
  return new Map([...groups.entries()].sort((a, b) => b[1].stars - a[1].stars || a[0].localeCompare(b[0])));
}

const day = (iso) => (iso ? String(iso).slice(0, 10) : null);
const stamp = (iso) => (iso ? `${String(iso).slice(0, 10)} ${String(iso).slice(11, 16)} UTC` : null);

/** How a dark run ended, as a short verb phrase. */
export function darkVerb(conclusion) {
  switch (conclusion) {
    case 'timed_out': return 'timing out';
    case 'cancelled': return 'getting cancelled';
    case 'startup_failure': return 'failing to start';
    case 'skipped': return 'not completing (runs skipped)';
    case 'action_required': return 'waiting on approval';
    default: return 'failing';
  }
}

/** True when the crawler's annotation cause only says which step exited, i.e. no real cause. */
export function isGenericCause(cause) {
  return !cause || /exited nonzero|^no cause found|^run (skipped|cancelled|startup_failure|failure)$|^cause not readable/i.test(cause);
}

const SECRETS = [
  /gh[pousr]_[A-Za-z0-9]{20,}/g,
  /github_pat_[A-Za-z0-9_]{20,}/g,
  /\b(xox[abpr]-[A-Za-z0-9-]{10,})/g,
  /\b(AKIA[0-9A-Z]{16})\b/g,
  /((?:token|password|passwd|secret|api[_-]?key)\s*[=:]\s*)(\S+)/gi,
];
export function redact(line) {
  let s = String(line);
  for (const re of SECRETS) s = s.replace(re, (m, a, b) => (b !== undefined && /[=:]/.test(a) ? `${a}[redacted]` : '[redacted]'));
  return s;
}

const NOISE = /^(##\[(group|endgroup)\]|Post job cleanup|Removing (SSH command configuration|HTTP extra header|includeIf entries)|Pruning is unnecessary|Cleaning up orphan processes|\[command\]\/usr\/bin\/git|git version|Temporarily overriding HOME|Adding repository directory|http\.https:\/\/github\.com\/\.extraheader|shell: |env:|\s*$)/;
const INTERESTING = /error|fail|ERR!|exception|panic|traceback|assert|denied|not found|timed out|timeout|invalid|cannot|could not|unable|refused|expected|mismatch|outdated/i;
const POST = /^(Post job cleanup|##\[group\]Post |Cleaning up orphan processes)/;
// wrapper lines that only repeat "a command exited nonzero"
const WRAPPER = /^Exit code: \d+$|ELIFECYCLE|npm ERR! (code|errno|path|command|A complete log)|Command failed with exit code|exited with (exit )?code \d+|exit status \d+|^error: Recipe|^make(\[\d+\])?: \*\*\*|Process completed with exit code/i;
const EXIT_LINE = /^##\[error\]Process completed with exit code \d+\.?$/;

/**
 * Pull a short, readable tail out of a raw GitHub Actions job log.
 * Returns { cause, tail: [lines] } (cause may be null).
 */
export function logTail(text, { max = 8, width = 220 } = {}) {
  if (!text) return { cause: null, tail: [] };
  const raw = String(text).split(/\r?\n/).map((l) => l.replace(/^\uFEFF?\d{4}-\d\d-\d\dT[\d:.]+Z ?/, '').replace(/\x1b\[[0-9;?]*[A-Za-z]/g, '').trimEnd());
  // drop step headers ("##[group]Run …" … "##[endgroup]"): they echo the script and env, not output
  const lines = [];
  for (let i = 0; i < raw.length; i++) {
    if (raw[i].startsWith('##[group]Run ')) {
      const close = raw.findIndex((l, j) => j > i && (l.startsWith('##[endgroup]') || l.startsWith('##[group]')));
      if (close > i && raw[close].startsWith('##[endgroup]')) { i = close; continue; }
    }
    lines.push(raw[i]);
  }
  const firstErr = lines.findIndex((l) => l.startsWith('##[error]'));
  let end = firstErr >= 0 ? firstErr + 1 : lines.findIndex((l) => POST.test(l));
  if (end < 0) end = lines.length;
  const region = lines.slice(Math.max(0, end - 60), end);
  const kept = region.filter((l) => !NOISE.test(l) && !l.startsWith('##[warning]Node.js'));
  const tail = kept.slice(-max).map((l) => redact(l.length > width ? l.slice(0, width - 1) + '…' : l));
  let cause = null;
  const errLine = firstErr >= 0 ? lines[firstErr] : null;
  if (errLine && !EXIT_LINE.test(errLine)) cause = errLine.replace(/^##\[error\]/, '');
  else {
    const body = kept.filter((l) => !EXIT_LINE.test(l));
    const specific = body.filter((l) => !WRAPPER.test(l) && !l.startsWith('##[warning]'));
    cause = [...specific].reverse().find((l) => INTERESTING.test(l)) || [...body].reverse().find((l) => INTERESTING.test(l)) || specific[specific.length - 1] || null;
  }
  if (cause) { cause = redact(cause.trim()); if (cause.length > width) cause = cause.slice(0, width - 1) + '…'; }
  return { cause, tail };
}

/** The one-line "likely cause" shown in a draft. */
export function likelyCause(light, info = {}) {
  if (!isGenericCause(light.cause)) return light.cause;
  if (info.logCause) return info.logCause;
  return light.cause || null;
}

/** Search terms that would show up in an upstream issue/PR about this workflow. */
export function dedupTerms(light) {
  const terms = [];
  const file = String(light.path || '').split('/').pop();
  if (file) terms.push(file);
  const name = String(light.workflow || '').replace(/[^\p{L}\p{N} ._:()-]/gu, ' ').replace(/\s+/g, ' ').trim();
  if (name && name.length >= 4 && !GENERIC_NAMES.has(name.toLowerCase()) && !/"/.test(name) && name.toLowerCase() !== file.toLowerCase()) terms.push(name);
  return terms;
}
/** Read-only search query: open issues and PRs in the upstream repo mentioning the workflow. */
export function dedupQuery(repo, light) {
  const terms = dedupTerms(light).map((t) => `"${t}"`);
  return `repo:${repo} is:open ${terms.length > 1 ? `(${terms.join(' OR ')})` : terms[0] || ''}`.trim();
}

const norm = (s) => ` ${String(s || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim()} `;
const FAILURE_WORDS = /\b(fail\w*|broken|break(s|ing)?|errors?|erroring|red|dark|flaky|flakes?|timing out|times out|timed out|not (working|passing|running)|cancel\w*|regress\w*)\b/i;
const FIX_WORDS = /\b(fix\w*|repair\w*|unbreak|restore\w*|revert\w*|workaround|deflake\w*)\b/i;

/** Names an issue/PR title would use for this workflow: file name, file stem, specific workflow name. */
export function titleTerms(light) {
  const file = String(light.path || '').split('/').pop();
  const stem = file.replace(/\.ya?ml$/i, '');
  const out = [file];
  if (stem.length >= 5 && !GENERIC_NAMES.has(stem.toLowerCase())) out.push(stem);
  for (const t of dedupTerms(light).slice(1)) out.push(t);
  return [...new Set(out.map(norm))].filter((t) => t.trim());
}

/**
 * Is this open upstream issue/PR (a search hit) really about this dark workflow?
 * Issue: its title names the workflow, and its title or body talks about it failing.
 * PR: its title names the workflow and says it fixes something / mentions failing.
 * Anything mentioning the dark run itself counts. Dependency dashboards never count.
 */
export function isRealDuplicate(item, light) {
  const title = String(item.title || '');
  const body = String(item.body || '');
  if (/dependency dashboard/i.test(title)) return false;
  const runId = (/\/actions\/runs\/(\d+)/.exec(light.run || '') || [])[1];
  if (runId && (title + body).includes(runId)) return true;
  const named = titleTerms(light).some((t) => norm(title).includes(t));
  if (!named) return false;
  if (item.isPr || item.pull_request) return FIX_WORDS.test(title) || FAILURE_WORDS.test(title);
  return FAILURE_WORDS.test(title) || FAILURE_WORDS.test(body);
}

/** A note for Joshua (not part of the upstream body) when a dark is probably not worth filing. */
export function reviewHint(light) {
  const c = String(light.cause || '');
  if (light.conclusion === 'skipped') return 'latest run was skipped, not failed — probably not worth filing';
  if (/owner marked spammy/i.test(c)) return 'account-level problem on their side — do not file';
  if (/higher priority waiting request/i.test(c)) return 'cancelled by a concurrency group — likely noise';
  if (/awaiting a runner|runner group .* not found|self hosted runner|custom container implementation/i.test(c)) return 'self-hosted runner problem — maintainers usually know';
  if (light.conclusion === 'startup_failure') return 'workflow failed to start (config/permissions on their side)';
  if (light.class === 'infra') return 'infra-class dark (runner/timeout/cancel) — lower value';
  return null;
}

/** Suggested upstream issue title. */
export function draftTitle(group, lights, branch = 'the default branch') {
  if (lights.length === 1) {
    const l = lights[0];
    const since = day(l.darkSince);
    return `CI: "${l.workflow}" workflow ${darkVerb(l.conclusion)} on ${branch}${since ? ` since ${since}` : ''}`;
  }
  const names = lights.slice(0, 3).map((l) => `"${l.workflow}"`).join(', ');
  return `CI: ${lights.length} workflows dark on ${branch} (${names}${lights.length > 3 ? `, +${lights.length - 3} more` : ''})`;
}

function workflowSection(light, info = {}, heading = true) {
  const out = [];
  if (heading) out.push(`### ${light.workflow} (\`${light.path}\`)`, '');
  const branch = info.branch ? `\`${info.branch}\`` : 'the default branch';
  out.push(`- Latest run on ${branch}: ${light.run}${light.conclusion ? ` — dark (conclusion: \`${light.conclusion}\`)` : ''}${light.runAt ? `, ${stamp(light.runAt)}` : ''}`);
  if (light.darkSince) out.push(`- Dark since: ${stamp(light.darkSince)} (first run of the current streak)`);
  if (info.job) out.push(`- Job / step: \`${info.job}\`${info.step ? ` → \`${info.step}\`` : ''}`);
  const cause = likelyCause(light, info);
  if (cause) out.push(`- Likely cause: ${cause.replace(/`/g, "'")}`);
  if (info.fix) out.push(`- A change that makes this workflow lit on a fork: ${info.fix.branchUrl} (lit run: ${info.fix.runUrl}) — happy to open a PR if that helps.`);
  if (info.tail?.length) out.push('', '<details><summary>End of the job log</summary>', '', '```', ...info.tail.map((l) => l.replace(/```/g, "'''")), '```', '', '</details>');
  return out.join('\n');
}

/** Suggested upstream issue body (plain, polite, short). */
export function draftBody(group, lights, infos = {}) {
  const name = group.repo.split('/')[1];
  const branch = infos[lights[0]?.key]?.branch;
  const where = branch ? `\`${branch}\`` : 'the default branch';
  const parts = [];
  if (lights.length === 1) {
    const l = lights[0];
    parts.push(`Hi! The **${l.workflow}** workflow (\`${l.path}\`) on ${where} has been ${darkVerb(l.conclusion)}${l.darkSince ? ` since ${day(l.darkSince)}` : ''}. Here is what I saw, in case it's useful:`, '', workflowSection(l, infos[l.key], false));
  } else {
    parts.push(`Hi! A few workflows on ${where} have been dark recently. Details below, in case they're useful:`);
    for (const l of lights) parts.push('', workflowSection(l, infos[l.key], true));
  }
  parts.push('', `If this is already known or expected, feel free to close. Thanks for maintaining ${name}!`, '', '---', `<sub>Found by the [dark crawler](${CRAWLER_URL}), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>`);
  return parts.join('\n');
}

/**
 * Render the draft file. Title and body sit between markers so file-approved.mjs can read them back.
 * meta: { state: 'ready'|'duplicate'|'filed'|'resolved', generatedAt, duplicates: [{key, workflow, matches:[{number,title,url,isPr}]}], hints: [], filed, resolvedNote }
 */
export function renderDraft(group, title, body, meta = {}) {
  const state = meta.state || 'ready';
  const statusLine = {
    ready: "ready to file — awaiting Joshua's OK (check its box in QUEUE.md)",
    duplicate: 'not for filing — upstream already has an open issue/PR about every dark workflow here',
    filed: `filed upstream: ${meta.filed}`,
    resolved: `resolved — ${meta.resolvedNote || 'lit again'}; nothing to file`,
  }[state];
  const lines = [
    `<!-- dark-draft: ${group.repo} -->`,
    `<!-- draft-state: ${state} -->`,
    `# Upstream issue draft: ${group.repo}`,
    '',
    `- **Status:** ${statusLine}`,
    `- **Would be filed at:** https://github.com/${group.repo}/issues/new`,
    `- **Stars:** ${group.stars || '?'} · **Generated:** ${meta.generatedAt || new Date().toISOString()}`,
    '- Nothing in this file has been sent anywhere.',
  ];
  for (const h of meta.hints || []) lines.push(`- **Note for Joshua:** ${h}`);
  if (meta.duplicates?.length) {
    lines.push('', '## Skipped: upstream already tracking', '');
    for (const d of meta.duplicates) lines.push(`- ${d.workflow} (\`${d.path}\`): ${d.matches.map((m) => `[${m.isPr ? 'PR' : 'issue'} #${m.number}](${m.url}) "${String(m.title).replace(/[\[\]]/g, '')}"`).join(', ')}`);
    if (state === 'ready') lines.push('', 'These workflows are left out of the body below.');
  }
  if (title && body) {
    lines.push('', '## Suggested title', '', '<!-- BEGIN TITLE -->', title, '<!-- END TITLE -->', '', '## Body', '', '<!-- BEGIN BODY -->', body, '<!-- END BODY -->');
  }
  return lines.join('\n') + '\n';
}

/** Read a draft file back: { repo, state, title, body }. */
export function parseDraft(text) {
  const grab = (re) => (re.exec(text) || [])[1];
  return {
    repo: grab(/<!-- dark-draft: (\S+) -->/),
    state: grab(/<!-- draft-state: (\S+) -->/),
    title: grab(/<!-- BEGIN TITLE -->\n([\s\S]*?)\n<!-- END TITLE -->/)?.trim(),
    body: grab(/<!-- BEGIN BODY -->\n([\s\S]*?)\n<!-- END BODY -->/),
  };
}

/** Lines in the drafts section of QUEUE.md: { repoKey: { checked, repo, line } } */
export function parseQueueApprovals(md) {
  const out = {};
  const sec = extractSection(md);
  if (sec == null) return null;
  for (const line of sec.split('\n')) {
    const m = /^- \[([ xX])\] ([\w.-]+\/[\w.-]+) — /.exec(line);
    if (m) out[repoKey(m[2])] = { checked: m[1] !== ' ', repo: m[2], line };
  }
  return out;
}
export function extractSection(md) {
  const a = String(md || '').indexOf(SECTION_START), b = String(md || '').indexOf(SECTION_END);
  return a >= 0 && b > a ? md.slice(a + SECTION_START.length, b) : null;
}

/** The drafts section of QUEUE.md, built from drafts/index.json. */
export function queueSection(index) {
  const all = Object.values(index?.drafts || {}).sort((a, b) => (b.stars || 0) - (a.stars || 0) || a.repo.localeCompare(b.repo));
  const clean = (s) => String(s || '').replace(/\n/g, ' ');
  const ready = all.filter((d) => d.state === 'ready' || d.state === 'filed').map((d) => `- [${d.approved || d.state === 'filed' ? 'x' : ' '}] ${d.repo} — ${clean(d.title)} — ${d.file}${d.state === 'filed' ? ` — filed: ${d.filed}` : ''}${d.hint ? ` — note: ${d.hint}` : ''}`);
  const dup = all.filter((d) => d.state === 'duplicate').map((d) => `- ${d.repo} — ${d.file} — open upstream: ${(d.duplicateLinks || []).join(', ')}`);
  const res = all.filter((d) => d.state === 'resolved').map((d) => `- ~~${d.repo} — ${clean(d.title)}~~ — ${d.file} — resolved ${day(d.resolvedAt)} (${d.resolvedNote || 'lit again'})${d.filed ? `; was filed: ${d.filed}` : ''}`);
  return [
    SECTION_START,
    SECTION_TITLE,
    '',
    'Drafted after each crawl by `scripts/draft-upstream.mjs`, one per repo with dark workflows. **Nothing here is sent.** To approve one, change its `[ ]` to `[x]`; it is filed only when Joshua runs the manual **file-approved** workflow (typing the confirm word). Unchecked lines are never filed.',
    '',
    ...(ready.length ? ready : ['_No drafts right now._']),
    ...(dup.length ? ['', '### Not queued — upstream already has an open issue/PR', '', ...dup] : []),
    ...(res.length ? ['', `<details><summary>Resolved — lit again (${res.length}; drafts in drafts/resolved/, kept as history)</summary>`, '', ...res, '', '</details>'] : []),
    SECTION_END,
  ].join('\n');
}

/** Replace (or append) the drafts section, keeping everything else in QUEUE.md as-is. */
export function replaceQueueSection(md, section) {
  const text = String(md || '');
  const a = text.indexOf(SECTION_START), b = text.indexOf(SECTION_END);
  if (a >= 0 && b > a) return text.slice(0, a) + section + text.slice(b + SECTION_END.length);
  return text.replace(/\s*$/, '') + '\n\n' + section + '\n';
}

/**
 * Mark index entries whose repo has no dark workflow any more as resolved.
 * Returns [{ key, from, to }] file moves for the caller to perform.
 */
export function resolveLit(index, groups, { now = new Date().toISOString(), state = null } = {}) {
  const moves = [];
  for (const [k, d] of Object.entries(index.drafts || {})) {
    if (groups.has(k) || d.state === 'resolved') continue;
    const onBoard = state ? Object.values(state.darks || {}).some((e) => repoKey(e.repo) === k) : true;
    const from = d.file;
    const to = `drafts/resolved/${draftFileName(d.repo)}`;
    d.state = 'resolved'; d.resolvedAt = now; d.resolvedNote = onBoard ? 'lit again' : 'no longer on the board'; d.approved = false; d.file = to;
    moves.push({ key: k, from, to });
  }
  return moves;
}

/** Drop resolved entries older than keepDays (their files stay in drafts/resolved/). */
export function pruneResolved(index, { now = Date.now(), keepDays = 14 } = {}) {
  for (const [k, d] of Object.entries(index.drafts || {})) if (d.state === 'resolved' && now - Date.parse(d.resolvedAt) > keepDays * 86400_000) delete index.drafts[k];
}

// ---------- backfill from past crawls ----------

/** Build a minimal dark entry from one of our own darks issues (title "○ dark: owner/repo — workflow"). */
export function entryFromIssue(issue) {
  const body = String(issue.body || '');
  const key = (/<!-- dark-key: (.+?) -->/.exec(body) || [])[1];
  const t = /dark: ([\w.-]+\/[\w.-]+) — (.+)$/.exec(String(issue.title || ''));
  const repo = key ? key.split('#')[0] : t?.[1];
  if (!repo) return null;
  const path = key ? key.split('#')[1] : (/`(\.github\/workflows\/[^`]+)`/.exec(body) || [])[1];
  const row = (name) => (new RegExp(`\\| ${name} \\| (.+?) \\|`).exec(body) || [])[1];
  return {
    key: key || `${repo}#${path || t?.[2]}`, repo, workflow: (/`\.github\/workflows\/[^`]+` \((.+?)\) \|/.exec(body) || [])[1] || t?.[2] || path,
    path: path || '', light: 'dark', cause: row('cause') || null, class: row('class') || null,
    run: (/(https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/actions\/runs\/\d+)/.exec(body) || [])[1] || null,
    conclusion: null, stars: Number((/\((\d+) ★\)/.exec(body) || [])[1]) || 0, fromIssue: issue.number,
  };
}

/**
 * Merge past crawl snapshots (oldest → newest), our own darks issues and queued.json into one
 * record per dark key: { last: latest entry seen, lastDark: latest entry while dark, issue }.
 */
export function collectHistory({ snapshots = [], issues = [], queued = [] } = {}) {
  const hist = new Map();
  const rec = (k) => { if (!hist.has(k)) hist.set(k, { key: k, last: null, lastDark: null, issue: null, queued: null }); return hist.get(k); };
  for (const snap of snapshots) {
    for (const e of Object.values(snap.darks || {})) {
      const r = rec(e.key);
      r.last = e;
      if (e.light === 'dark' || (e.light !== 'lit' && !e.relitAt)) r.lastDark = e;
      else if (!r.lastDark) r.lastDark = { ...e, light: 'dark' }; // first seen already relit: its dark facts are still in the entry
    }
  }
  for (const i of issues) {
    const e = entryFromIssue(i);
    if (!e) continue;
    const r = rec(e.key);
    r.issue = { number: i.number, state: String(i.state).toLowerCase(), closedAt: i.closed_at || i.closedAt || null, url: i.html_url || i.url };
    if (!r.lastDark) r.lastDark = e;
  }
  for (const q of queued) { const r = rec(q.key); r.queued = q; if (!r.lastDark) { const [repo, path] = q.key.split('#'); r.lastDark = { key: q.key, repo, path, workflow: path?.split('/').pop(), light: 'dark', cause: q.note, stars: 0 }; } }
  return hist;
}

/**
 * Split history into: stillDark (entries to draft like live darks) and resolved (per repo, lit again).
 * A key counts as still dark if its latest snapshot says dark, or if its issue is still open.
 * Repos that already have a live dark group are skipped (the live crawl drafts them).
 */
export function backfillPlan(hist, liveGroups) {
  const stillDark = [];
  const resolved = new Map();
  for (const r of hist.values()) {
    const e = r.lastDark;
    if (!e?.repo) continue;
    const k = repoKey(e.repo);
    if (liveGroups.has(k)) continue;
    const dark = r.last ? r.last.light === 'dark' : r.issue?.state === 'open';
    if (dark || r.issue?.state === 'open') { stillDark.push({ ...e, light: 'dark' }); continue; }
    const g = resolved.get(k) || { repo: e.repo, stars: 0, lights: [], relitAt: null, relitRun: null, issues: [], queued: [] };
    if ((e.stars || 0) > g.stars) { g.stars = e.stars; g.repo = e.repo; }
    if (!g.lights.some((l) => String(l.path).toLowerCase() === String(e.path).toLowerCase())) g.lights.push(e);
    const at = r.last?.relitAt || r.issue?.closedAt || r.last?.lastChecked || null;
    if (at && (!g.relitAt || at > g.relitAt)) { g.relitAt = at; g.relitRun = r.last?.relitRun || null; }
    if (r.issue) g.issues.push(r.issue.url || `#${r.issue.number}`);
    if (r.queued) g.queued.push(r.queued.action);
    resolved.set(k, g);
  }
  // still-dark repos that turned out to be live after all are dropped above; dedupe still-dark by key
  const seen = new Set();
  return { stillDark: stillDark.filter((e) => !seen.has(e.key.toLowerCase()) && seen.add(e.key.toLowerCase())), resolved };
}
