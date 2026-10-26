<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 389120 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40326468125 — dark (conclusion: `failure`), 2026-10-26 12:56 UTC
- Dark since: 2026-10-26 08:56 UTC (first run of the current streak)
- Job / step: `Test shard (5/8)` → `Run built-dependent tests for fast feedback`
- Likely cause: Tests  1 failed | 2142 passed | 15 skipped (2158)

<details><summary>End of the job log</summary>

```
    107|       code: "execution_failure",
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 191 passed | 3 skipped (195)
      Tests  1 failed | 2142 passed | 15 skipped (2158)
   Start at  13:09:08
   Duration  413.75s (tests 94%, import 5%, transform 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-built-5-8.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
