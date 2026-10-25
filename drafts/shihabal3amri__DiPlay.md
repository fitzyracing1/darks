<!-- dark-draft: shihabal3amri/DiPlay -->
<!-- draft-state: ready -->
# Upstream issue draft: shihabal3amri/DiPlay

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/shihabal3amri/DiPlay/issues/new
- **Stars:** 12335 · **Generated:** 2026-10-25T12:49:12.088Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Android checks" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Android checks** workflow (`.github/workflows/android.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/shihabal3amri/DiPlay/actions/runs/40103289563 — dark (conclusion: `failure`), 2026-10-24 14:36 UTC
- Dark since: 2026-10-24 14:36 UTC (first run of the current streak)
- Job / step: `check` → `Unit tests, lint and source-only debug build`
- Likely cause: BUILD FAILED in 10m 57s

<details><summary>End of the job log</summary>

```
	... 30 more
BUILD FAILED in 10m 57s
Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.
You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
For more on this, please refer to https://docs.gradle.org/9.5.0/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
250 actionable tasks: 250 executed
Configuration cache entry stored.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DiPlay!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
