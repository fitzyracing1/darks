#!/usr/bin/env node
// draft-upstream — after a crawl, write one ready-to-file upstream issue DRAFT per repo with dark
// workflows, and list them in QUEUE.md for Joshua's approval.
//
// HARD RULE: this script never writes to GitHub. Its client only knows GET. Upstream repos are only
// read (runs, jobs, job logs, issue search). All output is local files: drafts/, drafts/index.json, QUEUE.md.
//
//   GITHUB_TOKEN=... node scripts/draft-upstream.mjs [--dir .] [--prev-queue QUEUE.prev.md] [--only owner/repo] [--no-network]
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync, unlinkSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import {
  groupDarks, repoKey, draftFileName, logTail, dedupQuery, isRealDuplicate, reviewHint, draftTitle, draftBody, renderDraft,
  parseQueueApprovals, queueSection, replaceQueueSection, resolveLit, CACHE_VERSION, collectHistory, backfillPlan,
} from '../lib/drafts.mjs';

const API = 'https://api.github.com';
export const FORK_OWNER = process.env.FORK_OWNER || 'fitzyracing1';

/** Read-only GitHub client. There is no write method on purpose. */
export function createReader({ token = process.env.GITHUB_TOKEN, fetchImpl = fetch, floor = 40, searchDelay = 2200, log = console.error } = {}) {
  const st = { remaining: Infinity, calls: 0, searchCalls: 0 };
  const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'dark-crawler-drafts', ...(token ? { Authorization: `Bearer ${token}` } : {}) };
  async function request(path, { text = false } = {}) {
    if (st.remaining < floor) throw Object.assign(new Error(`rate budget low (${st.remaining} left)`), { budget: true });
    for (let attempt = 0; attempt < 3; attempt++) {
      st.calls++;
      const search = path.startsWith('/search/');
      if (search) { st.searchCalls++; if (searchDelay) await new Promise((r) => setTimeout(r, searchDelay)); }
      const res = await fetchImpl(API + path, { method: 'GET', headers, redirect: 'follow' });
      const rem = res.headers?.get?.('x-ratelimit-remaining');
      if (rem != null && !search) st.remaining = Number(rem);
      if ((res.status === 403 || res.status === 429) && res.headers?.get?.('retry-after')) {
        const wait = Math.min(90, Number(res.headers.get('retry-after'))) * 1000; log(`rate limited, waiting ${wait / 1000}s`); await new Promise((r) => setTimeout(r, wait)); continue;
      }
      if (res.status === 403 && rem === '0') throw Object.assign(new Error('rate limit reached'), { budget: true });
      if (!res.ok) throw Object.assign(new Error(`GET ${path}: HTTP ${res.status}`), { status: res.status });
      return text ? res.text() : res.json();
    }
    throw new Error(`GET ${path}: gave up after retries`);
  }
  return { get: (p) => request(p), getText: (p) => request(p, { text: true }), st };
}

const runIdOf = (url) => (/\/actions\/runs\/(\d+)/.exec(url || '') || [])[1];

/** Run meta, failed job/step and the log tail for one dark light. Read-only. */
export async function inspectLight(gh, repo, light) {
  const info = { v: CACHE_VERSION, run: light.run, fetchedAt: new Date().toISOString() };
  const id = runIdOf(light.run);
  if (!id) return info;
  try {
    const run = await gh.get(`/repos/${repo}/actions/runs/${id}`);
    info.branch = run.head_branch; info.fullName = run.repository?.full_name;
  } catch (e) { if (e.budget) throw e; }
  try {
    const jobs = await gh.get(`/repos/${repo}/actions/runs/${id}/jobs?filter=latest&per_page=50`);
    const job = (jobs.jobs || []).find((j) => j.conclusion && !['success', 'skipped', 'neutral'].includes(j.conclusion));
    if (job) {
      info.job = job.name;
      info.step = job.steps?.find((s) => ['failure', 'timed_out', 'cancelled'].includes(s.conclusion))?.name;
      try {
        const { cause, tail } = logTail(await gh.getText(`/repos/${repo}/actions/jobs/${job.id}/logs`));
        info.logCause = cause; info.tail = tail;
      } catch (e) { if (e.budget) throw e; info.logError = `log not readable (${e.status || e.message})`; }
    }
  } catch (e) { if (e.budget) throw e; }
  return info;
}

