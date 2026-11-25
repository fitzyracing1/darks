<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 477499 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mutation sweep" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mutation sweep** workflow (`.github/workflows/mutation.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45549402273 — dark (conclusion: `failure`), 2026-11-25 04:49 UTC
- Dark since: 2026-11-25 04:49 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools-semantics)` → `Run the complete configuration`
- Likely cause: innerError: undefined

<details><summary>End of the job log</summary>

```
    at ChildProcess.<anonymous> (file:///home/runner/work/rea/rea/node_modules/@stryker-mutator/core/dist/src/child-proxy/child-process-proxy.js:123:33)
    at ChildProcess.emit (node:events:514:28)
    at emit (node:internal/child_process:1020:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:91:21) {
  innerError: undefined
}
Node.js v24.22.1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
