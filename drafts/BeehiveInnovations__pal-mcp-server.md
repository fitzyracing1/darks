<!-- dark-draft: BeehiveInnovations/pal-mcp-server -->
<!-- draft-state: ready -->
# Upstream issue draft: BeehiveInnovations/pal-mcp-server

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/BeehiveInnovations/pal-mcp-server/issues/new
- **Stars:** 11856 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Semantic Release" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Semantic Release** workflow (`.github/workflows/semantic-release.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/BeehiveInnovations/pal-mcp-server/actions/runs/45125518174 — dark (conclusion: `failure`), 2026-11-23 06:38 UTC
- Dark since: 2026-11-23 06:38 UTC (first run of the current streak)
- Job / step: `release` → `Verify tests pass`
- Likely cause: ====================== 14 deselected, 12 errors in 3.10s =======================

<details><summary>End of the job log</summary>

```
ERROR tests/test_mcp_error_handling.py - AttributeError: 'Server' object has no attribute 'list_tools'
ERROR tests/test_model_metadata_continuation.py - AttributeError: 'Server' object has no attribute 'list_tools'
ERROR tests/test_o3_pro_output_text_fix.py
ERROR tests/test_parse_model_option.py - AttributeError: 'Server' object has no attribute 'list_tools'
ERROR tests/test_server.py - AttributeError: 'Server' object has no attribute 'list_tools'
!!!!!!!!!!!!!!!!!!! Interrupted: 12 errors during collection !!!!!!!!!!!!!!!!!!!
====================== 14 deselected, 12 errors in 3.10s =======================
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pal-mcp-server!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
