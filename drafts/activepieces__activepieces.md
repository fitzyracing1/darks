<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25684 · **Generated:** 2026-11-23T12:44:06.505Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Chat Evals", "Benchmark")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/45123445252 — dark (conclusion: `failure`), 2026-11-23 06:20 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: AssertionError: see the eval report above for the failing checks: expected [ …(2) ] to deeply equal [] (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:58)

<details><summary>End of the job log</summary>

```
     59|     })
     60| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 89 passed (90)
   Start at  06:25:37
   Duration  439.07s (tests 96%, import 3%, transform 1%)
##[error]AssertionError: see the eval report above for the failing checks: expected [ …(2) ] to deeply equal []
```

</details>

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/45103923754 — dark (conclusion: `failure`), 2026-11-23 03:05 UTC
- Dark since: 2026-11-23 03:05 UTC (first run of the current streak)
- Job / step: `benchmark (dedicated, 1, 28, 0.5, 1G, 1, 768, true, 28)` → `Setup flow, platform API key, and wait for app`
- Likely cause: ERROR: POST /api-keys failed (402): {"code":"FEATURE_DISABLED","params":{"message":"Feature is disabled"}}

<details><summary>End of the job log</summary>

```
Signed up. Project: qtQYSVG2ir18YMS***Rbbk
Resolving piece versions from registry (polling /pieces up to 600s)...
Resolved piece versions: webhook=0.1.43 math-helper=0.2.0
Waiting for @activepieces/piece-webhook@0.1.43 to be available...
Waiting for @activepieces/piece-math-helper@0.2.0 to be available...
Creating platform API key for benchmark CLI...
ERROR: POST /api-keys failed (402): {"code":"FEATURE_DISABLED","params":{"message":"Feature is disabled"}}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
