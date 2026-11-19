<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9603 · **Generated:** 2026-11-19T06:47:13.117Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("CI Rust", "CI E2E", "CI Focused PR", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951753 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Chunking scaling guard`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951822 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Install system dependencies`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
No VM guests are running outdated hypervisor (qemu) binaries on this host.
✓ All packages installed successfully
✓ PHP already active: PHP 8.3.6 (cli) (built: Oct 19 2026 15:16:58) (NTS)
Removing apt's libheif to prevent shadowing...
Reading package lists...
Building dependency tree...
Reading state information...
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951725 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Focused pdf-table-paint` → `Run exact regression tests`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
   Compiling memmap2 v0.9.12
   Compiling xberg-child-test v0.0.0 (/home/runner/work/xberg/xberg/crates/xberg/tests/support/child-process)
   Compiling hex v0.4.3
   Compiling jotdown v0.10.0
   Compiling jpeg-encoder v0.7.1
   Compiling pastey v0.2.3
   Compiling dotenvy v0.15.7
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459952303 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions`
- Likely cause: The run was canceled by @Goldziher.

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951734 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-18 22:06 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
[ 68%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_dec.cc.o
[ 69%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_enc.cc.o
[ 70%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/mask_image.cc.o
[ 71%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/image_item.cc.o
[ 72%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/grid.cc.o
[ 73%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/overlay.cc.o
[ 74%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/iden.cc.o
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951723 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `Android cargo check (arm64-v8a)` → `cargo ndk check xberg-dart`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
    Checking base64 v0.22.1
    Checking quick-error v2.0.1
    Checking tract-data v0.23.10
    Checking zune-jpeg v0.5.15
    Checking transpose v0.2.3
    Checking num-rational v0.4.2
    Checking sharded-slab v0.1.7
##[error]The operation was canceled.
```

</details>

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459951740 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Run the shell contract tests`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
ok 459 macos_heif should_extract_a_verified_download_before_running_cmake
ok 460 macos_heif should_reject_an_invalid_parallel_build_limit_before_downloading
ok 461 macos_heif should_pass_an_explicit_one_job_limit_to_the_actual_build_function
ok 462 macos_heif rejects an unknown profile before downloading
ok 463 macos_heif encoder profile requires arm64 at the 15.0 floor
ok 464 macos_heif encoder profile rejects a populated prefix from another profile
ok 465 macos_heif encoder profile builds both encoders and stages pinned notices
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459952392 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
