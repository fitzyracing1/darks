<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25095 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Benchmark", "Chat Evals")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39092514993 — dark (conclusion: `failure`), 2026-10-18 03:07 UTC
- Dark since: 2026-10-13 03:13 UTC (first run of the current streak)
- Job / step: `benchmark (dedicated, 1, 28, 0.5, 1G, 1, 768, true, 28)` → `Detect regression against trailing 14 runs (scheduled runs only)`
- Likely cause: Error: ClickHouse history query failed (403): Code: 516. ***::Exception: ***: Authentication failed: password is incorrect, or there is no user with such name. (AUTHENTICATION_FAILED)

<details><summary>End of the job log</summary>

```
        throw new Error(`ClickHouse history query failed (${res.status}): ${body}`)
              ^
Error: ClickHouse history query failed (403): Code: 516. ***::Exception: ***: Authentication failed: password is incorrect, or there is no user with such name. (AUTHENTICATION_FAILED)
    at fetchHistory (file:///home/runner/work/activepieces/activepieces/benchmark/detect***regression.mjs:138:15)
    at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
    at async file:///home/runner/work/activepieces/activepieces/benchmark/detect***regression.mjs:51:18
Node.js v22.23.2
##[error]Process completed with exit code 1.
```

</details>

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39106904819 — dark (conclusion: `failure`), 2026-10-18 07:14 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=all)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  88 passed | 1 skipped (89)
   Start at  07:18:01
   Duration  545.78s (transform 1.19s, setup 53ms, collect 12.64s, tests 541.15s, environment 2ms, prepare 851ms)
##[error]Error: Hook timed out in 540000ms.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
