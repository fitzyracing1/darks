<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 48715 · **Generated:** 2026-11-16T12:52:35.150Z
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

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/43672550397 — dark (conclusion: `failure`), 2026-11-15 03:28 UTC
- Dark since: 2026-11-13 18:51 UTC (first run of the current streak)
- Job / step: `publish` → `Publish the bundle`
- Likely cause: test-impact publish: status 1: the graph of HEAD could not be built: frozen status 11, evidence 25, 194 file error(s): graph-ui/src/architecture/architecture-scenes.test.tsx 9-9

<details><summary>End of the job log</summary>

```
grammar_probe_c: 42 tests, 0 incomplete, exit 0, 1.1 s
grammar_probe_d: 75 tests, 0 incomplete, exit 0, 4.0 s
grammar_probe_e: 56 tests, 0 incomplete, exit 0, 2.6 s
grammar_probe_f: 184 tests, 0 incomplete, exit 0, 13.9 s
grammar_probe_g: 45 tests, 0 incomplete, exit 0, 2.0 s
map: 10378 tests, 321 incomplete, 27812 functions -> /tmp/tmp.R970Y2gdSE/coverage
test-impact publish: status 1: the graph of HEAD could not be built: frozen status 11, evidence 25, 194 file error(s): graph-ui/src/architecture/architecture-scenes.test.tsx 9-9
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