/** Open upstream issues/PRs that mention this workflow (read-only search). */
export async function findDuplicates(gh, repo, light) {
  const j = await gh.get(`/search/issues?q=${encodeURIComponent(dedupQuery(repo, light))}&per_page=30`);
  return (j.items || [])
    .map((i) => ({ number: i.number, title: i.title, body: i.body, url: i.html_url, isPr: !!i.pull_request }))
    .filter((i) => isRealDuplicate(i, light))
    .slice(0, 5)
    .map(({ body, ...rest }) => rest);
}

/** A branch on the FORK_OWNER fork where this workflow has a lit run newer than the dark streak. */
export async function findFix(gh, repo, light, forkNames) {
  const name = repo.split('/')[1];
  if (!forkNames.has(name.toLowerCase())) return null;
  let fork;
  try { fork = await gh.get(`/repos/${FORK_OWNER}/${name}`); } catch (e) { if (e.budget) throw e; return null; }
  if (repoKey(fork.parent?.full_name || '') !== repoKey(repo) && repoKey(fork.source?.full_name || '') !== repoKey(repo)) return null;
  const file = String(light.path).split('/').pop();
  try {
    const j = await gh.get(`/repos/${fork.full_name}/actions/workflows/${encodeURIComponent(file)}/runs?status=success&per_page=30`);
    const since = Date.parse(light.darkSince || 0) || 0;
    const run = (j.workflow_runs || []).find((r) => r.head_branch && r.head_branch !== fork.default_branch && Date.parse(r.created_at) >= since);
    if (!run) return null;
    return { branch: run.head_branch, branchUrl: `https://github.com/${fork.full_name}/tree/${encodeURIComponent(run.head_branch)}`, runUrl: run.html_url };
  } catch (e) { if (e.budget) throw e; return null; }
}

async function listForks(gh) {
  const names = new Set();
  for (let page = 1; page <= 10; page++) {
    const j = await gh.get(`/users/${FORK_OWNER}/repos?type=owner&per_page=100&page=${page}`);
    for (const r of j) if (r.fork) names.add(r.name.toLowerCase());
    if (j.length < 100) break;
  }
  return names;
}

