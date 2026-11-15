<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143524 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "build-and-test" workflow failing on canary since 2026-11-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **build-and-test** workflow (`.github/workflows/build_and_test.yml`) on `canary` has been failing since 2026-11-14. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/43652534027 — dark (conclusion: `failure`), 2026-11-14 23:18 UTC
- Dark since: 2026-11-14 23:18 UTC (first run of the current streak)
- Job / step: `test rspack dev (5/5, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-dev-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
end of test/e2e/app-dir/logging/fetch-logging.test.ts output
--test output start-- {"numFailedTestSuites":1,"numFailedTests":2,"numPassedTestSuites":0,"numPassedTests":47,"numPendingTestSuites":0,"numPendingTests":4,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuit…
test/e2e/app-dir/use-cache/use-cache.partial-prefetching.test.ts finished on retry 0/2 in 244.393s
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
