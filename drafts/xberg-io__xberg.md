<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9558 · **Generated:** 2026-11-07T06:41:09.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42332044318 — dark (conclusion: `failure`), 2026-11-07 03:01 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size    Used   Avail Capacity iused ifree %iused  Mounted on
/dev/disk2s5   320Gi   282Gi    16Gi    95%    2.1M  168M    1%   /System/Volumes/Data
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 6372.77s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42332044292 — dark (conclusion: `failure`), 2026-11-07 03:01 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `E2E (swift)` → `Run e2e tests (swift, instrumented)`
- Likely cause: Compiling swift-bridge v0.1.59

<details><summary>End of the job log</summary>

```
   Compiling org v0.3.1
   Compiling jotdown v0.10.0
   Compiling similar v3.2.1
   Compiling minijinja v3.0.5
   Compiling xberg-swift v1.4.0 (/home/runner/work/xberg/xberg/packages/swift/rust)
   Compiling swift-bridge-macro v0.1.59
   Compiling swift-bridge v0.1.59
##[error]Process completed with exit code 143.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
