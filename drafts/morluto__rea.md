<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 448648 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL production", "CI", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42816051909 — dark (conclusion: `skipped`), 2026-11-10 12:28 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42801673495 — dark (conclusion: `failure`), 2026-11-10 10:44 UTC
- Dark since: 2026-11-08 16:39 UTC (first run of the current streak)
- Job / step: `Source tests` → `Run source tests without waiting for build`
- Likely cause: Tests  1 failed | 26576 passed | 18 skipped (26595)

<details><summary>End of the job log</summary>

```
    458|         alias: "settings",
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 1426 passed | 1 skipped (1428)
      Tests  1 failed | 26576 passed | 18 skipped (26595)
   Start at  11:38:34
   Duration  437.38s (tests 74%, import 21%, transform 4%, worker 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-source.json
##[error]Process completed with exit code 1.
```

</details>

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42758349805 — dark (conclusion: `cancelled`), 2026-11-10 04:50 UTC
- Dark since: 2026-11-10 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 83% (elapsed: ~55m, remaining: ~10m) 726/1070 tested (87 survived, 1 timed out)
Mutation testing 83% (elapsed: ~55m, remaining: ~10m) 728/1070 tested (88 survived, 1 timed out)
Mutation testing 83% (elapsed: ~55m, remaining: ~11m) 729/1070 tested (89 survived, 1 timed out)
Mutation testing 83% (elapsed: ~55m, remaining: ~11m) 731/1070 tested (89 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~11m) 733/1070 tested (89 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~11m) 734/1070 tested (89 survived, 1 timed out)
Mutation testing 83% (elapsed: ~56m, remaining: ~11m) 736/1070 tested (89 survived, 1 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
