<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9538 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Integrations", "CI Lint", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41974732056 — dark (conclusion: `cancelled`), 2026-11-05 05:33 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `xberg-cli feature leg (all)` → `cargo clippy -p xberg-cli --features all`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
    Checking jotdown v0.10.0
    Checking org v0.3.1
    Checking minijinja v3.0.5
    Checking similar v3.2.1
    Checking clap_complete v4.6.11
    Finished `dev` profile [unoptimized] target(s) in 6m 18s
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41974732002 — dark (conclusion: `cancelled`), 2026-11-05 05:33 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rake v0.3.6
   Compiling lru v0.19.0
   Compiling minijinja v3.0.5
   Compiling jotdown v0.10.0
   Compiling org v0.3.1
   Compiling similar v3.2.1
   Compiling pyo3-async-runtimes v0.30.0
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41974732374 — dark (conclusion: `cancelled`), 2026-11-05 05:33 UTC
- Dark since: 2026-11-03 02:17 UTC (first run of the current streak)
- Job / step: `Toolchain baseline`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41974732003 — dark (conclusion: `cancelled`), 2026-11-05 05:33 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [ 25%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/blobs.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [ 25%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/blread.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [ 25%] Building CXX object CMakeFiles/libtesseract.dir/src/ccstruct/boxread.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
