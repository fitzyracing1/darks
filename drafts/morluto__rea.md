<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 378831 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40147368662 — dark (conclusion: `failure`), 2026-10-25 00:36 UTC
- Dark since: 2026-10-22 17:37 UTC (first run of the current streak)
- Job / step: `Test shard (7/8)` → `Run built-dependent tests for fast feedback`
- Likely cause: Tests  1 failed | 1447 passed | 42 skipped (1490)

<details><summary>End of the job log</summary>

```
 ❯ tests/boundary/mcp/agentKnownAnswerMcp.test.ts:265:7
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 175 passed | 5 skipped (181)
      Tests  1 failed | 1447 passed | 42 skipped (1490)
   Start at  00:50:23
   Duration  602.75s (tests 93%, import 5%, transform 1%)
blob report written to /home/runner/work/rea/rea/.vitest/blob/blob-built-7-8.json
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
