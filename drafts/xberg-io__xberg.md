<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9497 · **Generated:** 2026-11-01T06:42:01.505Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41266879206 — dark (conclusion: `failure`), 2026-11-01 02:51 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size    Used   Avail Capacity iused ifree %iused  Mounted on
/dev/disk2s5   320Gi   271Gi    27Gi    92%    2.1M  280M    1%   /System/Volumes/Data
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 3989.89s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41266879064 — dark (conclusion: `failure`), 2026-11-01 02:51 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `E2E (kotlin-android)` → `Run e2e tests`
- Likely cause: [kotlin-android:e2e] ERROR task failed

<details><summary>End of the job log</summary>

```
[kotlin_android] * Try:
[kotlin_android] > Run with --scan to get full insights from a Build Scan (powered by Develocity).
[kotlin_android]
[kotlin_android] BUILD FAILED in 21m 13s
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
