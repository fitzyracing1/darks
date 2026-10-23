<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 370339 · **Generated:** 2026-10-23T12:52:35.417Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/39953444507 — dark (conclusion: `failure`), 2026-10-23 12:27 UTC
- Dark since: 2026-10-22 17:37 UTC (first run of the current streak)
- Job / step: `Test shard (1/8)` → `Run built-dependent tests for fast feedback`
- Likely cause: Tests  2 failed | 1674 passed | 26 skipped (1702)

<details><summary>End of the job log</summary>

```
 ❯ tests/boundary/mcp/gdbCloseDisposition.test.ts:129:40
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯
 Test Files  1 failed | 148 passed | 4 skipped (153)
      Tests  2 failed | 1674 passed | 26 skipped (1702)
   Start at  12:29:00
   Duration  357.59s (tests 93%, import 5%, transform 2%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-built-1-8.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
