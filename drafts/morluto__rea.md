<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 375861 · **Generated:** 2026-10-24T12:48:18.474Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40093209250 — dark (conclusion: `failure`), 2026-10-24 12:15 UTC
- Dark since: 2026-10-22 17:37 UTC (first run of the current streak)
- Job / step: `Test shard (4/8)` → `Run built-dependent tests for fast feedback`
- Likely cause: Tests  10 failed | 2014 passed | 18 skipped (2042)

<details><summary>End of the job log</summary>

```
    245|   });
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/10]⎯
 Test Files  1 failed | 168 passed | 4 skipped (173)
      Tests  10 failed | 2014 passed | 18 skipped (2042)
   Start at  12:20:02
   Duration  712.06s (tests 94%, import 4%, transform 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-built-4-8.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
