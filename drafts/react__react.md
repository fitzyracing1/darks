<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 251710 · **Generated:** 2026-10-23T12:52:35.417Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "(DevTools) Regression Tests" workflow failing on main since 2026-10-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **(DevTools) Regression Tests** workflow (`.github/workflows/devtools_regression_tests.yml`) on `main` has been failing since 2026-10-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/react/react/actions/runs/39875957865 — dark (conclusion: `failure`), 2026-10-23 00:05 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Run DevTools tests for versions (18.2)` → `Run node ./scripts/jest/jest-cli.js --build --project devtools --release-channel=experimental --reactVersion 18.2 --ci`
- Likely cause: Snapshots:   27 failed, 260 passed, 287 total

<details><summary>End of the job log</summary>

```
Snapshot Summary
 › 27 snapshots failed from 2 test suites. Inspect your code changes or re-run jest with `-u` to update them.
Test Suites: 2 failed, 20 skipped, 20 passed, 22 of 42 total
Tests:       4 failed, 435 skipped, 182 passed, 621 total
Snapshots:   27 failed, 260 passed, 287 total
Time:        24.731 s
Ran all test suites.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
