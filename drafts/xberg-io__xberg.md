<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9584 · **Generated:** 2026-11-14T06:41:55.262Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43563647462 — dark (conclusion: `cancelled`), 2026-11-14 05:53 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)` → `Verify NLI qualification contracts and runtime`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling tokenizers v0.23.2
   Compiling serde_toon_format v0.2.0
   Compiling parking_lot v0.13.0
   Compiling rmp-serde v1.3.1
   Compiling ort v2.0.0-rc.15
   Compiling infer v0.22.0
   Compiling fs2 v0.4.3
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43563647432 — dark (conclusion: `cancelled`), 2026-11-14 05:53 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=typenum CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/typenum-1.20.1 …
    compile time. It currently supports bits, unsigned integers, and signed
    integers. It also provides a type-level array of type-level numbers, but its
    implementation is incomplete.' CARGO_PKG_HOMEPAGE='' CARGO_PKG_LICENSE='MIT OR Apache-2.0' CARGO_PKG_LICENSE_FILE='' CARGO_PKG_NAME=typenum CARGO_PKG_README=README.md CARGO_PKG_REPOSITORY='https://github.com/paholg/…
   Compiling compression-codecs v0.4.47
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=compression_codecs CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/comp…
' CARGO_PKG_HOMEPAGE='' CARGO_PKG_LICENSE='MIT OR Apache-2.0' CARGO_PKG_LICENSE_FILE='' CARGO_PKG_NAME=compression-codecs CARGO_PKG_README=README.md CARGO_PKG_REPOSITORY='https://github.com/Nullus157/async-compression' …
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43563647377 — dark (conclusion: `cancelled`), 2026-11-14 05:53 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 12%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/paramsd.cpp.o
[ 13%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/pgedit.cpp.o
[ 13%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/recogtraining.cpp.o
[ 14%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/reject.cpp.o
[ 14%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/resultiterator.cpp.o
[ 15%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/superscript.cpp.o
[ 15%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/tessbox.cpp.o
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43563647619 — dark (conclusion: `cancelled`), 2026-11-14 05:53 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Alef-generated bindings freshness` → `Verify alef-generated bindings are current`
- Likely cause: run cancelled in job "Alef-generated bindings freshness"

<details><summary>End of the job log</summary>

```
  /home/runner/work/xberg/xberg/docs-site/src/content/docs/reference/types.md
  /home/runner/work/xberg/xberg/packages/csharp/src/Xberg/ExtractedDocument.cs
  /home/runner/work/xberg/xberg/packages/dart/rust/src/lib.rs
  /home/runner/work/xberg/xberg/packages/go/binding.go
  /home/runner/work/xberg/xberg/packages/kotlin-android/src/main/kotlin/io/xberg/ExtractedDocument.kt
ERROR generated bindings, versions, or snippet coverage are out of date
[alef:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43563647334 — dark (conclusion: `cancelled`), 2026-11-14 05:53 UTC
- Dark since: 2026-11-13 15:36 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)` → `cargo check xberg-swift`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking sceptre v0.10.1
   Compiling swift-bridge-build v0.1.59
    Checking outlook-pst v1.2.0
   Compiling xberg-swift v1.4.0 (/Users/runner/work/xberg/xberg/packages/swift/rust)
   Compiling swift-bridge-macro v0.1.59
    Checking swift-bridge v0.1.59
   Compiling xberg v1.4.0 (/Users/runner/work/xberg/xberg/crates/xberg)
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

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43563647309 — dark (conclusion: `cancelled`), 2026-11-14 05:53 UTC
- Dark since: 2026-11-14 04:41 UTC (first run of the current streak)
- Job / step: `Focused pdf-ocr`
- Likely cause: Canceling since a higher priority waiting request for ci-focused-pr-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
