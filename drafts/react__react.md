<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 253003 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "(DevTools) Regression Tests" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **(DevTools) Regression Tests** workflow (`.github/workflows/devtools_regression_tests.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/react/react/actions/runs/45914447976 — dark (conclusion: `failure`), 2026-11-27 00:03 UTC
- Dark since: 2026-11-20 00:03 UTC (first run of the current streak)
- Job / step: `Run DevTools tests for versions (16.0)` → `Run ./scripts/ci/download_devtools_regression_build.js 16.0 --replaceBuild`
- Likely cause: Error: Cannot find module 'child-process-promise'

<details><summary>End of the job log</summary>

```
    at Module._compile (node:internal/modules/cjs/loader:1929:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/runner/work/react/react/scripts/ci/download_devtools_regression_build.js'
  ]
}
Node.js v24.22.1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
