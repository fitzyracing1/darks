<!-- dark-draft: CursorTouch/Windows-MCP -->
<!-- draft-state: ready -->
# Upstream issue draft: CursorTouch/Windows-MCP

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/CursorTouch/Windows-MCP/issues/new
- **Stars:** 10332 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/CursorTouch/Windows-MCP/actions/runs/40189013947 — dark (conclusion: `failure`), 2026-10-25 11:28 UTC
- Dark since: 2026-10-25 11:28 UTC (first run of the current streak)
- Job / step: `Unit tests (Python 3.14)` → `Run unit tests`
- Likely cause: ============ 1 failed, 1344 passed, 5 warnings in 60.44s (0:01:00) ============

<details><summary>End of the job log</summary>

```
  +     'Command execution timed out',
  -     0,
  ?     ^
  +     1,
  ?     ^
    )
============ 1 failed, 1344 passed, 5 warnings in 60.44s (0:01:00) ============
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Windows-MCP!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
