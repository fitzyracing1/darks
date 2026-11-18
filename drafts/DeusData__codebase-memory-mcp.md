<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 48800 · **Generated:** 2026-11-18T06:45:12.554Z
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

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/43666039324 — dark (conclusion: `cancelled`), 2026-11-15 02:04 UTC
- Dark since: 2026-11-01 02:04 UTC (first run of the current streak)
- Job / step: `soak / soak-quick (ubuntu-24.04-arm, linux, arm64, gcc, g++)` → `Soak legs (quick,query-leak, 240 min each)`
- Likely cause: The job has exceeded the maximum execution time of 6h0m0s

<details><summary>End of the job log</summary>

```
Generating test project (~200 files)...
OK: 377 files in test project
--- Phase 1: start server ---
OK: server running (pid=209575)
--- Phase 2: initial index ---
OK: baseline RSS=22900736 FDs=23
--- Phase 3: workload loop (240m) ---
##[error]The operation was canceled.
```

</details>

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/44206873325 — dark (conclusion: `failure`), 2026-11-18 00:19 UTC
- Dark since: 2026-11-13 18:51 UTC (first run of the current streak)
- Job / step: `publish` → `Publish the bundle`
- Likely cause: test-impact publish: status 1: reading HEAD sources failed: internal/cbm/ac.c

<details><summary>End of the job log</summary>

```
grammar_probe_c: 42 tests, 0 incomplete, exit 0, 0.9 s
grammar_probe_d: 75 tests, 0 incomplete, exit 0, 4.0 s
grammar_probe_e: 56 tests, 0 incomplete, exit 0, 2.8 s
grammar_probe_f: 184 tests, 0 incomplete, exit 0, 18.8 s
grammar_probe_g: 45 tests, 0 incomplete, exit 0, 2.9 s
map: 10406 tests, 321 incomplete, 27888 functions -> /tmp/tmp.vUT7hFgCWH/coverage
test-impact publish: status 1: reading HEAD sources failed: internal/cbm/ac.c
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
