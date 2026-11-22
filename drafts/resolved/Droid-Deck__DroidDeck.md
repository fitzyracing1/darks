<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-11-22); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 21253 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/44988719981 — dark (conclusion: `failure`), 2026-11-22 05:16 UTC
- Dark since: 2026-11-22 03:51 UTC (first run of the current streak)
- Job / step: `Compile APK and Android tests` → `Unit tests`
- Likely cause: BUILD FAILED in 3m 21s

<details><summary>End of the job log</summary>

```
	at org.gradle.execution.plan.DefaultPlanExecutor$ExecutorWorker.run(DefaultPlanExecutor.java:376)
	at org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)
	at org.gradle.internal.concurrent.AbstractManagedExecutor$1.run(AbstractManagedExecutor.java:48)
BUILD FAILED in 3m 21s
82 actionable tasks: 12 executed, 3 from cache, 67 up-to-date
Some of the file system contents retained in the virtual file system are on file systems that Gradle doesn't support watching. The relevant state was discarded to ensure changes to these locations are properly detected.…
Configuration cache entry stored.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
