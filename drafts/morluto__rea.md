<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 419843 · **Generated:** 2026-11-02T06:51:01.101Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL production", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41395203839 — dark (conclusion: `skipped`), 2026-11-02 05:38 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41390617233 — dark (conclusion: `cancelled`), 2026-11-02 04:50 UTC
- Dark since: 2026-11-02 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 99% (elapsed: ~55m, remaining: n/a) 822/830 tested (152 survived, 2 timed out)
Mutation testing 99% (elapsed: ~56m, remaining: n/a) 823/830 tested (152 survived, 2 timed out)
Mutation testing 99% (elapsed: ~56m, remaining: n/a) 824/830 tested (152 survived, 2 timed out)
Mutation testing 99% (elapsed: ~56m, remaining: n/a) 825/830 tested (152 survived, 2 timed out)
Mutation testing 99% (elapsed: ~56m, remaining: n/a) 826/830 tested (152 survived, 2 timed out)
Mutation testing 99% (elapsed: ~56m, remaining: n/a) 827/830 tested (152 survived, 2 timed out)
Mutation testing 99% (elapsed: ~56m, remaining: n/a) 828/830 tested (152 survived, 2 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
