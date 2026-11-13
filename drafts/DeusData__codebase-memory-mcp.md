<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 48575 · **Generated:** 2026-11-13T00:54:20.399Z
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

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/42436967517 — dark (conclusion: `cancelled`), 2026-11-08 02:04 UTC
- Dark since: 2026-11-01 02:04 UTC (first run of the current streak)
- Job / step: `soak / soak-quick (ubuntu-latest, linux, amd64, gcc, g++)` → `Soak legs (quick,query-leak, 240 min each)`
- Likely cause: run cancelled in job "soak / soak-quick (ubuntu-latest, linux, amd64, gcc, g++)"

<details><summary>End of the job log</summary>

```
FAIL: RSS slope 683 KB/hr > 500 KB/hr
RSS ratio (last/first): 1.6x
FD drift: 0
Idle daemon CPU: 0.9%
Max query latency: 58ms (index: 506ms)
Total queries: 13704
=== soak-test: FAILED ===
##[error]Process completed with exit code 1.
```

</details>

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/43315369517 — dark (conclusion: `failure`), 2026-11-12 21:57 UTC
- Dark since: 2026-11-12 21:16 UTC (first run of the current streak)
- Job / step: `publish` → `Publish the bundle`
- Likely cause: test-impact publish: status 1: the graph of HEAD could not be built: frozen status 11, evidence 25, 190 file error(s): graph-ui/src/architecture/architecture-scenes.test.tsx 9-9

<details><summary>End of the job log</summary>

```
grammar_probe_c: 42 tests, 0 incomplete, exit 0, 0.8 s
grammar_probe_d: 75 tests, 0 incomplete, exit 0, 3.2 s
grammar_probe_e: 56 tests, 0 incomplete, exit 0, 2.1 s
grammar_probe_f: 184 tests, 0 incomplete, exit 0, 11.3 s
grammar_probe_g: 45 tests, 0 incomplete, exit 0, 1.7 s
map: 10311 tests, 319 incomplete, 27556 functions -> /tmp/tmp.5vu1WIH3wy/coverage
test-impact publish: status 1: the graph of HEAD could not be built: frozen status 11, evidence 25, 190 file error(s): graph-ui/src/architecture/architecture-scenes.test.tsx 9-9
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
