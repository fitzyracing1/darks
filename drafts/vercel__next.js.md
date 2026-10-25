<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143220 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on canary ("build-and-test", "Update Font Data")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `canary` have been dark recently. Details below, in case they're useful:

### build-and-test (`.github/workflows/build_and_test.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40142377970 — dark (conclusion: `failure`), 2026-10-24 23:21 UTC
- Dark since: 2026-10-24 16:15 UTC (first run of the current streak)
- Job / step: `test rspack dev (3/5, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-dev-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
end of test/development/acceptance/error-recovery.test.ts output
--test output start-- {"numFailedTestSuites":1,"numFailedTests":2,"numPassedTestSuites":0,"numPassedTests":3,"numPendingTestSuites":0,"numPendingTests":1,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuite…
Test result cache: skipped 315 cached, re-ran 1
Some tests failed
Successfully updated test timings in KV store
exiting with code 1
##[error]Process completed with exit code 1.
```

</details>

### Update Font Data (`.github/workflows/update_fonts_data.yml`)

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40146331855 — dark (conclusion: `failure`), 2026-10-25 00:20 UTC
- Dark since: 2026-10-25 00:20 UTC (first run of the current streak)
- Job / step: `create-pull-request` → `Create Pull Request`
- Likely cause: 'husky - pre-commit script failed (code 1)\n'

<details><summary>End of the job log</summary>

```
    '\n' +
    '  ⚠ lint-staged prevented an empty git commit.\n' +
    '  Use the --allow-empty option to continue, or check your task configuration\n' +
    '\n' +
    '[ELIFECYCLE] Command failed with exit code 1.\n' +
    'husky - pre-commit script failed (code 1)\n'
}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
