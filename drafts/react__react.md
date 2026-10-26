<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 251864 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "(DevTools) Regression Tests" workflow failing on main since 2026-10-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **(DevTools) Regression Tests** workflow (`.github/workflows/devtools_regression_tests.yml`) on `main` has been failing since 2026-10-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/react/react/actions/runs/40247651575 — dark (conclusion: `failure`), 2026-10-26 00:05 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Run DevTools tests for versions (17.0)` → `Run node ./scripts/jest/jest-cli.js --build --project devtools --release-channel=experimental --reactVersion 17.0 --ci`
- Likely cause: Snapshots:   5 failed, 92 passed, 97 total

<details><summary>End of the job log</summary>

```
Snapshot Summary
 › 5 snapshots failed from 1 test suite. Inspect your code changes or re-run jest with `-u` to update them.
Test Suites: 1 failed, 27 skipped, 14 passed, 15 of 42 total
Tests:       3 failed, 518 skipped, 100 passed, 621 total
Snapshots:   5 failed, 92 passed, 97 total
Time:        15.647 s
Ran all test suites.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
