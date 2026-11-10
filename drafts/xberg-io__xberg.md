<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9568 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42768552193 — dark (conclusion: `cancelled`), 2026-11-10 06:26 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42768552406 — dark (conclusion: `cancelled`), 2026-11-10 06:26 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[  4%] Building CXX object CMakeFiles/libtesseract.dir/src/api/renderer.cpp.o
[  4%] Building CXX object CMakeFiles/libtesseract.dir/src/api/wordstrboxrenderer.cpp.o
[  5%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/adaptions.cpp.o
[  5%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/applybox.cpp.o
[  6%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/control.cpp.o
[  6%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/docqual.cpp.o
[  7%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/equationdetect.cpp.o
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42768552458 — dark (conclusion: `cancelled`), 2026-11-10 06:26 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Setup Rust`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Need to get 3048 kB of archives.
After this operation, 17.8 MB of additional disk space will be used.
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Ign:2 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotobuf32t64 amd64 3.21.12-8.2ubuntu0.4
Ign:3 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotoc32t64 amd64 3.21.12-8.2ubuntu0.4
Get:4 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libprotobuf-dev amd64 3.21.12-8.2ubuntu0.4 [1413 kB]
Ign:5 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 protobuf-compiler amd64 3.21.12-8.2ubuntu0.4
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42768552919 — dark (conclusion: `cancelled`), 2026-11-10 06:26 UTC
- Dark since: 2026-11-10 05:02 UTC (first run of the current streak)
- Job / step: `Benchmark script regressions` → `Test the PP-DocLayoutV3 cross-runtime comparison`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Installed 19 packages in 15ms
.......                                                                  [100%]
7 passed in 1.59s
[test:classic-ocr-cache:harness] $ uv run --frozen --only-dev python -m pytest -q scripts/test_classic_ocr_cache_acceptance.py
.............                                                            [100%]
13 passed in 0.14s
[test:v3-cross-runtime] $ bash scripts/ci/test-v3-cross-runtime.sh
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42768552186 — dark (conclusion: `cancelled`), 2026-11-10 06:26 UTC
- Dark since: 2026-11-10 06:26 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)` → `cargo ndk check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    Checking nu-ansi-term v0.50.3
    Checking byteorder-lite v0.1.0
    Checking fax v0.2.7
    Checking bit-vec v0.10.1
    Checking outref v0.5.2
    Checking bit-set v0.11.1
    Checking tiff v0.11.3
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42768552616 — dark (conclusion: `cancelled`), 2026-11-10 06:26 UTC
- Dark since: 2026-11-10 06:26 UTC (first run of the current streak)
- Job / step: `docs / Build` → `Build site`
- Likely cause: Canceling since a higher priority waiting request for ci-docs-refs/heads/main exists

<details><summary>End of the job log</summary>

```
06:28:15   ├─ /404.html06:28:15 [WARN] [content] Entry docs → 404 was not found.
 (+15ms)
06:28:15   ├─ /cli/index.html (+1ms)
06:28:15   ├─ /concepts/index.html (+1ms)
06:28:15   ├─ /getting-started/index.html (+1ms)
06:28:15   ├─ /guides/index.html (+1ms)
06:28:15   ├─ /llms-full.txt (+40.96s)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
