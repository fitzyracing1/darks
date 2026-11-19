<!-- dark-draft: czlonkowski/n8n-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: czlonkowski/n8n-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/czlonkowski/n8n-mcp/issues/new
- **Stars:** 23285 · **Generated:** 2026-11-19T06:47:13.117Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Suite" workflow getting cancelled on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Suite** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/czlonkowski/n8n-mcp/actions/runs/44305857944 — dark (conclusion: `cancelled`), 2026-11-18 12:38 UTC
- Dark since: 2026-11-18 12:38 UTC (first run of the current streak)
- Job / step: `test` → `Run integration tests (live n8n instance)`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
   ✓ Integration: handleDiagnostic > Environment Detection > should provide mode-specific debugging suggestions  527ms
   ✓ Integration: handleDiagnostic > Environment Detection > should include Docker debugging if IS_DOCKER is true  516ms
   ✓ Integration: handleDiagnostic > Environment Detection > should not include Docker debugging if IS_DOCKER is false  508ms
   ✓ Integration: handleDiagnostic > Verbose Mode > should include additional debug info in verbose mode  504ms
   ✓ Integration: handleDiagnostic > Verbose Mode > should not include debug info when verbose is false  512ms
   ✓ Integration: handleDiagnostic > Verbose Mode > should not include debug info by default  508ms
   ✓ Integration: handleDiagnostic > Response Format > should return complete diagnostic response structure  508ms
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
