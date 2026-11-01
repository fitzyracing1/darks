<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9505 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- CI Rust (`.github/workflows/ci-rust.yaml`): [issue #2333](https://github.com/xberg-io/xberg/issues/2333) "chore(deps): remove the Candle ZIP 9 backport after release"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI E2E" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI E2E** workflow (`.github/workflows/ci-e2e.yaml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41280832115 — dark (conclusion: `failure`), 2026-11-01 06:26 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `E2E (kotlin-android)` → `Run e2e tests`
- Likely cause: [kotlin-android:e2e] ERROR task failed

<details><summary>End of the job log</summary>

```
[kotlin_android] You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
[kotlin_android]
[kotlin_android] For more on this, please refer to https://docs.gradle.org/9.8.2/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
[kotlin_android] 17 actionable tasks: 17 executed
ERROR test failed: kotlin_android — Command failed: cd packages/kotlin-android && gradle test --no-daemon (env: LD_LIBRARY_PATH)
ERROR Command failed: cd packages/kotlin-android && gradle test --no-daemon (env: LD_LIBRARY_PATH)
[kotlin-android:e2e] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
