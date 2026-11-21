<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 472144 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Mutation sweep", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44867984300 — dark (conclusion: `cancelled`), 2026-11-21 04:49 UTC
- Dark since: 2026-11-21 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 83% (elapsed: ~55m, remaining: ~10m) 747/1034 tested (96 survived, 0 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 749/1034 tested (97 survived, 0 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 750/1034 tested (98 survived, 0 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 752/1034 tested (99 survived, 0 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 753/1034 tested (100 survived, 0 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 754/1034 tested (101 survived, 0 timed out)
Mutation testing 84% (elapsed: ~56m, remaining: ~10m) 755/1034 tested (101 survived, 0 timed out)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44903019539 — dark (conclusion: `cancelled`), 2026-11-21 12:15 UTC
- Dark since: 2026-11-21 06:31 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
