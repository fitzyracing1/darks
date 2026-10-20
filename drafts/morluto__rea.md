<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 336945 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mutation sweep" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mutation sweep** workflow (`.github/workflows/mutation.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

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
