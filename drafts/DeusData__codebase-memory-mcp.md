<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 49019 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Nightly Soak", "test-impact-artifact")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly Soak (`.github/workflows/nightly-soak.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/44974392333 — dark (conclusion: `cancelled`), 2026-11-22 02:04 UTC
- Dark since: 2026-11-01 02:04 UTC (first run of the current streak)
- Job / step: `soak / soak-quick (macos-15, darwin, arm64, cc, c++)` → `Soak legs (quick,query-leak, 240 min each)`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
Generating test project (~200 files)...
OK: 377 files in test project
--- Phase 1: start server ---
OK: server running (pid=39280)
--- Phase 2: initial index ---
OK: baseline RSS=8732672 FDs=21
--- Phase 3: workload loop (240m) ---
##[error]The operation was canceled.
```

</details>

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/44980880256 — dark (conclusion: `cancelled`), 2026-11-22 03:29 UTC
- Dark since: 2026-11-13 18:51 UTC (first run of the current streak)
- Job / step: `publish` → `Publish the bundle`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
grammar_probe_b: 43 tests, 0 incomplete, exit 0, 2.1 s
grammar_probe_c: 42 tests, 0 incomplete, exit 0, 1.1 s
grammar_probe_d: 75 tests, 0 incomplete, exit 0, 4.4 s
grammar_probe_e: 56 tests, 0 incomplete, exit 0, 3.0 s
grammar_probe_f: 184 tests, 0 incomplete, exit 0, 20.1 s
grammar_probe_g: 45 tests, 0 incomplete, exit 0, 2.4 s
map: 10500 tests, 323 incomplete, 28295 functions -> /tmp/tmp.LONWdjAMpl/coverage
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
