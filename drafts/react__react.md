<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 251387 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("(DevTools) Regression Tests", "(Compiler) TypeScript")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### (DevTools) Regression Tests (`.github/workflows/devtools_regression_tests.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/39179189792 — dark (conclusion: `failure`), 2026-10-19 00:05 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Run DevTools tests for versions (18.0)` → `Run node ./scripts/jest/jest-cli.js --build --project devtools --release-channel=experimental --reactVersion 18.0 --ci`
- Likely cause: Snapshots:   27 failed, 260 passed, 287 total

<details><summary>End of the job log</summary>

```
Snapshot Summary
 › 27 snapshots failed from 2 test suites. Inspect your code changes or re-run jest with `-u` to update them.
Test Suites: 2 failed, 21 skipped, 19 passed, 21 of 42 total
Tests:       4 failed, 437 skipped, 180 passed, 621 total
Snapshots:   27 failed, 260 passed, 287 total
Time:        23.693 s
Ran all test suites.
##[error]Process completed with exit code 1.
```

</details>

### (Compiler) TypeScript (`.github/workflows/compiler_typescript.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/39290732148 — dark (conclusion: `failure`), 2026-10-19 17:02 UTC
- Dark since: 2026-10-19 17:02 UTC (first run of the current streak)
- Job / step: `Test react-forgive` → `Run xvfb-run -a yarn workspace react-forgive test`
- Likely cause: error Command failed.

<details><summary>End of the job log</summary>

```
error Command failed.
Exit code: 1
Command: /opt/hostedtoolcache/node/20.19.0/x64/bin/node
Arguments: /usr/local/lib/node_modules/yarn/lib/cli.js test
Directory: /home/runner/work/react/react/compiler/packages/react-forgive
Output:
info Visit https://yarnpkg.com/en/docs/cli/workspace for documentation about this command.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