/** Build/refresh all drafts. Returns a summary. Writes only local files under dir. */
export async function draftAll({ dir = '.', gh = createReader(), prevQueue = null, only = [], network = true, history = null, now = new Date().toISOString(), log = console.error } = {}) {
  const read = (f, d) => { try { return JSON.parse(readFileSync(join(dir, f), 'utf8')); } catch { return d; } };
  const state = read('darks.json', { darks: {} });
  const index = read('drafts/index.json', { version: 1, drafts: {} });
  index.drafts ||= {};
  const queuePath = join(dir, 'QUEUE.md');
  const queueNow = existsSync(queuePath) ? readFileSync(queuePath, 'utf8') : '';
  // Approvals: the checkboxes Joshua ticked. Taken from the QUEUE.md as it was before the crawler rewrote it.
  const approvals = parseQueueApprovals(prevQueue ?? queueNow);
  if (approvals) for (const [k, d] of Object.entries(index.drafts)) d.approved = !!approvals[k]?.checked;

  // Backfill: past crawls. Still-dark keys the live board no longer lists get drafted like live darks;
  // repos that went lit get a resolved draft (history), see below.
  let plan = null;
  if (history) {
    plan = backfillPlan(history, groupDarks(state));
    for (const e of plan.stillDark) state.darks[e.key] = { ...e, backfill: true };
  }
  let groups = groupDarks(state);
  if (only.length) { const want = new Set(only.map(repoKey)); groups = new Map([...groups].filter(([k]) => want.has(k))); }
  mkdirSync(join(dir, 'drafts/resolved'), { recursive: true });

  let forks = new Set();
  let stopped = null;
  if (network) { try { forks = await listForks(gh); } catch (e) { log(`forks: ${e.message}`); if (e.budget) stopped = e.message; } }

  const summary = { drafted: [], duplicate: [], kept: [], resolved: [], backfill: { stillDark: plan?.stillDark.length || 0, resolved: [] }, stopped: null };
  for (const [k, g] of groups) {
    const prev = index.drafts[k] || {};
    const cache = prev.cache || {};
    const infos = {}, dups = [];
    let fresh = true;
    for (const l of g.lights) {
      let info = cache[l.key]?.run === l.run && cache[l.key]?.v === CACHE_VERSION ? { ...cache[l.key] } : null;
      if (network && !stopped) {
        try {
          if (!info) info = await inspectLight(gh, g.repo, l);
          info.duplicates = await findDuplicates(gh, info.fullName || g.repo, l);
          info.fix = await findFix(gh, info.fullName || g.repo, l, forks);
        } catch (e) { if (e.budget) { stopped = e.message; fresh = false; } else log(`  ${g.repo} ${l.path}: ${e.message}`); }
      } else if (network) fresh = false;
      infos[l.key] = info || { run: l.run };
      if (infos[l.key].duplicates?.length) dups.push({ key: l.key, workflow: l.workflow, path: l.path, matches: infos[l.key].duplicates });
    }
    if (!fresh && prev.file && existsSync(join(dir, prev.file)) && prev.state !== 'resolved') { summary.kept.push(g.repo); continue; } // out of budget: keep last draft untouched

    const repo = Object.values(infos).find((i) => i.fullName)?.fullName || g.repo;
    const group = { ...g, repo };
    const lights = g.lights.filter((l) => !infos[l.key].duplicates?.length);
    const branch = infos[g.lights[0].key]?.branch;
    const file = `drafts/${draftFileName(repo)}`;
    const hints = [...new Set(lights.map(reviewHint).filter(Boolean))];
    let st = lights.length ? 'ready' : 'duplicate';
    if (prev.state === 'filed') st = 'filed';
    const title = lights.length ? draftTitle(group, lights, branch || undefined) : null;
    const body = lights.length ? draftBody(group, lights, infos) : null;
    const text = renderDraft(group, title, body, { state: st, generatedAt: now, duplicates: dups, hints, filed: prev.filed });
    if (prev.file && prev.file !== file && existsSync(join(dir, prev.file))) unlinkSync(join(dir, prev.file)); // was resolved, or renamed
    writeFileSync(join(dir, file), text);
    index.drafts[k] = {
      repo, stars: g.stars, file, state: st, title: title || prev.title || `(all dark workflows already tracked upstream)`,
      keys: g.lights.map((l) => l.key), approved: st === 'ready' ? !!prev.approved && prev.state !== 'resolved' : false,
      hint: hints.length === lights.length && lights.length ? hints[0] : null,
      duplicateLinks: dups.flatMap((d) => d.matches.map((m) => m.url)), filed: prev.filed, updatedAt: now,
      cache: Object.fromEntries(Object.entries(infos).map(([key, i]) => [key, i])),
    };
    (st === 'duplicate' ? summary.duplicate : summary.drafted).push({ repo, title: index.drafts[k].title, file });
  }

  if (!only.length) {
    for (const m of resolveLit(index, groups, { now, state })) {
      const d = index.drafts[m.key];
      const src = join(dir, m.from);
      const body = existsSync(src) ? readFileSync(src, 'utf8') : '';
      const marked = body.replace(/<!-- draft-state: \S+ -->/, '<!-- draft-state: resolved -->').replace(/- \*\*Status:\*\* .*/, `- **Status:** resolved — ${d.resolvedNote} (${now.slice(0, 10)}); nothing to file`);
      mkdirSync(dirname(join(dir, m.to)), { recursive: true });
      writeFileSync(join(dir, m.to), marked);
      if (existsSync(src) && m.from !== m.to) unlinkSync(src);
      summary.resolved.push(d.repo);
    }
    // resolved entries are kept as history (no pruning)
  }

  if (plan) {
    for (const [k, g] of plan.resolved) {
      if (index.drafts[k]) continue; // live crawl or an earlier run already has this repo
      const file = `drafts/resolved/${draftFileName(g.repo)}`;
      const title = draftTitle(g, g.lights);
      const body = draftBody(g, g.lights, {});
      const resolvedNote = `lit again${g.relitAt ? ` ${g.relitAt.slice(0, 10)}` : ''}${g.relitRun ? `: ${g.relitRun}` : ''}; backfilled from past crawls`;
      writeFileSync(join(dir, file), renderDraft(g, title, body, { state: 'resolved', generatedAt: now, resolvedNote, hints: g.queued.length ? [`was queued earlier: ${g.queued.join('; ')}`] : [] }));
      index.drafts[k] = { repo: g.repo, stars: g.stars, file, state: 'resolved', title, keys: g.lights.map((l) => l.key), approved: false, resolvedAt: g.relitAt || now, resolvedNote, backfill: true, darkIssues: g.issues, updatedAt: now };
      summary.backfill.resolved.push(g.repo);
    }
  }

  writeFileSync(join(dir, 'drafts/index.json'), JSON.stringify(index, null, 2) + '\n');
  writeFileSync(queuePath, replaceQueueSection(queueNow, queueSection(index)));
  summary.stopped = stopped;
  summary.apiCalls = gh.st?.calls || 0;
  return summary;
}

