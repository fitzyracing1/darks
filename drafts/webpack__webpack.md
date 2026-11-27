<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66018 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow getting cancelled on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/46037887817 — dark (conclusion: `cancelled`), 2026-11-27 16:57 UTC
- Dark since: 2026-11-25 21:14 UTC (first run of the current streak)
- Job / step: `runtimes (deno)` → `Run yarn test:deno --maxWorkers=100% --ci`
- Likely cause: The job has exceeded the maximum execution time of 45m0s

<details><summary>End of the job log</summary>

```
      at TestRunner._resolveModule (test/harness/runner/index.js:512:17)
      at TestRunner.require (test/harness/runner/index.js:563:27)
      at TestRunner.runBundles (test/harness/runner/index.js:302:27)
      at Object.<anonymous> (test/templates/TestCases.js:544:39)
      at drainTicks (ext:core/01_core.js:427:7)
      at Object.processTimers (ext:core/02_timers.js:246:9)
      at __processTimers (ext:core/01_core.js:448:21)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
