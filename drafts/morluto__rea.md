<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 374406 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40066718078 — dark (conclusion: `failure`), 2026-10-24 05:33 UTC
- Dark since: 2026-10-22 17:37 UTC (first run of the current streak)
- Job / step: `Test shard (1/6)` → `Run complete portable suite with coverage`
- Likely cause: Tests  1 failed | 5229 passed | 81 skipped (5311)

<details><summary>End of the job log</summary>

```
     84|
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 380 passed | 7 skipped (388)
      Tests  1 failed | 5229 passed | 81 skipped (5311)
   Start at  05:50:25
   Duration  1007.92s (tests 92%, import 7%, transform 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-1-6.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
