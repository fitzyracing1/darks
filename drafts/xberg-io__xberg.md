<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9540 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("CI Rust", "CI Integrations", "CI Lint", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309773 — dark (conclusion: `cancelled`), 2026-11-05 11:58 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run bash scripts/ci/rust/run-ocr-orientation-tests.sh`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   4: ocr_auto_rotate::implicit_upright_pdf_ocr_preserves_text_confidence_and_geometry::{closure#0}
   5: <ocr_auto_rotate::implicit_upright_pdf_ocr_preserves_text_confidence_and_geometry::{closure#0} as core::ops::function::FnOnce<()>>::call_once
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    implicit_upright_pdf_ocr_preserves_text_confidence_and_geometry
test result: FAILED. 5 passed; 1 failed; 0 ignored; 0 measured; 2 filtered out; finished in 114.99s
error: test failed, to rerun pass `-p xberg --test ocr_auto_rotate`
##[error]Process completed with exit code 101.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309771 — dark (conclusion: `cancelled`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling strum v0.28.0
   Compiling strum v0.27.2
   Compiling tokenizers v0.21.4
   Compiling gcp_auth v0.12.7
   Compiling pyo3-macros v0.30.1
   Compiling utoipa-gen v6.0.1
   Compiling unparser-shared v0.12.0
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023310391 — dark (conclusion: `cancelled`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Plugin bundle freshness`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309662 — dark (conclusion: `cancelled`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_CONFIG_H -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-d22eae7ca6f12981/out/third_party/tess…
[xberg-tesseract 1.4.0] [  3%] Building CXX object CMakeFiles/libtesseract.dir/src/arch/intsimdmatrixneon.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_CONFIG_H -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-d22eae7ca6f12981/out/third_party/tess…
[xberg-tesseract 1.4.0] [  3%] Building CXX object CMakeFiles/libtesseract.dir/src/api/altorenderer.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_CONFIG_H -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-d22eae7ca6f12981/out/third_party/tess…
[xberg-tesseract 1.4.0] [  4%] Building CXX object CMakeFiles/libtesseract.dir/src/api/baseapi.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_CONFIG_H -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-d22eae7ca6f12981/out/third_party/tess…
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309722 — dark (conclusion: `cancelled`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-05 11:58 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42023309756 — dark (conclusion: `failure`), 2026-11-05 11:58 UTC
- Dark since: 2026-11-05 11:58 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding` → `Verify selected C ABI, decoder and actual Rust floor wrapper`
- Likely cause: [rust:check:libheif-runtime] ERROR task failed

<details><summary>End of the job log</summary>

```
    result = func(*args)
             ^^^^^^^^^^^
  File "/usr/lib/python3.12/urllib/request.py", line 639, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 504: Gateway Time-out
Finished in 11.40s
[rust:check:libheif-runtime] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
