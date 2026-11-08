<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 443132 · **Generated:** 2026-11-08T18:35:29.654Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL production", "Mutation sweep", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42503729561 — dark (conclusion: `skipped`), 2026-11-08 17:11 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42448387126 — dark (conclusion: `cancelled`), 2026-11-08 04:50 UTC
- Dark since: 2026-11-08 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 96% (elapsed: ~55m, remaining: ~2m) 778/843 tested (147 survived, 2 timed out)
Mutation testing 96% (elapsed: ~55m, remaining: ~2m) 779/843 tested (148 survived, 2 timed out)
Mutation testing 96% (elapsed: ~55m, remaining: ~1m) 780/843 tested (149 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 783/843 tested (151 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 785/843 tested (152 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 788/843 tested (153 survived, 2 timed out)
Mutation testing 97% (elapsed: ~56m, remaining: ~1m) 789/843 tested (154 survived, 2 timed out)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42505057644 — dark (conclusion: `cancelled`), 2026-11-08 17:27 UTC
- Dark since: 2026-11-08 16:39 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
