<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 458152 · **Generated:** 2026-11-14T06:41:55.262Z
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

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43558591042 — dark (conclusion: `cancelled`), 2026-11-14 04:50 UTC
- Dark since: 2026-11-14 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 80% (elapsed: ~55m, remaining: ~13m) 718/1091 tested (92 survived, 1 timed out)
Mutation testing 80% (elapsed: ~55m, remaining: ~13m) 719/1091 tested (92 survived, 1 timed out)
Mutation testing 80% (elapsed: ~55m, remaining: ~13m) 720/1091 tested (92 survived, 1 timed out)
Mutation testing 80% (elapsed: ~55m, remaining: ~13m) 722/1091 tested (92 survived, 1 timed out)
Mutation testing 80% (elapsed: ~56m, remaining: ~13m) 724/1091 tested (92 survived, 1 timed out)
Mutation testing 80% (elapsed: ~56m, remaining: ~13m) 726/1091 tested (92 survived, 1 timed out)
Mutation testing 80% (elapsed: ~56m, remaining: ~13m) 727/1091 tested (92 survived, 1 timed out)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43561638849 — dark (conclusion: `failure`), 2026-11-14 05:27 UTC
- Dark since: 2026-11-14 05:27 UTC (first run of the current streak)
- Job / step: `Test shard (6/6)` → `Run complete portable suite with coverage`
- Likely cause: Tests  1 failed | 8010 passed | 65 skipped (8076)

<details><summary>End of the job log</summary>

```
    1274|   expect(report.coverage.objects).toBe(49_612);
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 549 passed | 17 skipped (567)
      Tests  1 failed | 8010 passed | 65 skipped (8076)
   Start at  05:38:44
   Duration  1305.29s (tests 92%, import 7%, transform 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-6-6.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
