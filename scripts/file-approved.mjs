#!/usr/bin/env node
// file-approved — file ONE approved upstream issue draft. Manual only.
//
// Files a draft only if ALL of these hold:
//   - its line in QUEUE.md is checked "- [x]" by Joshua,
//   - its draft is still "ready" (not duplicate / resolved / already filed),
//   - a fresh read-only search finds no open upstream issue/PR about the workflow,
//   - it was named explicitly with --repo owner/repo, and --confirm FILE was given.
// Without --confirm FILE it is a dry run that only prints what it would file.
// The only write it can make is POST /repos/<that repo>/issues, with UPSTREAM_TOKEN (a token Joshua adds;
// the workflow GITHUB_TOKEN cannot write to other repos). Never scheduled; see .github/workflows/file-approved.yml.
//
//   node scripts/file-approved.mjs [--dir .] [--repo owner/repo] [--confirm FILE]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseQueueApprovals, parseDraft, repoKey, queueSection, replaceQueueSection } from '../lib/drafts.mjs';
import { createReader, findDuplicates } from './draft-upstream.mjs';

export const CONFIRM_WORD = 'FILE';

/** Which drafts are approved and fileable right now (no network). */
export function approvedDrafts(dir) {
  const queue = existsSync(join(dir, 'QUEUE.md')) ? readFileSync(join(dir, 'QUEUE.md'), 'utf8') : '';
  const approvals = parseQueueApprovals(queue) || {};
  const index = JSON.parse(readFileSync(join(dir, 'drafts/index.json'), 'utf8'));
  const out = [];
  for (const [k, a] of Object.entries(approvals)) {
    if (!a.checked) continue;
    const d = index.drafts?.[k];
    if (!d || d.state !== 'ready' || d.filed) continue;
    const p = join(dir, d.file);
    if (!existsSync(p)) continue;
    const draft = parseDraft(readFileSync(p, 'utf8'));
    if (draft.state !== 'ready' || repoKey(draft.repo || '') !== k || !draft.title || !draft.body) continue;
    out.push({ key: k, repo: d.repo, file: d.file, title: draft.title, body: draft.body, darkKeys: d.keys || [], entry: d });
  }
  return { out, index };
}

export async function fileApproved({ dir = '.', repo = null, confirm = null, reader = createReader(), token = process.env.UPSTREAM_TOKEN, fetchImpl = fetch, log = console.log } = {}) {
  const { out, index } = approvedDrafts(dir);
  const state = JSON.parse(readFileSync(join(dir, 'darks.json'), 'utf8'));
  const result = { approved: out.map((o) => o.repo), filed: [], skipped: [], dryRun: confirm !== CONFIRM_WORD };
  const targets = repo ? out.filter((o) => o.key === repoKey(repo)) : out;
  if (repo && !targets.length) { result.skipped.push({ repo, why: 'not checked [x] in QUEUE.md, or its draft is not ready' }); return result; }
  if (!result.dryRun && !repo) throw new Error('refusing to file without --repo owner/repo (one draft per run)');
  if (!result.dryRun && !token) throw new Error('UPSTREAM_TOKEN is not set; nothing filed');
  for (const t of targets) {
    // fresh read-only duplicate check right before filing
    const dups = [];
    for (const key of t.darkKeys) {
      const light = state.darks?.[key];
      if (!light || light.light !== 'dark') continue;
      dups.push(...await findDuplicates(reader, t.repo, light));
    }
    if (dups.length) { result.skipped.push({ repo: t.repo, why: `upstream now has open ${dups.map((d) => d.url).join(', ')}` }); continue; }
    if (result.dryRun) { log(`would file in ${t.repo}: ${t.title}`); result.skipped.push({ repo: t.repo, why: 'dry run' }); continue; }
    if (repoKey(t.repo) !== repoKey(repo)) throw new Error(`guard: ${t.repo} is not the repo named on the command line`);
    const res = await fetchImpl(`https://api.github.com/repos/${t.repo}/issues`, {
      method: 'POST',
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'dark-crawler-file-approved', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title: t.title, body: t.body }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(`filing in ${t.repo} failed: HTTP ${res.status} ${data.message || ''}`);
    log(`filed ${data.html_url}`);
    t.entry.state = 'filed'; t.entry.filed = data.html_url; t.entry.approved = true;
    const p = join(dir, t.file);
    writeFileSync(p, readFileSync(p, 'utf8').replace('<!-- draft-state: ready -->', '<!-- draft-state: filed -->').replace(/- \*\*Status:\*\* .*/, `- **Status:** filed upstream: ${data.html_url}`));
    result.filed.push({ repo: t.repo, url: data.html_url });
  }
  if (result.filed.length) {
    writeFileSync(join(dir, 'drafts/index.json'), JSON.stringify(index, null, 2) + '\n');
    const q = join(dir, 'QUEUE.md');
    writeFileSync(q, replaceQueueSection(readFileSync(q, 'utf8'), queueSection(index)));
  }
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const opt = { dir: '.', repo: null, confirm: null };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--dir') opt.dir = args[++i];
    else if (a === '--repo') opt.repo = args[++i] || null;
    else if (a === '--confirm') opt.confirm = args[++i];
    else { console.error(`unknown argument ${a}`); process.exit(2); }
  }
  const r = await fileApproved({ dir: resolve(opt.dir), repo: opt.repo, confirm: opt.confirm });
  console.log(`file-approved: ${r.dryRun ? 'DRY RUN, nothing sent. ' : ''}checked [x]: ${r.approved.length}; filed: ${r.filed.length}`);
  for (const s of r.skipped) console.log(`  not filed: ${s.repo} — ${s.why}`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) main().catch((e) => { console.error(`file-approved: ${e.message}`); process.exit(1); });
