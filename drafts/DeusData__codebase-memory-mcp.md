<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47063 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CodeQL SAST" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CodeQL SAST** workflow (`.github/workflows/codeql.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/39529078131 — dark (conclusion: `failure`), 2026-10-21 01:44 UTC
- Dark since: 2026-10-20 22:30 UTC (first run of the current streak)
- Job / step: `analyze (c-cpp, manual, codeql-cpp)` → `Check for open code scanning alerts`
- Likely cause: 10 open alert(s) on refs/heads/main -- fix, or dismiss with a reason in the Security tab

<details><summary>End of the job log</summary>

```
[command]/usr/bin/tar --posix -cf cache.tzst --exclude cache.tzst -P -C /home/runner/work/codebase-memory-mcp/codebase-memory-mcp --files-from manifest.txt --use-compress-program zstdmt
Sent 0 of 1178137764 (0.0%), 0.0 MBs/sec
Sent 536870912 of 1178137764 (45.6%), 256.0 MBs/sec
Sent 1006632960 of 1178137764 (85.4%), 319.9 MBs/sec
Sent 1178137764 of 1178137764 (100.0%), 299.5 MBs/sec
Analysis upload status is complete.
Waiting 60s for alert API to settle...
##[error]10 open alert(s) on refs/heads/main -- fix, or dismiss with a reason in the Security tab
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
