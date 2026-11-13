<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 252571 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("(DevTools) Regression Tests", "(Compiler) Playground")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### (DevTools) Regression Tests (`.github/workflows/devtools_regression_tests.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/43333933496 — dark (conclusion: `failure`), 2026-11-13 00:03 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Run DevTools e2e tests for versions (16.5)` → `Run ./scripts/ci/download_devtools_regression_build.js 16.5`
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

### (Compiler) Playground (`.github/workflows/compiler_playground.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/43251496083 — dark (conclusion: `failure`), 2026-11-12 15:46 UTC
- Dark since: 2026-11-12 15:46 UTC (first run of the current streak)
- Job / step: `Test playground` → `Run npx playwright install --with-deps chromium`
- Likely cause: Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64

<details><summary>End of the job log</summary>

```
(node:2795) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Cache not found for input keys: playwright-browsers-v6-X64-Linux-1.56.1
BEWARE: your OS is not officially supported by Playwright; installing dependencies for ubuntu26.04-x64 as a fallback.
Cannot install dependencies for ubuntu26.04-x64 with Playwright 1.56.1!
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
