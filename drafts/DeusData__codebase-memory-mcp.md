<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47696 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Nightly Soak" workflow getting cancelled on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Nightly Soak** workflow (`.github/workflows/nightly-soak.yml`) on `main` has been getting cancelled since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40153320085 — dark (conclusion: `cancelled`), 2026-10-25 02:08 UTC
- Dark since: 2026-10-25 02:08 UTC (first run of the current streak)
- Job / step: `soak / soak-quick-windows-arm64` → `Soak legs (quick,query-leak, 240 min each)`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
--- Phase 1: start server ---
OK: server running (pid=70623)
--- Phase 2: initial index ---
OK: baseline RSS=14438400 FDs=-1
--- Phase 3: workload loop (240m) ---
Terminate batch job (Y/N)?
^C
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
