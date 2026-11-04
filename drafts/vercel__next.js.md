<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143247 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "build-and-test" workflow getting cancelled on canary since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **build-and-test** workflow (`.github/workflows/build_and_test.yml`) on `canary` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/41738136235 — dark (conclusion: `cancelled`), 2026-11-03 23:18 UTC
- Dark since: 2026-11-03 23:18 UTC (first run of the current streak)
- Job / step: `test turbopack production (7/7, 18.3.1) / build` → `Run export IS_TURBOPACK_TEST=1`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
Time:        1746.424 s
Ran all test suites matching /test\/e2e\/app-dir\/actions\/app-action-node-middleware.test.ts/i.
Test results written to: test/e2e/app-dir/actions/app-action-node-middleware.test.ts.results.json
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
end of test/e2e/app-dir/actions/app-action-node-middleware.test.ts output
Cleaning test files at /home/runner/work/next.js/next.js/test/e2e/app-dir/actions
Starting test/e2e/app-dir/actions/app-action-node-middleware.test.ts retry 1/2
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
