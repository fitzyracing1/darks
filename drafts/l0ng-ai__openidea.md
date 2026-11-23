<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 9850 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/45071355228 — dark (conclusion: `cancelled`), 2026-11-22 21:18 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `E2E (2/2)` → `Run pnpm e2e --shard=2/2`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
  ✓  411 [chromium] › e2e/toolwindows.spec.ts:4:3 › maximized right Terminal fills the workbench and restores the layout (9.8s)
  ✓  412 [chromium] › e2e/toolwindows.spec.ts:4:3 › maximized bottom Terminal fills the workbench and restores the layout (9.8s)
  ✓  413 [chromium] › e2e/toolwindows.spec.ts:62:1 › ⌘1 focuses, hides and re-shows the Project tool window (7.0s)
  ✓  414 [chromium] › e2e/toolwindows.spec.ts:72:1 › ⌘4 toggles Run; Shift+Escape hides the active tool window (6.8s)
  ✓  415 [chromium] › e2e/toolwindows.spec.ts:89:1 › ⌥F12 opens the Terminal tool window and toggles it closed (7.0s)
  ✓  416 [chromium] › e2e/toolwindows.spec.ts:98:1 › the first ⌥F12 focuses the terminal input once the lazily loaded view mounts (7.9s)
context canceled
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
