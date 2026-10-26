# ○ darks

**Dark CI lights in popular GitHub repos — found, explained, and tracked until they're lit again.**

👉 **Live board: [https://light-report-production.up.railway.app/darks](https://light-report-production.up.railway.app/darks)** · JSON: [https://light-report-production.up.railway.app/darks.json](https://light-report-production.up.railway.app/darks.json) · Issues: [one per dark](https://github.com/fitzyracing1/darks/issues?q=label%3Adark)

## What this is

A crawler checks popular repos every 6 hours — the most-starred, trending, the repos behind top npm packages, and MCP server repos — and records every workflow whose light is **dark**. Each dark gets a one-line cause from the failed job, a class, a row on the board, and one issue in this repo. When the repo goes **lit** again, the entry turns **relit** and its issue closes by itself.

## The rule (strict)

Per workflow that **still exists on the default branch**:

1. Take the **latest completed push or schedule run on the default branch** in the **last 30 days**.
2. `success` → **lit** (bit 0). Anything else — failure, cancelled, timed out — → **dark** (bit 1).
3. A newer lit run of the same workflow wins.
4. Ignored: `pages-build-deployment`, Dependabot, dynamic CodeQL.

Same active-low lit/dark rule as [fitzyracing1/lit-dark](https://github.com/fitzyracing1/lit-dark/blob/main/SPEC.md) and [light-report](https://light-report-production.up.railway.app).

## What you see on the board

| column | meaning |
|---|---|
| repo, stars | the project |
| workflow | name and file |
| dark since | first run of the current dark streak (ET) |
| cause | one line from the failed job's annotations, or the step that exited nonzero |
| class | **code bug** · **flaky** · **infra** (runner, disk, cancelled, timeout) · **external** (registry, network, credentials, deprecations) — a keyword guess, not a verdict |
| status | **new** · **fix-trying** · **fix-lit** (a fix is lit in a fork) · **PR-queued** (waiting for Joshua's approval) · **relit** (lit again upstream) |

## The hard rule

**The crawler never opens issues, PRs or comments on anyone else's repo.** It runs with this repo's own `GITHUB_TOKEN`, which can only write here, and every write in the code goes through a guard that refuses any other repo. Proposed upstream actions only go into [`QUEUE.md`](QUEUE.md) / `queued.json` for Joshua's approval; nothing is sent from here.

## Upstream issue drafts (try branch)

After each crawl, `scripts/draft-upstream.mjs` writes one **draft** upstream issue per repo with dark workflows to `drafts/<owner>__<repo>.md` (title, body with the dark run, dark-since, job/step, a likely cause from the end of the job log, and a lit fix branch on a fitzyracing1 fork if one exists) and lists it in [`QUEUE.md`](QUEUE.md) under *Drafted upstream issues — awaiting Joshua's OK* as `- [ ] owner/repo — title — drafts/...`.

- **Nothing is sent.** The drafting script's GitHub client only has GET. It reads runs, jobs, job logs, and searches upstream issues/PRs.
- **No duplicates:** a read-only search finds open upstream issues/PRs that name the workflow (file name or specific workflow name) and talk about it failing, or link the dark run. Dark workflows that are already tracked upstream are left out; if all of them are, the draft is not queued.
- **Refresh:** drafts are rewritten each crawl; when a repo is lit again its draft moves to `drafts/resolved/` and its queue line is struck through (kept as history).
- **Backfill:** `node scripts/draft-upstream.mjs --backfill` also reads past crawls (every `darks.json` in git history, this repo's dark issues, `queued.json`).
- **Filing:** only by hand. Check a box (`[x]`), then run the **file-approved** workflow with the repo name and the confirm word `FILE` (anything else is a dry run). It files that one draft with the `UPSTREAM_TOKEN` secret, after one more duplicate check. It never runs on a schedule.
- Tests: `node --test test/*.test.mjs`.

## Files

| file | what |
|---|---|
| `darks.json` | full state, written by the crawler (the board reads it) |
| `status.json` | manual status overrides: `{"owner/repo#.github/workflows/ci.yml": "fix-trying"}` |
| `queued.json` / `QUEUE.md` | upstream actions waiting for approval |
| `.github/workflows/crawl.yml` | the schedule (every 6 hours, or run it by hand) |
| `drafts/`, `drafts/index.json` | upstream issue drafts and their state (ready / duplicate / filed / resolved) |
| `scripts/draft-upstream.mjs`, `lib/drafts.mjs` | draft generation (read-only) |
| `scripts/file-approved.mjs`, `.github/workflows/file-approved.yml` | manual filing of one checked draft |

Crawler code: [`bin/dark-crawl.mjs`](https://github.com/fitzyracing1/light-report/blob/main/bin/dark-crawl.mjs) and [`lib/darks.mjs`](https://github.com/fitzyracing1/light-report/blob/main/lib/darks.mjs) in light-report.

## Limits

- Up to 120 repos per crawl (open darks are re-checked first so relit is caught quickly); the rest rotate across crawls.
- GitHub API budget: `GITHUB_TOKEN` allows about 1,000 requests an hour; the crawler stops early when fewer than 60 are left. Search is paced to 30/minute.
- Causes come from check-run annotations, not full logs, so some say only which step exited nonzero.
- "Trending" is approximated with search (new repos with many stars); GitHub has no trending API.

MIT © 2026 Joshua Almeida

## Plans

This project is free, and its license stays as is. Support it through [GitHub Sponsors](https://github.com/sponsors/fitzyracing1):

- **Free**: use the code, community support.
- **Pro ($49/month)**: priority issues and support.
- **Team ($199/month)**: priority support for your team plus early access.
