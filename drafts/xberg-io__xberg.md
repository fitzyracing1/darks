<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9612 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Lint", "CI E2E", "CI Rust", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45123753433 — dark (conclusion: `cancelled`), 2026-11-23 06:23 UTC
- Dark since: 2026-11-18 18:37 UTC (first run of the current streak)
- Job / step: `Alef readme/docs paths resolve`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823797 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: The run was canceled by @Goldziher.

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45117487180 — dark (conclusion: `cancelled`), 2026-11-23 05:23 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Narrow feature leg (wasm-target, wasm32)` → `cargo check -p xberg --no-default-features --features wasm-target --target wasm32-unknown-unknown`
- Likely cause: cannot find 'model_download' in the crate root (crates/xberg/src/candidate_models/mod.rs:176)

<details><summary>End of the job log</summary>

```
warning: xberg-tesseract@1.5.0: Patch command failed, will apply programmatic fixups.
warning: xberg-tesseract@1.5.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.5.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.5.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: xberg-tesseract@1.5.0: wasm32-wasi-clang: warning: argument '--target=wasm32-wasi' is deprecated, use --target=wasm32-wasip1 instead [-Wdeprecated]
warning: ignoring -C extra-filename flag due to -o flag
error[E0433]: cannot find `model_download` in the crate root
##[error]   --> crates/xberg/src/candidate_models/mod.rs:176:12
```

</details>

### CI Docker (`.github/workflows/ci-docker.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45117487074 — dark (conclusion: `cancelled`), 2026-11-23 05:23 UTC
- Dark since: 2026-11-20 07:25 UTC (first run of the current streak)
- Job / step: `Docker (full)` → `Build Docker image`
- Likely cause: Canceling since a higher priority waiting request for ci-docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
#38 1522.7    Compiling lru v0.19.1
#38 1522.8    Compiling xberg-cli v1.5.0 (/build/crates/xberg-cli)
#38 1522.9    Compiling jotdown v0.10.0
#38 1524.6    Compiling similar v3.2.1
#38 1532.8    Compiling minijinja v3.1.0
#38 1542.5    Compiling org v0.3.1
#38 2192.1    Compiling clap_complete v4.6.12
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45060823734 — dark (conclusion: `cancelled`), 2026-11-22 19:27 UTC
- Dark since: 2026-11-21 14:13 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
[ 70%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_dec.cc.o
[ 71%] Building CXX object libheif/CMakeFiles/heif.dir/codecs/avc_enc.cc.o
[ 72%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/mask_image.cc.o
[ 73%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/image_item.cc.o
[ 74%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/grid.cc.o
[ 75%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/overlay.cc.o
[ 76%] Building CXX object libheif/CMakeFiles/heif.dir/image-items/iden.cc.o
##[error]The operation was canceled.
```

</details>

### CI Focused PR (`.github/workflows/ci-focused-pr.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45117487071 — dark (conclusion: `failure`), 2026-11-23 05:23 UTC
- Dark since: 2026-11-22 18:29 UTC (first run of the current streak)
- Job / step: `Shipped license graphs` → `Check the third-party notice bundle is current`
- Likely cause: /home/runner/work/xberg/xberg/THIRD_PARTY_LICENSES.md is stale at line 14:

<details><summary>End of the job log</summary>

```
ok   xberg-swift (default): 0 errors, 66 warnings, 870 licenses accepted
ok   xberg-dart (default): 0 errors, 71 warnings, 870 licenses accepted
ok   xberg_nif (default): 0 errors, 65 warnings, 841 licenses accepted
ok   xberg-rb (default): 0 errors, 67 warnings, 851 licenses accepted
ok   xberg-cli --features mcp,mcp-http,api (windows no-heic): 0 errors, 59 warnings, 698 licenses accepted
checked 13 graphs; 14 license exceptions, each matched by at least one graph
[notices:check] $ python3 scripts/ci/generate-notices.py --check
##[error]/home/runner/work/xberg/xberg/THIRD_PARTY_LICENSES.md is stale at line 14:
```

</details>

### CI NLI Advisories (`.github/workflows/ci-nli-advisories.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/45121504863 — dark (conclusion: `failure`), 2026-11-23 06:02 UTC
- Dark since: 2026-11-23 06:02 UTC (first run of the current streak)
- Job / step: `audit` → `Check current advisories against the leaf lock`
- Likely cause: [nli:audit] ERROR task failed

<details><summary>End of the job log</summary>

```
         ├── xet-core-structures v1.8.1
         │   ├── hf-xet v1.8.1 (*)
         │   ├── xet-client v1.8.1 (*)
         │   └── xet-data v1.8.1 (*)
         └── xet-data v1.8.1 (*)
advisories FAILED, bans ok, licenses ok, sources ok
[nli:audit] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
