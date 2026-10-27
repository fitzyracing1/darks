<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47638 · **Generated:** 2026-10-27T18:39:56.972Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Nightly Soak", "CodeQL SAST", "test-impact-artifact")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly Soak (`.github/workflows/nightly-soak.yml`)

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

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40557781541 — dark (conclusion: `cancelled`), 2026-10-27 18:12 UTC
- Dark since: 2026-10-27 18:04 UTC (first run of the current streak)
- Job / step: `analyze (javascript-typescript, none, codeql-js)`
- Likely cause: Canceling since a higher priority waiting request for codeql-javascript-typescript-refs/heads/main exists

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40557781506 — dark (conclusion: `cancelled`), 2026-10-27 18:12 UTC
- Dark since: 2026-10-27 18:11 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