/**
 * Past crawls, read-only: every darks.json in git history (all local refs + origin/*), our own darks
 * issues (this repo only), and queued.json.
 */
export async function loadHistory(dir, gh, { darksRepo = process.env.DARKS_REPO || 'fitzyracing1/darks' } = {}) {
  const { execFileSync } = await import('node:child_process');
  const git = (...a) => execFileSync('git', ['-C', dir, ...a], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  const shas = git('log', '--all', '--reverse', '--date-order', '--format=%H', '--', 'darks.json').trim().split('\n').filter(Boolean);
  const snapshots = [];
  for (const sha of shas) { try { snapshots.push(JSON.parse(git('show', `${sha}:darks.json`))); } catch {} }
  try { snapshots.push(JSON.parse(readFileSync(join(dir, 'darks.json'), 'utf8'))); } catch {}
  const issues = [];
  for (let page = 1; page <= 10; page++) {
    const j = await gh.get(`/repos/${darksRepo}/issues?state=all&labels=dark&per_page=100&page=${page}`);
    issues.push(...j.filter((i) => !i.pull_request));
    if (j.length < 100) break;
  }
  let queued = [];
  try { queued = JSON.parse(readFileSync(join(dir, 'queued.json'), 'utf8')); } catch {}
  const hist = collectHistory({ snapshots, issues, queued });
  hist.issueCount = issues.length; hist.snapshotCount = snapshots.length;
  return hist;
}

async function main() {
  const args = process.argv.slice(2);
  const opt = { dir: '.', prevQueue: null, only: [], network: true, backfill: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--dir') opt.dir = args[++i];
    else if (a === '--prev-queue') opt.prevQueue = args[++i];
    else if (a === '--only') opt.only.push(args[++i]);
    else if (a === '--no-network') opt.network = false;
    else if (a === '--backfill') opt.backfill = true;
    else { console.error(`unknown argument ${a}`); process.exit(2); }
  }
  const prevQueue = opt.prevQueue && existsSync(opt.prevQueue) ? readFileSync(opt.prevQueue, 'utf8') : null;
  const gh = createReader();
  const history = opt.backfill ? await loadHistory(resolve(opt.dir), gh) : null;
  if (history) console.error(`backfill: ${history.size} dark keys from past crawls (${history.issueCount} darks issues, ${history.snapshotCount} darks.json snapshots)`);
  const s = await draftAll({ dir: resolve(opt.dir), gh, prevQueue, only: opt.only, network: opt.network, history });
  if (history) console.error(`backfill: ${s.backfill.stillDark} still-dark keys not on the live board, ${s.backfill.resolved.length} repos backfilled as resolved`);
  console.error(`draft-upstream: ${s.drafted.length} drafts ready, ${s.duplicate.length} skipped (already tracked upstream), ${s.kept.length} kept from last run, ${s.resolved.length} resolved; ${s.apiCalls} read-only API calls${s.stopped ? `; stopped early: ${s.stopped}` : ''}`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) main().catch((e) => { console.error(`draft-upstream: ${e.stack || e.message}`); process.exit(1); });
