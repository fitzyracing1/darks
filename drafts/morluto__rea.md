<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 460371 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI", "CodeQL production", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43683049677 — dark (conclusion: `cancelled`), 2026-11-15 05:54 UTC
- Dark since: 2026-11-14 23:57 UTC (first run of the current streak)
- Likely cause: run cancelled

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43683049559 — dark (conclusion: `cancelled`), 2026-11-15 05:54 UTC
- Dark since: 2026-11-14 23:57 UTC (first run of the current streak)
- Likely cause: run cancelled

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43678467591 — dark (conclusion: `cancelled`), 2026-11-15 04:50 UTC
- Dark since: 2026-11-15 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 686/1091 tested (90 survived, 1 timed out)
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 687/1091 tested (90 survived, 1 timed out)
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 687/1091 tested (90 survived, 1 timed out)
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 689/1091 tested (91 survived, 1 timed out)
Mutation testing 81% (elapsed: ~56m, remaining: ~12m) 691/1091 tested (92 survived, 1 timed out)
Mutation testing 81% (elapsed: ~56m, remaining: ~12m) 693/1091 tested (92 survived, 1 timed out)
Mutation testing 81% (elapsed: ~56m, remaining: ~12m) 695/1091 tested (92 survived, 1 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
