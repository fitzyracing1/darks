<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 450711 · **Generated:** 2026-11-11T06:45:44.706Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CodeQL production", "CI", "Mutation sweep", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42970569047 — dark (conclusion: `skipped`), 2026-11-11 06:10 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42967765437 — dark (conclusion: `cancelled`), 2026-11-11 05:44 UTC
- Dark since: 2026-11-10 21:26 UTC (first run of the current streak)
- Likely cause: run cancelled

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42961815194 — dark (conclusion: `cancelled`), 2026-11-11 04:50 UTC
- Dark since: 2026-11-11 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 83% (elapsed: ~55m, remaining: ~10m) 812/1080 tested (111 survived, 1 timed out)
Mutation testing 83% (elapsed: ~55m, remaining: ~10m) 814/1080 tested (111 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~10m) 816/1080 tested (111 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~10m) 818/1080 tested (111 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~10m) 819/1080 tested (111 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~10m) 821/1080 tested (112 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~10m) 823/1080 tested (114 survived, 1 timed out)
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42967707393 — dark (conclusion: `cancelled`), 2026-11-11 05:44 UTC
- Dark since: 2026-11-11 05:13 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
