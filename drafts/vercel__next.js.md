<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143187 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "build-and-test" workflow failing on canary since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **build-and-test** workflow (`.github/workflows/build_and_test.yml`) on `canary` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/40786385843 — dark (conclusion: `failure`), 2026-10-28 23:18 UTC
- Dark since: 2026-10-28 23:18 UTC (first run of the current streak)
- Job / step: `test rspack production (1/7, 18.3.1) / build` → `Run export NEXT_EXTERNAL_TESTS_FILTERS="$(pwd)/test/rspack-build-tests-manifest.json"`
- Likely cause: Some tests failed

<details><summary>End of the job log</summary>

```
test/production/standalone-mode/required-server-files/required-server-files-app.test.ts finished on retry 0/2 in 27.281s
test/production/typescript-ignore-errors/typescript-ignore-errors.test.ts finished on retry 0/2 in 22.501s
test/production/static-404/static-404.test.ts finished on retry 0/2 in 31.137s
test/production/standalone-mode/required-server-files/required-server-files-node-middleware.test.ts finished on retry 0/2 in 55.443s
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
