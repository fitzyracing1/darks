<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9451 · **Generated:** 2026-10-27T07:00:32.421Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40453201625 — dark (conclusion: `cancelled`), 2026-10-27 05:04 UTC
- Dark since: 2026-10-24 07:14 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness` → `Verify generated e2e suites are current`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
 INFO Hiding binding-excluded fields: BrowserConfig.private_pipe (alef(skip))
 INFO Hiding binding-excluded fields: CrawlConfig.dispatch (alef(skip)), CrawlConfig.credential_scope (doc(hidden)), CrawlConfig.cookie_store (doc(hidden)), CrawlConfig.proxy_provider (dyn-trait-object)
ERROR - [lossy_sanitized_surface] item `function pages_for_call_with_security_limits` function signature contains a sanitized parameter or return type
- [lossy_sanitized_surface] item `function pages_for_call_with_security_limits parameter mode` parameter type `StructuredCallMode` was sanitized to `String`
- [lossy_sanitized_surface] item `function pages_for_call_with_security_limits return` return type was sanitized to `Vec<String>`
- [backend_stub_path] item `function pages_for_call_with_security_limits` function signature was sanitized and may require backend stub generation
task: Failed to run task "e2e:verify": exit status 1
##[error]exit status 1
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40452492230 — dark (conclusion: `cancelled`), 2026-10-27 04:56 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=default,std CARGO_CFG_PANIC=unwind CARGO_CFG_TARGET_ABI='' CARGO_CFG_TARGET_ARCH=x86_64 CARGO_CFG_TARGET_EN…
[httparse 1.10.1] cargo:rustc-cfg=httparse_simd_neon_intrinsics
[httparse 1.10.1] cargo:rustc-cfg=httparse_simd
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=default,std CARGO_CFG_PANIC=unwind CARGO_CFG_TARGET_ABI='' CARGO_CFG_TARGET_ARCH=x86_64 CARGO_CFG_TARGET_EN…
[httparse 1.10.1] cargo:rustc-cfg=httparse_simd_neon_intrinsics
[httparse 1.10.1] cargo:rustc-cfg=httparse_simd
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CFG_FEATURE=alloc,default,dev_urandom_fallback CARGO_CFG_PANIC=unwind CARGO_CFG_TARGET_ABI='' CARGO_CFG_TARGET_ARCH=x86…
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40452492215 — dark (conclusion: `cancelled`), 2026-10-27 04:56 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (wasm-target, wasm32)` → `cargo check -p xberg --no-default-features --features wasm-target --target wasm32-unknown-unknown`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
WASI_SYSROOT set to: /opt/hostedtoolcache/wasi-sdk/share/wasi-sysroot
##[end-action id=__xberg-io_actions_2.__run_3;outcome=success;conclusion=success;duration_ms=219]
    Updating crates.io index
   Compiling xberg-tesseract v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-tesseract)
   Compiling xberg v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg)
    Checking xberg-native-pdf v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-native-pdf)
    Checking xberg-gliner v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-gliner)
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40452492234 — dark (conclusion: `cancelled`), 2026-10-27 04:56 UTC
- Dark since: 2026-10-26 19:36 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
   Compiling xet-runtime v1.7.0
   Compiling xet-core-structures v1.7.0
   Compiling reqwest-middleware v0.5.2
   Compiling xet-client v1.7.0
   Compiling xet-data v1.7.0
   Compiling hf-xet v1.7.0
   Compiling hf-hub v1.0.0
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40452492120 — dark (conclusion: `cancelled`), 2026-10-27 04:56 UTC
- Dark since: 2026-10-26 19:57 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)` → `cargo check xberg-dart`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
    Checking roxmltree v0.20.0
    Checking num-cmp v0.1.0
    Checking hex v0.4.3
   Compiling build-target v0.4.0
    Checking streaming-iterator v0.1.9
    Checking daachorse v3.0.3
    Checking rangemap v1.8.0
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40423872239 — dark (conclusion: `cancelled`), 2026-10-27 00:03 UTC
- Dark since: 2026-10-27 00:03 UTC (first run of the current streak)
- Job / step: `Docker (cli)`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
