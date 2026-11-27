<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66019 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow getting cancelled on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/45937319019 — dark (conclusion: `cancelled`), 2026-11-27 03:59 UTC
- Dark since: 2026-11-25 21:14 UTC (first run of the current streak)
- Job / step: `runtimes (deno)` → `Run yarn test:deno --maxWorkers=100% --ci`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
      at test/js/hot-cases-web/chunks/shared-last-chunk-siblings/bundle.js:53:64
    console.warn
      [HMR] unexpected require(./b.js) from disposed module ./importer.js
      at fn (test/js/hot-cases-web/esm-output/shared-last-chunk-siblings/main.mjs?esm-output-shared-last-chunk-siblings-0:367:22)
      at test/js/hot-cases-web/esm-output/shared-last-chunk-siblings/main.mjs?esm-output-shared-last-chunk-siblings-0:55:64
RUNTIME-FILE-START /home/runner/work/webpack/webpack/test/TestCasesHot.test.js
PASS test/TestCasesNormal.basictest.js (260.798 s, 163 MB heap size)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
