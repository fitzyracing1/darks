<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 474923 · **Generated:** 2026-11-23T12:44:06.505Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL production", "CI", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45172982630 — dark (conclusion: `cancelled`), 2026-11-23 12:18 UTC
- Dark since: 2026-11-22 11:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45172983111 — dark (conclusion: `cancelled`), 2026-11-23 12:18 UTC
- Dark since: 2026-11-22 12:21 UTC (first run of the current streak)
- Likely cause: run cancelled

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/45114175530 — dark (conclusion: `failure`), 2026-11-23 04:50 UTC
- Dark since: 2026-11-23 04:50 UTC (first run of the current streak)
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
