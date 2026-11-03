<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 425209 · **Generated:** 2026-11-03T12:42:36.291Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL production", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41607067732 — dark (conclusion: `skipped`), 2026-11-03 08:56 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41627726753 — dark (conclusion: `failure`), 2026-11-03 11:27 UTC
- Dark since: 2026-11-03 09:27 UTC (first run of the current streak)
- Job / step: `Real Apple artifact CLI/MCP E2E` → `Run native Apple and process boundary regressions`
- Likely cause: Tests  1 failed | 411 passed | 5 skipped (417)

<details><summary>End of the job log</summary>

```
    145|
   Duration  419.68s (tests 96%, transform 3%, import 2%)
    146| mcpTest(
       | ^
    147|   "advertises binary names and partially decoded command fields throug…
    148|   async ({ mcp, onTestFinished }) => {
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
