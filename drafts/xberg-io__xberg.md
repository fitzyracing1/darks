<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9585 · **Generated:** 2026-11-14T18:37:03.336Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI Lint", "CI Scripts")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43588584512 — dark (conclusion: `failure`), 2026-11-14 11:08 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)` → `Run clippy`
- Likely cause: this 'let...else' may be rewritten with the '?' operator (crates/xberg/src/pdf/structure/assembly.rs:1260)

<details><summary>End of the job log</summary>

```
    Checking serde-wasm-bindgen v0.6.5
   Compiling swift-bridge-macro v0.1.59
   Compiling wasm-bindgen-test-macro v0.3.80
    Checking wasm-bindgen-test-shared v0.2.130
    Checking swift-bridge v0.1.59
    Checking wasm-bindgen-test v0.3.80
error: this `let...else` may be rewritten with the `?` operator
##[error]    --> crates/xberg/src/pdf/structure/assembly.rs:1260:9
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43605676558 — dark (conclusion: `failure`), 2026-11-14 14:35 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: [alef:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
  /home/runner/work/xberg/xberg/packages/csharp/src/Xberg/ExtractedDocument.cs
  /home/runner/work/xberg/xberg/packages/dart/rust/src/lib.rs
  /home/runner/work/xberg/xberg/packages/go/binding.go
  /home/runner/work/xberg/xberg/packages/kotlin-android/src/main/kotlin/io/xberg/ExtractedDocument.kt
  /home/runner/work/xberg/xberg/packages/swift/README.md
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43605676493 — dark (conclusion: `failure`), 2026-11-14 14:35 UTC
- Dark since: 2026-11-14 14:35 UTC (first run of the current streak)
- Job / step: `Shell formatting` → `Check shell formatting`
- Likely cause: [lint:shell] ERROR task failed

<details><summary>End of the job log</summary>

```
 	xberg_assert_file "$XBERG_INSTALL/xberg" 'existing executable'
 }
-
 @test "CLI installer should fall back when the GNU executable cannot start" {
 	export CLI_ARCH=amd64 CLI_TARGET=x86_64-unknown-linux-musl
 	xberg_stub ldd 'printf "GNU libc 2.36\n"'
[lint:shell] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
