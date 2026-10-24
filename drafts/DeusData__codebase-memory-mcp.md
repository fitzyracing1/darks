<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47350 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL SAST" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL SAST** workflow (`.github/workflows/codeql.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
