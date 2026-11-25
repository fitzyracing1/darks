<!-- dark-draft: wangzan101/Mika -->
<!-- draft-state: ready -->
# Upstream issue draft: wangzan101/Mika

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/wangzan101/Mika/issues/new
- **Stars:** 9869 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/wangzan101/Mika/actions/runs/45484030717 — dark (conclusion: `failure`), 2026-11-24 20:45 UTC
- Dark since: 2026-11-24 12:52 UTC (first run of the current streak)
- Job / step: `core (JVM)` → `Unit tests`
- Likely cause: BUILD FAILED in 6m 37s

<details><summary>End of the job log</summary>

```
	at org.gradle.execution.taskgraph.DefaultTaskExecutionGraph$BuildOperationAwareExecutionAction.execute(DefaultTaskExecutionGraph.java:303)
	at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.execute(DefaultPlanExecutor.java:459)
	at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.run(DefaultPlanExecutor.java:376)
	at org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)
	at org.gradle.internal.concurrent.AbstractManagedExecutor$1.run(AbstractManagedExecutor.java:48)
BUILD FAILED in 6m 37s
18 actionable tasks: 18 executed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Mika!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
