<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 48012 · **Generated:** 2026-11-03T00:52:20.983Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Nightly Soak", "test-impact-artifact", "CodeQL SAST")
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

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/41551762342 — dark (conclusion: `cancelled`), 2026-11-03 00:17 UTC
- Dark since: 2026-11-02 17:07 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/41551762346 — dark (conclusion: `cancelled`), 2026-11-03 00:17 UTC
- Dark since: 2026-11-02 20:59 UTC (first run of the current streak)
- Job / step: `analyze (c-cpp, manual, codeql-cpp)` → `Perform CodeQL Analysis`
- Likely cause: Canceling since a higher priority waiting request for codeql-c-cpp-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[34/61 eval 5m11s] Evaluation done; writing results to codeql/cpp-queries/Likely Bugs/Memory Management/PointerOverflow.bqrs.
[35/61 eval 5m16s] Evaluation done; writing results to codeql/cpp-queries/Likely Bugs/Memory Management/SuspiciousCallToStrncat.bqrs.
[36/61 eval 6m18s] Evaluation done; writing results to codeql/cpp-queries/Likely Bugs/Memory Management/ReturnStackAllocatedMemory.bqrs.
[37/61 eval 9m8s] Evaluation done; writing results to codeql/cpp-queries/Critical/IncorrectCheckScanf.bqrs.
[38/61 eval 6m46s] Evaluation done; writing results to codeql/cpp-queries/Likely Bugs/OO/UnsafeUseOfThis.bqrs.
[39/61 eval 6m50s] Evaluation done; writing results to codeql/cpp-queries/Likely Bugs/Memory Management/UsingExpiredStackAddress.bqrs.
[40/61 eval 6m58s] Evaluation done; writing results to codeql/cpp-queries/Likely Bugs/RedundantNullCheckSimple.bqrs.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
