<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9590 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI Lint", "CI E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43758280305 — dark (conclusion: `failure`), 2026-11-15 20:28 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Clippy Windows ORT surface`
- Likely cause: called '.err().expect()' on a 'Result' value (crates/xberg/src/extractors/pdf/ocr/retained_read_metadata_tests.rs:318)

<details><summary>End of the job log</summary>

```
    Checking serial_test v4.0.1
    Checking wiremock v0.6.5
    Checking tokio-test v0.4.6
    Checking qrcode v0.14.1
    Checking jpeg-encoder v0.7.1
    Checking dotenvy v0.15.7
error: called `.err().expect()` on a `Result` value
##[error]   --> crates\xberg\src\extractors\pdf\ocr\retained_read_metadata_tests.rs:318:10
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43758280508 — dark (conclusion: `failure`), 2026-11-15 20:28 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
      of which 324 are excluded from those headings by `[crates.verify].ignore_ephemeral` (declared ephemeral and never committed; still counted in the 347 above)
    15 declared user-owned by `[workspace.ownership] user_owned` in alef.toml: not written, stamped or content-checked. Remove the pattern to hand a path back to alef (-vv lists them)
  tree walk: 9847 file(s) opened, 884 never examined (name and extension outside the ownership walk's scan set, or not readable as text)
Generated files drifted from a fresh render detected (this run's backends would emit different content than the owned bytes on disk -- rerun the owning stage, e.g. `alef generate`/`alef all`/`alef docs`, to refresh it):
  /home/runner/work/xberg/xberg/docs-site/src/content/docs/reference/api-rust.md
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43758280297 — dark (conclusion: `failure`), 2026-11-15 20:28 UTC
- Dark since: 2026-11-15 06:52 UTC (first run of the current streak)
- Job / step: `E2E (swift)` → `Run e2e tests (swift, instrumented)`
- Likely cause: [swift:e2e] ERROR task failed

<details><summary>End of the job log</summary>

```
ERROR before hook failed for swift: before hook failed for swift: bash scripts/setup-swift-bridge.sh: Command failed: bash scripts/setup-swift-bridge.sh
--- stderr ---
cat: target/release/build/xberg-swift/54dde98f024baff3/out/SwiftBridgeCore.h: No such file or directory
cat: target/release/build/xberg-swift/54dde98f024baff3/out/xberg-swift/xberg-swift.h: No such file or directory
--- stdout ---
Using swift-bridge output from: target/release/build/xberg-swift/54dde98f024baff3/out
[swift:e2e] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
