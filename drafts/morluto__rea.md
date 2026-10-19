<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 326850 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/39204311565 — dark (conclusion: `cancelled`), 2026-10-19 05:23 UTC
- Dark since: 2026-10-18 23:07 UTC (first run of the current streak)
- Likely cause: run cancelled

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/39201928274 — dark (conclusion: `failure`), 2026-10-19 04:55 UTC
- Dark since: 2026-10-19 04:55 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: innerError: undefined

<details><summary>End of the job log</summary>

```
    at DryRunExecutor.executeDryRun (file:///home/runner/work/rea/rea/node_modules/@stryker-mutator/core/dist/src/process/3-dry-run-executor.js:100:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async WorkItem.execute (file:///home/runner/work/rea/rea/node_modules/@stryker-mutator/core/dist/src/concurrent/pool.js:32:28)
    at async file:///home/runner/work/rea/rea/node_modules/@stryker-mutator/core/dist/src/concurrent/pool.js:69:13 {
  innerError: undefined
}
Node.js v24.18.0
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
