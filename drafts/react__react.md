<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 252474 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("(DevTools) Regression Tests", "(Runtime) Build and Test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### (DevTools) Regression Tests (`.github/workflows/devtools_regression_tests.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/42928288117 — dark (conclusion: `failure`), 2026-11-11 00:03 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Run DevTools tests for versions (17.0)` → `Run node ./scripts/jest/jest-cli.js --build --project devtools --release-channel=experimental --reactVersion 17.0 --ci`
- Likely cause: Snapshots:   5 failed, 92 passed, 97 total

<details><summary>End of the job log</summary>

```
Snapshot Summary
 › 5 snapshots failed from 1 test suite. Inspect your code changes or re-run jest with `-u` to update them.
Test Suites: 1 failed, 27 skipped, 14 passed, 15 of 42 total
Tests:       3 failed, 524 skipped, 100 passed, 627 total
Snapshots:   5 failed, 92 passed, 97 total
Time:        10.218 s
Ran all test suites.
##[error]Process completed with exit code 1.
```

</details>

### (Runtime) Build and Test (`.github/workflows/runtime_build_and_test.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/43068956506 — dark (conclusion: `failure`), 2026-11-11 17:31 UTC
- Dark since: 2026-11-11 17:31 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
