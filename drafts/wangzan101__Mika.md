<!-- dark-draft: wangzan101/Mika -->
<!-- draft-state: ready -->
# Upstream issue draft: wangzan101/Mika

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/wangzan101/Mika/issues/new
- **Stars:** 9687 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/wangzan101/Mika/actions/runs/45124373730 — dark (conclusion: `failure`), 2026-11-23 06:28 UTC
- Dark since: 2026-11-23 06:28 UTC (first run of the current streak)
- Job / step: `app (Android)` → `Unit tests, debug build, and device test compilation`
- Likely cause: BUILD FAILED in 6m 32s

<details><summary>End of the job log</summary>

```
	at org.gradle.internal.work.DefaultWorkerLeaseService.withLocks(DefaultWorkerLeaseService.java:263)
	at org.gradle.internal.work.DefaultWorkerLeaseService.runAsWorkerThread(DefaultWorkerLeaseService.java:127)
	at org.gradle.internal.work.DefaultWorkerLeaseService.runAsWorkerThread(DefaultWorkerLeaseService.java:132)
	at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.runBatch(DefaultConditionalExecutionQueue.java:164)
	at org.gradle.internal.work.DefaultConditionalExecutionQueue$ExecutionRunner.run(DefaultConditionalExecutionQueue.java:133)
	... 2 more
BUILD FAILED in 6m 32s
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Mika!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
