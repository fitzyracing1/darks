<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25615 · **Generated:** 2026-11-19T06:47:13.117Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Chat Evals", "Continuous Delivery — Staging")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/44470730112 — dark (conclusion: `failure`), 2026-11-19 06:14 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: AssertionError: see the eval report above for the failing checks: expected [ 'guard-duplicate-flow-not-agent' ] to deeply equal [] (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:58)

<details><summary>End of the job log</summary>

```
     59|     })
     60| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 89 passed (90)
   Start at  06:19:30
   Duration  460.18s (tests 96%, import 3%, transform 1%)
##[error]AssertionError: see the eval report above for the failing checks: expected [ 'guard-duplicate-flow-not-agent' ] to deeply equal []
```

</details>

### Continuous Delivery — Staging (`.github/workflows/continuous-delivery-stg.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/44331715007 — dark (conclusion: `cancelled`), 2026-11-18 15:06 UTC
- Dark since: 2026-11-18 15:06 UTC (first run of the current streak)
- Job / step: `build-image` → `Run depot/build-push-action@v1`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
#42 pushing manifest for ghcr.io/activepieces/activepieces-cloud
#42 pushing manifest for ghcr.io/activepieces/activepieces-cloud 4.4s done
#42 DONE 11.8s
#17 [linux/arm64 base 2/6] RUN apt-get update &&     apt-get install -y --no-install-recommends         openssh-client         python3         g++         build-essential         git         poppler-utils         popple…
#17 CANCELED
Build Summary: https://depot.dev/orgs/DJF9h3Y1VV/projects/du7O4b0e8P/builds/6frtxgx646
failed to solve: Canceled: context canceled
##[error]failed with: failed to solve: Canceled: context canceled
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
