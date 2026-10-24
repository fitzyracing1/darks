<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 377522 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40120003461 — dark (conclusion: `cancelled`), 2026-10-24 18:17 UTC
- Dark since: 2026-10-22 17:37 UTC (first run of the current streak)
- Job / step: `Source tests` → `Run source tests without waiting for build`
- Likely cause: The run was canceled by @gensokyo-dev.

<details><summary>End of the job log</summary>

```
 ✓  domain  src/domain/process/processCapture.validation.test.ts (30 tests) 33ms
 ✓  domain  src/domain/analysisView/environmentStateWriteExplain.test.ts (132 tests) 306ms
 ✓  domain  src/domain/apple/appleApplication.test.ts (39 tests) 116ms
 ✓  domain  src/domain/javascript/javascriptApplicationGraph.test.ts (25 tests) 188ms
 ✓  domain  src/domain/javascript/electronModuleInterop.test.ts (189 tests) 1289ms
 ✓  domain  src/domain/javascript/javascriptSemanticGraphQuery.test.ts (24 tests) 87ms
 ✓  domain  src/domain/javascript/javascriptSemanticAnalysis.structure.test.ts (102 tests) 135ms
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
