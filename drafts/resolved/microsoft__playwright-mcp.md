<!-- dark-draft: microsoft/playwright-mcp -->
<!-- draft-state: resolved -->
# Upstream issue draft: microsoft/playwright-mcp

- **Status:** resolved — lit again (2026-11-11); nothing to file
- **Would be filed at:** https://github.com/microsoft/playwright-mcp/issues/new
- **Stars:** 39495 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/playwright-mcp/actions/runs/42858710868 — dark (conclusion: `failure`), 2026-11-10 16:50 UTC
- Dark since: 2026-11-10 16:50 UTC (first run of the current streak)
- Job / step: `test (windows-latest)` → `Run playwright-mcp tests`
- Likely cause: 2 failed

<details><summary>End of the job log</summary>

```
        at ChildProcess.<anonymous> (D:\a\playwright-mcp\playwright-mcp\node_modules\@modelcontextprotocol\sdk\src\client\stdio.ts:152:31)
        at ChildProcess.cp.emit (D:\a\playwright-mcp\playwright-mcp\node_modules\cross-spawn\lib\enoent.js:34:29)
    Error Context: test-results\core-browser-navigate-chrome\error-context.md
  2 failed
    [chrome] › tests\click.spec.ts:19:1 › browser_click ────────────────────────────────────────────
    [chrome] › tests\core.spec.ts:19:1 › browser_navigate ──────────────────────────────────────────
  6 passed (35.5s)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining playwright-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
