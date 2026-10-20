#!/usr/bin/env node
// rewrite-issues — ONE-OFF: regenerate the bodies of OPEN issues in fitzyracing1/darks with the written layout
// (lib/written-issue.mjs). Edits issue BODIES only: never opens, closes, comments, or touches labels/titles,
// and refuses every write outside fitzyracing1/darks. Upstream repos are only read (runs, jobs, job logs).
//
//   GITHUB_TOKEN=... node scripts/rewrite-issues.mjs [--dir .] [--dry-run [--out DIR]] [--only 12,34] [--limit N]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createReader } from './draft-upstream.mjs';
import { writtenIssueBody, errorLines } from '../lib/written-issue.mjs';
import { repoKey } from '../lib/drafts.mjs';

export const DARKS_REPO = 'fitzyracing1/darks';
const runIdOf = (url) => (/\/actions\/runs\/(\d+)/.exec(url || '') || [])[1];

/** The only write: PATCH body of one issue in DARKS_REPO. */
export function bodyWriter({ token = process.env.GITHUB_TOKEN, fetchImpl = fetch } = {}) {
  return async (number, body) => {
    if (!Number.isInteger(number)) throw new Error('bad issue number');
    const path = `/repos/${DARKS_REPO}/issues/${number}`;
    const res = await fetchImpl('https://api.github.com' + path, {
      method: 'PATCH', body: JSON.stringify({ body }),
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'darks-rewrite', Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`PATCH ${path}: HTTP ${res.status}`);
  };
}

/** Failed job/step/log lines for an entry's run. Read-only. */
export async function fetchInfo(gh, e) {
  const info = {};
  const id = runIdOf(e.run);
  if (!id) { info.logError = 'no run id'; return info; }
  try { info.branch = (await gh.get(`/repos/${e.repo}/actions/runs/${id}`)).head_branch; } catch (err) { if (err.budget) throw err; }
  try {
    const jobs = await gh.get(`/repos/${e.repo}/actions/runs/${id}/jobs?filter=latest&per_page=100`);
    const job = (jobs.jobs || []).find((j) => j.conclusion && !['success', 'skipped', 'neutral'].includes(j.conclusion));
    if (!(jobs.jobs || []).length) { info.noJobs = true; return info; }
    if (!job) { info.logError = 'no dark job in the run'; return info; }
    info.job = job.name;
    info.step = job.steps?.find((s) => ['failure', 'timed_out', 'cancelled'].includes(s.conclusion))?.name;
    try { info.errorLines = errorLines(await gh.getText(`/repos/${e.repo}/actions/jobs/${job.id}/logs`)); if (!info.errorLines.length) info.logError = 'log empty'; }
    catch (err) { if (err.budget) throw err; info.logError = err.status === 410 || err.status === 404 ? 'log expired or removed' : `log not readable (HTTP ${err.status || err.message})`; }
  } catch (err) { if (err.budget) throw err; info.logError ||= `jobs not readable (HTTP ${err.status || err.message})`; }
  return info;
}

export function fixLookup(dir) {
  const read = (f, d) => { try { return JSON.parse(readFileSync(join(dir, f), 'utf8')); } catch { return d; } };
  const fixes = new Map(), queued = new Map();
  for (const d of Object.values(read('drafts/index.json', { drafts: {} }).drafts || {}))
    for (const [k, c] of Object.entries(d.cache || {})) if (c?.fix?.branchUrl) fixes.set(k.toLowerCase(), c.fix);
  for (const q of read('queued.json', [])) if (q?.key) queued.set(q.key.toLowerCase(), q);
  return (key) => ({ fix: fixes.get(key.toLowerCase()) || null, queued: queued.get(key.toLowerCase()) || null });
}

async function main() {
  const a = process.argv.slice(2);
  const opt = { dir: '.', dry: false, out: 'rewrite-preview', only: null, limit: Infinity };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--dir') opt.dir = a[++i]; else if (a[i] === '--dry-run') opt.dry = true; else if (a[i] === '--out') opt.out = a[++i];
    else if (a[i] === '--only') opt.only = new Set(a[++i].split(',').map(Number)); else if (a[i] === '--limit') opt.limit = Number(a[++i]);
  }
  const dir = resolve(opt.dir);
  const state = JSON.parse(readFileSync(join(dir, 'darks.json'), 'utf8'));
  const byKey = new Map(Object.values(state.darks).map((e) => [e.key, e]));
  const fixOf = fixLookup(dir);
  const gh = createReader({ searchDelay: 0 });
  const write = bodyWriter();
  let issues = [];
  for (let p = 1; p <= 10; p++) { const j = await gh.get(`/repos/${DARKS_REPO}/issues?state=open&labels=dark&per_page=100&page=${p}`); issues = issues.concat(j.filter((i) => !i.pull_request)); if (j.length < 100) break; }
  if (opt.only) issues = issues.filter((i) => opt.only.has(i.number));
  issues = issues.slice(0, opt.limit);
  if (opt.dry) mkdirSync(opt.out, { recursive: true });
  const report = { rewritten: [], unchanged: [], skipped: [], gaps: [] };
  for (const i of issues) {
    const key = /<!-- dark-key: (.+?) -->/.exec(i.body || '')?.[1];
    const e = key && byKey.get(key);
    if (!e) { report.skipped.push(`#${i.number}: ${key ? 'key not in darks.json' : 'no dark-key'}`); continue; }
    const info = { ...(await fetchInfo(gh, e)), ...fixOf(key) };
    if (info.logError) report.gaps.push(`#${i.number} ${key}: ${info.logError}`);
    const body = writtenIssueBody(e, info);
    if (opt.dry) { writeFileSync(join(opt.out, `${i.number}.md`), body); report.rewritten.push(i.number); continue; }
    if (body === i.body) { report.unchanged.push(i.number); continue; }
    await write(i.number, body); report.rewritten.push(i.number);
    console.error(`rewrote #${i.number} ${key}`);
  }
  console.log(JSON.stringify({ dry: opt.dry, ...report, apiCalls: gh.st.calls }, null, 1));
}
if (import.meta.url === `file://${process.argv[1]}`) main().catch((e) => { console.error(e); process.exit(1); });
