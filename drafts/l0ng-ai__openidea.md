<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9050 · **Generated:** 2026-11-16T00:59:22.034Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43780958762 — dark (conclusion: `cancelled`), 2026-11-16 00:32 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `E2E` → `Run pnpm e2e`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  ✓  165 [chromium] › e2e/console-ui.spec.ts:5:5 › run console controls fit 520px and retain their native icon size (6.4s)
  ✓  166 [chromium] › e2e/console-ui.spec.ts:5:5 › debug console controls fit 220px and retain their native icon size (6.1s)
  ✓  167 [chromium] › e2e/console-ui.spec.ts:5:5 › debug console controls fit 280px and retain their native icon size (6.3s)
  ✓  168 [chromium] › e2e/console-ui.spec.ts:5:5 › debug console controls fit 520px and retain their native icon size (6.4s)
  ✓  169 [chromium] › e2e/console-ui.spec.ts:5:5 › services-run console controls fit 220px and retain their native icon size (6.5s)
  ✓  170 [chromium] › e2e/console-ui.spec.ts:5:5 › services-run console controls fit 280px and retain their native icon size (6.5s)
context canceled
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
