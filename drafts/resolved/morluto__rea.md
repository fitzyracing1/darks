<!-- dark-draft: morluto/rea -->
<!-- draft-state: resolved -->
# Upstream issue draft: morluto/rea

- **Status:** resolved — lit again (2026-11-20); nothing to file
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 470842 · **Generated:** 2026-11-20T12:41:20.099Z
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

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44676967726 — dark (conclusion: `cancelled`), 2026-11-20 04:49 UTC
- Dark since: 2026-11-20 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 88% (elapsed: ~56m, remaining: ~7m) 873/1034 tested (126 survived, 2 timed out)
Mutation testing 88% (elapsed: ~56m, remaining: ~7m) 873/1034 tested (126 survived, 2 timed out)
Mutation testing 88% (elapsed: ~56m, remaining: ~7m) 876/1034 tested (126 survived, 2 timed out)
Mutation testing 88% (elapsed: ~56m, remaining: ~7m) 877/1034 tested (126 survived, 2 timed out)
Mutation testing 90% (elapsed: ~56m, remaining: ~5m) 879/1034 tested (126 survived, 2 timed out)
Mutation testing 91% (elapsed: ~57m, remaining: ~5m) 881/1034 tested (126 survived, 2 timed out)
Mutation testing 91% (elapsed: ~57m, remaining: ~5m) 881/1034 tested (126 survived, 2 timed out)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44736619374 — dark (conclusion: `cancelled`), 2026-11-20 12:32 UTC
- Dark since: 2026-11-20 12:21 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
