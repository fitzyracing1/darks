<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9460 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40912286725 — dark (conclusion: `cancelled`), 2026-10-29 16:30 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 10%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/output.cpp.o
[ 10%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/pageiterator.cpp.o
[ 11%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/pagesegmain.cpp.o
[ 11%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/pagewalk.cpp.o
[ 12%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/par_control.cpp.o
[ 12%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/paragraphs.cpp.o
[ 13%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/paramsd.cpp.o
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40916742483 — dark (conclusion: `cancelled`), 2026-10-29 16:58 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40916742292 — dark (conclusion: `cancelled`), 2026-10-29 16:58 UTC
- Dark since: 2026-10-28 14:02 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40916743414 — dark (conclusion: `cancelled`), 2026-10-29 16:58 UTC
- Dark since: 2026-10-29 15:28 UTC (first run of the current streak)
- Job / step: `Toolchain baseline`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/40917305448 — dark (conclusion: `failure`), 2026-10-29 17:01 UTC
- Dark since: 2026-10-29 16:18 UTC (first run of the current streak)
- Job / step: `Android cargo check (x86_64)` → `Run xberg-io/actions/setup-android-ndk@v1`
- Likely cause: response: Parts { status: 503, version: HTTP/1.1, headers: {"content-length": "212", "content-type": "application/xml", "server": "Microsoft-HTTPAPI/2.0", "x-ms-request-id": "b8301af6-001e-00c6-15cb-671120000000", "x-ms…

<details><summary>End of the job log</summary>

```
  16: <unknown>
  17: <unknown>
  18: <unknown>
  19: <unknown>
  20: <unknown>
  21: <unknown>
Run with SCCACHE_LOG=debug SCCACHE_NO_DAEMON=1 to get more information
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
