<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143608 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "build-and-test" workflow failing on canary since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **build-and-test** workflow (`.github/workflows/build_and_test.yml`) on `canary` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/45082419580 — dark (conclusion: `failure`), 2026-11-22 23:17 UTC
- Dark since: 2026-11-22 23:17 UTC (first run of the current streak)
- Job / step: `test rspack dev (5/5, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-dev-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
test/e2e/app-dir/native-route-go/native-route-go.test.ts failed due to Error: failed with code: 1
test/e2e/app-dir/native-route-go/native-route-go.test.ts failed to pass within 2 retries
--test output start-- {"numFailedTestSuites":1,"numFailedTests":2,"numPassedTestSuites":0,"numPassedTests":3,"numPendingTestSuites":0,"numPendingTests":25,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuit…
Test result cache: skipped 285 cached, re-ran 3
Some tests failed
Successfully updated test timings in KV store
exiting with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
