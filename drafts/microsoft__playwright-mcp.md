<!-- dark-draft: microsoft/playwright-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/playwright-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/playwright-mcp/issues/new
- **Stars:** 39369 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/playwright-mcp/actions/runs/42307591456 — dark (conclusion: `failure`), 2026-11-06 22:49 UTC
- Dark since: 2026-11-06 22:49 UTC (first run of the current streak)
- Job / step: `test (windows-latest)` → `Run playwright-mcp tests`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
      47 |     snapshot: expect.stringContaining(`button "Submit" [active] [ref=e2]`),
      48 |   });
        at D:\a\playwright-mcp\playwright-mcp\tests\click.spec.ts:45:7
    Error Context: test-results\click-browser-click-chrome\error-context.md
  1 failed
    [chrome] › tests\click.spec.ts:19:1 › browser_click ────────────────────────────────────────────
  7 passed (25.6s)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining playwright-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
