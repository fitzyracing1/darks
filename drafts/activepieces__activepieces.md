<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25260 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Chat Evals", "Continuous Delivery — Staging")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/40642849150 — dark (conclusion: `failure`), 2026-10-28 06:16 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: AssertionError: see the eval report above for the failing checks: expected [ 'memory-saves-when-asked' ] to deeply equal [] (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:58)

<details><summary>End of the job log</summary>

```
     59|     })
     60| })
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  1 failed | 89 passed (90)
   Start at  06:19:57
   Duration  269.19s (transform 1.34s, setup 103ms, collect 12.21s, tests 264.73s, environment 2ms, prepare 787ms)
##[error]AssertionError: see the eval report above for the failing checks: expected [ 'memory-saves-when-asked' ] to deeply equal []
```

</details>

### Continuous Delivery — Staging (`.github/workflows/continuous-delivery-stg.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/40684485584 — dark (conclusion: `failure`), 2026-10-28 12:01 UTC
- Dark since: 2026-10-28 12:01 UTC (first run of the current streak)
- Job / step: `build-image` → `Run depot/build-push-action@v1`
- Likely cause: failed with: failed to solve: process "/bin/sh -c rm -rf packages/pieces/core packages/pieces/custom       packages/web packages/cli packages/tests-e2e packages/ee &&     find packages/pieces/community -mindepth 1 -maxdepth 1 -type d       

<details><summary>End of the job log</summary>

```
0.885 Resolving dependencies
421.2 error: Fail extracting tarball for "@esbuild/linux-x64"
421.6 Resolved, downloaded and extracted [6348]
421.6 error: Fail extracting tarball from @esbuild/linux-x64
------
Build Summary: https://depot.dev/orgs/DJF9h3Y1VV/projects/du7O4b0e8P/builds/mg8tb1djbp
failed to solve: process "/bin/sh -c rm -rf packages/pieces/core packages/pieces/custom       packages/web packages/cli packages/tests-e2e packages/ee &&     find packages/pieces/community -mindepth 1 -maxdepth 1 -type …
##[error]failed with: failed to solve: process "/bin/sh -c rm -rf packages/pieces/core packages/pieces/custom       packages/web packages/cli packages/tests-e2e packages/ee &&     find packages/pieces/community -mindept…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
