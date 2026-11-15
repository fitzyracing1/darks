<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9590 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI Lint", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43726033552 — dark (conclusion: `failure`), 2026-11-15 14:44 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run clippy`
- Likely cause: this 'if' guard returns a bool literal and is followed by another (crates/xberg-native-pdf/src/decoders/flate.rs:126)

<details><summary>End of the job log</summary>

```
    Checking mio v1.2.5
    Checking errno v0.3.15
    Checking powerfmt v0.2.1
    Checking deranged v0.5.9
   Compiling zstd-safe v8.3.0
    Checking time v0.3.55
error: this `if` guard returns a bool literal and is followed by another
##[error]   --> crates/xberg-native-pdf/src/decoders/flate.rs:126:5
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43726033946 — dark (conclusion: `failure`), 2026-11-15 14:44 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
Crates whose generation inputs (Rust sources or alef.toml) changed since their last successful `alef generate`/`alef all` run (rerun to see which files, if any, actually changed):
  xberg
Generated files drifted from a fresh render detected (this run's backends would emit different content than the owned bytes on disk -- rerun the owning stage, e.g. `alef generate`/`alef all`/`alef docs`, to refresh it):
  /home/runner/work/xberg/xberg/crates/xberg-ffi/cbindgen.toml
  /home/runner/work/xberg/xberg/docs-site/src/content/docs/reference/api-rust.md
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43726033582 — dark (conclusion: `failure`), 2026-11-15 14:44 UTC
- Dark since: 2026-11-15 06:52 UTC (first run of the current streak)
- Job / step: `E2E (swift)` → `Run e2e tests (swift, instrumented)`
- Likely cause: [swift:e2e] ERROR task failed

<details><summary>End of the job log</summary>

```
 INFO Running: bash scripts/setup-swift-bridge.sh
ERROR: Could not find swift-bridge build output in target/release/build/
ERROR before hook failed for swift: before hook failed for swift: bash scripts/setup-swift-bridge.sh: Command failed: bash scripts/setup-swift-bridge.sh
--- stderr ---
--- stdout ---
ERROR: Could not find swift-bridge build output in target/release/build/
[swift:e2e] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
