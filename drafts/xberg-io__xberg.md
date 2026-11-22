<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9609 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45019387358 — dark (conclusion: `cancelled`), 2026-11-22 11:51 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 89%] Building CXX object libheif/CMakeFiles/heif.dir/sequences/chunk.cc.o
[ 90%] Building CXX object libheif/CMakeFiles/heif.dir/sequences/track.cc.o
[ 91%] Building CXX object libheif/CMakeFiles/heif.dir/sequences/track_visual.cc.o
[ 92%] Building CXX object libheif/CMakeFiles/heif.dir/sequences/track_metadata.cc.o
[ 93%] Building CXX object libheif/CMakeFiles/heif.dir/plugins_unix.cc.o
[ 94%] Building CXX object libheif/CMakeFiles/heif.dir/plugins/decoder_libde265.cc.o
[ 95%] Building CXX object libheif/CMakeFiles/heif.dir/plugins/decoder_aom.cc.o
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45019386913 — dark (conclusion: `cancelled`), 2026-11-22 11:51 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/sysml/queries/indents.scm
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/sysml/queries/folds.scm
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/systemtap/queries/highlights.scm
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/systemtap/queries/locals.scm
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/systemverilog/queries/highlights.scm
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/t32/queries/highlights.scm
[tree-sitter-language-pack 1.25.2] cargo:rerun-if-changed=/home/runner/work/xberg/xberg/target/release/build/tree-sitter-language-pack/17f8fe3ed8f482ed/out/_parsers/parsers/t32/queries/injections.scm
##[error]The operation was canceled.
```

</details>

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45019386973 — dark (conclusion: `cancelled`), 2026-11-22 11:51 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Crate package verification` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[  9%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen1.c.o
[  9%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen2.c.o
[ 10%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen3.c.o
[ 10%] Building C object src/CMakeFiles/leptonica.dir/bootnumgen4.c.o
[ 11%] Building C object src/CMakeFiles/leptonica.dir/boxbasic.c.o
[ 12%] Building C object src/CMakeFiles/leptonica.dir/boxfunc1.c.o
[ 12%] Building C object src/CMakeFiles/leptonica.dir/boxfunc2.c.o
##[error]The operation was canceled.
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45014461112 — dark (conclusion: `failure`), 2026-11-22 10:51 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Run API contract tests with schemathesis`
- Likely cause: Failed to establish a new connection: [Errno 111] Connection refused

<details><summary>End of the job log</summary>

```
━━━━━━━━━━━━━━━━━━━━
 ❌  Failed to load specification from http://localhost:8000/openapi.json after
 0.01s
 Schema Loading Error
 Connection failed
     Failed to establish a new connection: [Errno 111] Connection refused
Tip: Use `--wait-for-schema=NUM` to wait up to NUM seconds for schema availability.
##[error]Process completed with exit code 2.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45019386854 — dark (conclusion: `cancelled`), 2026-11-22 11:51 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling atoi_simd v0.18.1
   Compiling html-to-markdown-rs v3.22.2
   Compiling g2p v1.2.2
   Compiling wyz v0.5.1
   Compiling memchr-n v0.1.10
   Compiling v_escape-base v1.0.0
   Compiling candle-transformers v0.11.1
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45019386923 — dark (conclusion: `cancelled`), 2026-11-22 11:51 UTC
- Dark since: 2026-11-21 15:33 UTC (first run of the current streak)
- Job / step: `Focused nli` → `Run exact regression tests`
- Likely cause: Canceling since a higher priority waiting request for ci-focused-pr-refs/heads/main-regressions exists

<details><summary>End of the job log</summary>

```
   Compiling reqwest-middleware v0.5.2
   Compiling xet-core-structures v1.8.1
   Compiling xet-client v1.8.1
   Compiling xet-data v1.8.1
   Compiling hf-xet v1.8.1
   Compiling hf-hub v1.0.0
   Compiling nli-qualification v0.0.0 (/home/runner/work/xberg/xberg/tools/benchmark-harness/nli_qualification)
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45020500599 — dark (conclusion: `failure`), 2026-11-22 12:05 UTC
- Dark since: 2026-11-22 10:51 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)` → `cargo check xberg-dart`
- Likely cause: unused variable: 'stored_scan' (crates/xberg/src/extractors/pdf/ocr/pipeline/page_ocr/finish.rs:26)

<details><summary>End of the job log</summary>

```
   Compiling delegate-attr v0.3.1
    Checking fs2 v0.4.3
    Checking similar v3.2.1
    Checking jotdown v0.10.0
    Checking org v0.3.1
   Compiling xberg-dart v1.5.0 (/Users/runner/work/xberg/xberg/packages/dart/rust)
error: unused variable: `stored_scan`
##[error]  --> crates/xberg/src/extractors/pdf/ocr/pipeline/page_ocr/finish.rs:26:13
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
