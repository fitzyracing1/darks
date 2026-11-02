<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25342 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Chat Evals", "Benchmark")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/41399154691 — dark (conclusion: `failure`), 2026-11-02 06:19 UTC
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
   Start at  06:23:41
   Duration  547.62s (transform 1.57s, setup 60ms, collect 17.24s, tests 541.32s, environment 3ms, prepare 1.15s)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/41381183806 — dark (conclusion: `failure`), 2026-11-02 03:05 UTC
- Dark since: 2026-10-30 03:06 UTC (first run of the current streak)
- Job / step: `benchmark (dedicated, 1, 28, 0.5, 1G, 1, 768, true, 28)` → `Detect regression against trailing 14 runs (scheduled runs only)`
- Likely cause: Box signals API responded 401: {"error":"Unknown token. Send it as \"Authorization: ***"."}

<details><summary>End of the job log</summary>

```
      "pct": 1.5264465743698865,
      "breach": false
    }
  ],
  "breachCount": 1
}
Box signals API responded 401: {"error":"Unknown token. Send it as \"Authorization: ***"."}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
