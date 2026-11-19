<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9604 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI E2E", "CI Lint", +3 more)
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

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44481046733 — dark (conclusion: `failure`), 2026-11-19 07:37 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Install poly`
- Likely cause: unknown field 'ref', expected one of 'id', 'source', 'revision', 'path'

<details><summary>End of the job log</summary>

```
##[end-action id=__Goldziher_polylint.components-cache;outcome=success;conclusion=success;duration_ms=1086]
##[start-action display=Run set -euo pipefail;id=__Goldziher_polylint.__run_4]
poly components: parsing /home/runner/work/xberg/xberg/poly.lock: TOML parse error at line 7, column 1
  |
7 | ref = "v0"
  | ^^^
unknown field `ref`, expected one of `id`, `source`, `revision`, `path`
##[error]Process completed with exit code 2.
```

</details>

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

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44459952392 — dark (conclusion: `cancelled`), 2026-11-19 04:40 UTC
- Dark since: 2026-11-19 04:40 UTC (first run of the current streak)
- Job / step: `docs / Build`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
