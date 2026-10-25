<!-- dark-draft: DeusData/codebase-memory-mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: DeusData/codebase-memory-mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/DeusData/codebase-memory-mcp/issues/new
- **Stars:** 47460 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL SAST", "Nightly Soak", "test-impact-artifact")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL SAST (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40219904025 — dark (conclusion: `cancelled`), 2026-10-25 18:09 UTC
- Dark since: 2026-10-20 22:30 UTC (first run of the current streak)
- Job / step: `analyze (javascript-typescript, none, codeql-js)` → `Perform CodeQL Analysis`
- Likely cause: Canceling since a higher priority waiting request for codeql-javascript-typescript-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[2026-10-25 18:10:53] [build-stdout] Extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/webkit_notifications.js
[2026-10-25 18:10:53] [build-stdout] Done extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/webkit_notifications.js (23 ms)
[2026-10-25 18:10:53] [build-stdout] Extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/streamsapi.js
[2026-10-25 18:10:53] [build-stdout] Done extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/streamsapi.js (55 ms)
[2026-10-25 18:10:53] [build-stdout] Extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/w3c_screen_orientation.js
[2026-10-25 18:10:53] [build-stdout] Done extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/w3c_screen_orientation.js (5 ms)
[2026-10-25 18:10:53] [build-stdout] Extracting /opt/hostedtoolcache/CodeQL/2.27.3/x64/codeql/javascript/tools/data/externs/web/w3c_dom2.js
##[error]The operation was canceled.
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

### test-impact-artifact (`.github/workflows/test-impact-artifact.yml`)

- Latest run on `main`: https://github.com/DeusData/codebase-memory-mcp/actions/runs/40219904006 — dark (conclusion: `cancelled`), 2026-10-25 18:09 UTC
- Dark since: 2026-10-25 17:49 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining codebase-memory-mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
