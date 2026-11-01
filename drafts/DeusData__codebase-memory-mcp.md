<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47949 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Nightly Soak", "CodeQL SAST")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly Soak (`.github/workflows/nightly-soak.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/41263689493 — dark (conclusion: `cancelled`), 2026-11-01 02:04 UTC
- Dark since: 2026-11-01 02:04 UTC (first run of the current streak)
- Job / step: `soak / soak-quick-windows` → `Soak legs (quick,query-leak, 240 min each)`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
--- Phase 1: start server ---
OK: server running (pid=92286)
--- Phase 2: initial index ---
OK: baseline RSS=13709312 FDs=-1
--- Phase 3: workload loop (240m) ---
Terminate batch job (Y/N)?
^C
##[error]The operation was canceled.
```

</details>

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/41333388778 — dark (conclusion: `cancelled`), 2026-11-01 17:48 UTC
- Dark since: 2026-11-01 17:48 UTC (first run of the current streak)
- Job / step: `analyze (c-cpp, manual, codeql-cpp)` → `Perform CodeQL Analysis`
- Likely cause: Canceling since a higher priority waiting request for codeql-c-cpp-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[53/61 eval 22m57s] Evaluation done; writing results to codeql/cpp-queries/Security/CWE/CWE-319/UseOfHttp.bqrs.
[54/61 eval 23m24s] Evaluation done; writing results to codeql/cpp-queries/Security/CWE/CWE-367/TOCTOUFilesystemRace.bqrs.
[55/61 eval 23m42s] Evaluation done; writing results to codeql/cpp-queries/Security/CWE/CWE-416/IteratorToExpiredContainer.bqrs.
[56/61 eval 27m19s] Evaluation done; writing results to codeql/cpp-queries/Security/CWE/CWE-120/VeryLikelyOverrunWrite.bqrs.
[57/61 eval 27m52s] Evaluation done; writing results to codeql/cpp-queries/Critical/OverflowStatic.bqrs.
[58/61 eval 24m58s] Evaluation done; writing results to codeql/cpp-queries/Security/CWE/CWE-497/ExposedSystemData.bqrs.
[59/61 eval 28m17s] Evaluation done; writing results to codeql/cpp-queries/Security/CWE/CWE-190/ArithmeticUncontrolled.bqrs.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
