<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25107 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Benchmark", "Chat Evals", "Continuous Delivery — Canary", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39193276257 — dark (conclusion: `failure`), 2026-10-19 03:08 UTC
- Dark since: 2026-10-13 03:13 UTC (first run of the current streak)
- Job / step: `benchmark (shared, 1, 28, 0.5, 1G, 1, 768, false, 28)` → `Detect regression against trailing 14 runs (scheduled runs only)`
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

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39210183601 — dark (conclusion: `failure`), 2026-10-19 06:29 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  88 passed | 1 skipped (89)
   Start at  06:33:40
   Duration  547.68s (transform 1.65s, setup 63ms, collect 16.95s, tests 541.61s, environment 3ms, prepare 1.17s)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Continuous Delivery — Canary (`.github/workflows/continuous-delivery-canary.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39227207183 — dark (conclusion: `failure`), 2026-10-19 09:03 UTC
- Dark since: 2026-10-19 09:03 UTC (first run of the current streak)
- Job / step: `check-migrations` → `Fail on breaking migrations`
- Likely cause: Breaking migrations detected: DropChatRolloutUserTable1870000000000

<details><summary>End of the job log</summary>

```
 Tasks:    7 successful, 7 total
Cached:    0 cached, 7 total
  Time:    21.991s
Found 1 migration(s) to roll back:
  BREAKING: DropChatRolloutUserTable1870000000000
1 breaking migration(s) detected.
Breaking migrations detected: DropChatRolloutUserTable1870000000000
##[error]Process completed with exit code 1.
```

</details>

### Release Pieces (`.github/workflows/release-pieces.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/39250191330 — dark (conclusion: `failure`), 2026-10-19 12:11 UTC
- Dark since: 2026-10-19 12:11 UTC (first run of the current streak)
- Job / step: `Release-Pieces` → `publish pieces packages`
- Likely cause: [publishPieces] 1/3 piece(s) failed to publish:

<details><summary>End of the job log</summary>

```
  output: [ null, null, null ],
  pid: 2672,
  stdout: null,
  stderr: null
}
[publishPieces] 1/3 piece(s) failed to publish:
  packages/pieces/community/woocommerce
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
