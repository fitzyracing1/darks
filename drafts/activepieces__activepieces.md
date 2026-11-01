<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25317 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Chat Evals", "Benchmark")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/41283676158 — dark (conclusion: `failure`), 2026-11-01 07:09 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=all)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  89 passed | 1 skipped (90)
   Start at  07:13:52
   Duration  545.94s (transform 1.30s, setup 54ms, collect 13.19s, tests 541.19s, environment 2ms, prepare 848ms)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/41267786018 — dark (conclusion: `failure`), 2026-11-01 03:05 UTC
- Dark since: 2026-10-30 03:06 UTC (first run of the current streak)
- Job / step: `benchmark (shared, 1, 28, 0.5, 1G, 1, 768, false, 28)` → `Detect regression against trailing 14 runs (scheduled runs only)`
- Likely cause: Box signals API responded 401: {"error":"Unknown token. Send it as \"Authorization: ***"."}

<details><summary>End of the job log</summary>

```
      "pct": -19.80021405636817,
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
