<!-- dark-draft: CursorTouch/Windows-MCP -->
<!-- draft-state: ready -->
# Upstream issue draft: CursorTouch/Windows-MCP

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/CursorTouch/Windows-MCP/issues/new
- **Stars:** 11833 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/CursorTouch/Windows-MCP/actions/runs/44107656440 — dark (conclusion: `failure`), 2026-11-17 14:51 UTC
- Dark since: 2026-11-17 14:51 UTC (first run of the current streak)
- Job / step: `Unit tests (Python 3.14)` → `Run unit tests`
- Likely cause: ============================= 49 errors in 12.93s =============================

<details><summary>End of the job log</summary>

```
ERROR tests/test_uia_timeouts.py
ERROR tests/test_uia_walker_fallback.py
ERROR tests/test_uia_worker_cancellation.py
ERROR tests/test_virtual_desktop_fallback.py
ERROR tests/test_window_z_order.py
!!!!!!!!!!!!!!!!!! Interrupted: 49 errors during collection !!!!!!!!!!!!!!!!!!!
============================= 49 errors in 12.93s =============================
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Windows-MCP!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
