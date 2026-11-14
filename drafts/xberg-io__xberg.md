<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9583 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43527998280 — dark (conclusion: `cancelled`), 2026-11-13 23:33 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run ./.github/actions/qualify-ocr-orientation`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling tract-linalg v0.23.10
   Compiling tract-core v0.23.10
   Compiling tract-nnef v0.23.10
   Compiling tract-hir v0.23.10
   Compiling tract-extra v0.23.10
   Compiling tract-onnx-opl v0.23.10
   Compiling tract-onnx v0.23.10
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43526162376 — dark (conclusion: `cancelled`), 2026-11-13 23:18 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=sevenz_rust2 CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/sevenz-rus…
   Compiling outlook-pst v1.2.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=outlook_pst CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/outlook-pst…
   Compiling rake v0.3.6
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=rake CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/rake-0.3.6 CARGO_M…
   Compiling lru v0.19.0
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=lru CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/lru-0.19.0 CARGO_MA…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43525166340 — dark (conclusion: `cancelled`), 2026-11-13 23:11 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Setup ONNX Runtime`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
##[start-action display=Cache libheif + boost + zlib vcpkg (Windows);id=__self.cache-libheif-windows]
##[end-action id=__self.cache-libheif-windows;outcome=skipped;conclusion=skipped;duration_ms=0]
##[start-action display=Install dependencies (Windows);id=__self.__run_3]
##[end-action id=__self.__run_3;outcome=skipped;conclusion=skipped;duration_ms=0]
Prepare all required actions
Getting action download info
##[start-action display=Cache ONNX Runtime;id=__self_2.cache-onnx]
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43533160564 — dark (conclusion: `cancelled`), 2026-11-14 00:17 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Submodule gitlinks reachable`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43526162300 — dark (conclusion: `cancelled`), 2026-11-13 23:18 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)` → `cargo check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking alloc-stdlib v0.3.0
    Checking idna v1.1.0
    Checking chacha20 v0.10.2
   Compiling generic-array v0.14.7
   Compiling tiny-keccak v2.0.2
   Compiling heck v0.5.0
    Checking subtle v2.6.1
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43454302041 — dark (conclusion: `cancelled`), 2026-11-13 15:36 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `Docker (cli)` → `Fetch test_documents fixtures`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
fetched: fdcafeff1f7c21bc0ac0164c4a5c2f1463397f21ffdfe468e3b9560b9625324e
fetched: fe2befea29c1d04fb3b7569c777d604ea6e987f583dcaff4580edb75176d6517
fetched: ff71364af261de74ec7eac344c3fa23047ce4235526b3168609073b6a5a3da4f
fetched: ff5490d3ab2a13ff36e8e05cd5696970051d7ccbfd4a05d355c72fb1d0c153a7
fetched: fd68d213ffffdbf730d9fe76df362598f55338ff05aa289f4f0b3b9438587d07
fetched: fd3dd2ab72ab39969442736f778ffc89e279016a29ced1f9692d449aeb834877
fetched: fffa8137159d247dcf4984a13aba12451bcc7402bbe0bfbc7d93ff6d43689593
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43533160122 — dark (conclusion: `cancelled`), 2026-11-14 00:17 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-scripts-refs/heads/main exists

<details><summary>End of the job log</summary>

```
ok 412 local native staging should reject unsupported systems before creating package directories
ok 413 local native staging should reject missing built libraries before creating package directories
ok 414 local native staging should propagate failed artifact copies in both package layouts
ok 415 macOS Elixir archive contracts run the complete portable unittest suite
ok 416 macos_heif should_rebuild_a_prefix_without_a_version_receipt
ok 417 macos_heif should_reject_an_old_receipt_before_reusing_a_prefix
ok 418 macos_heif should_reject_a_current_receipt_with_stale_pkg_config_versions
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
