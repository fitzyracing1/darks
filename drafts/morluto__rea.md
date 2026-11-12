<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 452750 · **Generated:** 2026-11-12T00:55:01.455Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL production", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43121966476 — dark (conclusion: `cancelled`), 2026-11-11 23:43 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43121975275 — dark (conclusion: `cancelled`), 2026-11-11 23:43 UTC
- Dark since: 2026-11-10 21:26 UTC (first run of the current streak)
- Job / step: `Real Apple artifact CLI/MCP E2E` → `Run native Apple and process boundary regressions`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
   × advertises binary names and partially decoded command fields through SDK schemas 35335ms
   ✓ pages ambiguous imports and exact exports under the advertised MCP schema 4477ms
   ✓ Mach-O summary delivery through MCP (1)
     ✓ retains complete inspect_macho Evidence and pages its exact rows 9559ms
   ✓ refuses summary delivery before analysis when the server retains no Evidence 239ms
 ✓  process-global  tests/process-global/dmgCancellationReason.test.ts (2 tests) 177ms
 ✓  process-global  tests/process-global/filesystemSnapshotFallbackCancellation.test.ts (3 tests) 52ms
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
