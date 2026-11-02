<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9509 · **Generated:** 2026-11-02T00:55:52.981Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41344525515 — dark (conclusion: `failure`), 2026-11-01 19:59 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   54G   91G  38% /
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 3272.61s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41344525391 — dark (conclusion: `failure`), 2026-11-01 19:59 UTC
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
