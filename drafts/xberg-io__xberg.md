<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9570 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42809212912 — dark (conclusion: `cancelled`), 2026-11-10 11:39 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Downloading https://github.com/StrawberryPerl/Perl-Dist-Strawberry/releases/download/SP_54221_64bit/strawberry-perl-5.42.2.1-64bit-portable.zip -> strawberry-perl-5.42.2.1-64bit-portable.zip
Successfully downloaded strawberry-perl-5.42.2.1-64bit-portable.zip
Downloading nasm-3.01-win64.zip, trying https://www.nasm.us/pub/nasm/releasebuilds/3.01/win64/nasm-3.01-win64.zip
Successfully downloaded nasm-3.01-win64.zip
-- Configuring x64-windows-static-md
-- Building x64-windows-static-md-dbg
-- Building x64-windows-static-md-rel
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42809213038 — dark (conclusion: `cancelled`), 2026-11-10 11:39 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [ 18%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/recogtraining.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [ 19%] Building CXX object CMakeFiles/libtesseract.dir/src/ccmain/reject.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
   Compiling notify v8.2.1
     Running `CARGO=/home/runner/.rustup/toolchains/1.99.1-x86_64-unknown-linux-gnu/bin/cargo CARGO_CRATE_NAME=notify CARGO_MANIFEST_DIR=/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/notify-8.2.1 CAR…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42809213127 — dark (conclusion: `cancelled`), 2026-11-10 11:39 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling atoi_simd v0.18.1
   Compiling g2p v1.2.2
   Compiling jsonwebtoken v11.1.0
   Compiling symphonia-format-riff v0.6.1
   Compiling memchr-n v0.1.10
   Compiling notify v8.2.1
   Compiling image v0.24.9
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
