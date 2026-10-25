<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47443 · **Generated:** 2026-10-25T12:49:12.088Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL SAST", "Nightly Soak")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/39702570308 — dark (conclusion: `failure`), 2026-10-22 00:55 UTC
- Dark since: 2026-10-20 22:30 UTC (first run of the current streak)
- Job / step: `analyze (c-cpp, manual, codeql-cpp)` → `Check for open code scanning alerts`
- Likely cause: 10 open alert(s) on refs/heads/main -- fix, or dismiss with a reason in the Security tab

<details><summary>End of the job log</summary>

```
Uploading TRAP cache to Actions cache with key codeql-trap-1-2.27.3-cpp-10ab613de30dfd573d0b251cd0ad648e1c7e5204
[command]/usr/bin/tar --posix -cf cache.tzst --exclude cache.tzst -P -C /home/runner/work/codebase-memory-mcp/codebase-memory-mcp --files-from manifest.txt --use-compress-program zstdmt
Sent 0 of 1178366897 (0.0%), 0.0 MBs/sec
Sent 603979776 of 1178366897 (51.3%), 287.9 MBs/sec
Sent 1178366897 of 1178366897 (100.0%), 378.8 MBs/sec
Analysis upload status is complete.
Waiting 60s for alert API to settle...
##[error]10 open alert(s) on refs/heads/main -- fix, or dismiss with a reason in the Security tab
```

</details>

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

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
