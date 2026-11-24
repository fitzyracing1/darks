<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 476414 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45385830115 — dark (conclusion: `cancelled`), 2026-11-24 11:37 UTC
- Dark since: 2026-11-22 12:21 UTC (first run of the current streak)
- Likely cause: run cancelled

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45329102967 — dark (conclusion: `failure`), 2026-11-24 04:50 UTC
- Dark since: 2026-11-24 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 692/1039 tested (89 survived, 0 timed out)
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 694/1039 tested (91 survived, 0 timed out)
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 696/1039 tested (91 survived, 0 timed out)
Mutation testing 81% (elapsed: ~55m, remaining: ~12m) 697/1039 tested (91 survived, 0 timed out)
Mutation testing 81% (elapsed: ~56m, remaining: ~12m) 699/1039 tested (91 survived, 0 timed out)
Mutation testing 81% (elapsed: ~56m, remaining: ~12m) 700/1039 tested (91 survived, 0 timed out)
Mutation testing 81% (elapsed: ~56m, remaining: ~12m) 702/1039 tested (91 survived, 0 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
