<!-- dark-draft: BrowserMCP/mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: BrowserMCP/mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/BrowserMCP/mcp/issues/new
- **Stars:** 7229 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/BrowserMCP/mcp/actions/runs/40482372442 — dark (conclusion: `failure`), 2026-10-27 09:38 UTC
- Dark since: 2026-10-27 09:05 UTC (first run of the current streak)
- Job / step: `checks` → `Smoke test`
- Likely cause: × "pnpm recursive run" failed in /home/runner/work/mcp/mcp/apps/extension

<details><summary>End of the job log</summary>

```
[smoke] ✓ Stop and Resume in the popup
[smoke] ✓ a different daemon key asks again
[smoke] 14/18 passed; screenshots in /home/runner/work/mcp/mcp/apps/extension/.output/smoke
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/work/mcp/mcp/apps/extension
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
