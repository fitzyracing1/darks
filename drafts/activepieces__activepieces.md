<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25698 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Chat Evals", "Benchmark", "Delete old workflow runs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/45338967069 — dark (conclusion: `failure`), 2026-11-24 06:14 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  89 passed | 1 skipped (90)
   Start at  06:19:26
   Duration  547.56s (tests 97%, import 2%, transform 1%)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/45317032840 — dark (conclusion: `failure`), 2026-11-24 03:05 UTC
- Dark since: 2026-11-23 03:05 UTC (first run of the current streak)
- Job / step: `benchmark (shared, 1, 28, 0.5, 1G, 1, 768, false, 28)` → `Setup flow, platform API key, and wait for app`
- Likely cause: ERROR: POST /api-keys failed (402): {"code":"FEATURE_DISABLED","params":{"message":"Feature is disabled"}}

<details><summary>End of the job log</summary>

```
Signed up. Project: ZIHzvF289tgpTPHNOyqJ3
Resolving piece versions from registry (polling /pieces up to 600s)...
Resolved piece versions: webhook=0.1.43 math-helper=0.2.0
Waiting for @activepieces/piece-webhook@0.1.43 to be available...
Waiting for @activepieces/piece-math-helper@0.2.0 to be available...
Creating platform API key for benchmark CLI...
ERROR: POST /api-keys failed (402): {"code":"FEATURE_DISABLED","params":{"message":"Feature is disabled"}}
##[error]Process completed with exit code 1.
```

</details>

### Delete old workflow runs (`.github/workflows/delete-workflow-runs.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/45296406645 — dark (conclusion: `failure`), 2026-11-24 00:20 UTC
- Dark since: 2026-11-24 00:20 UTC (first run of the current streak)
- Job / step: `delete-runs` → `Run Mattraks/delete-workflow-runs@v2`
- Likely cause: ❌ Action failed: Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)

<details><summary>End of the job log</summary>

```
💬 No runs to delete
💬 No runs to delete
💬 No runs to delete
GET /repositories/573661753/actions/workflows/190223308/runs?per_page=100&page=60 - 500 with id UNKNOWN in 70263ms
GET /repositories/573661753/actions/workflows/190223308/runs?per_page=100&page=60 - 500 with id UNKNOWN in 10498ms
GET /repositories/573661753/actions/workflows/190223308/runs?per_page=100&page=60 - 500 with id UNKNOWN in 10493ms
GET /repositories/573661753/actions/workflows/190223308/runs?per_page=100&page=60 - 500 with id UNKNOWN in 10493ms
##[error]❌ Action failed: Connect Timeout Error (attempted address: api.github.com:443, timeout: 10000ms)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
