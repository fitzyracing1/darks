<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9566 · **Generated:** 2026-11-09T06:54:36.072Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42573755029 — dark (conclusion: `cancelled`), 2026-11-09 06:33 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Live HF preset tests` → `Run live HF retrieval preset tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling oorandom v11.1.5
   Compiling hex v0.4.3
   Compiling anes v0.1.6
   Compiling data-encoding v2.11.1
   Compiling criterion v0.8.2
   Compiling zip v9.2.0
   Compiling tar v0.4.46
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42573754982 — dark (conclusion: `cancelled`), 2026-11-09 06:33 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [  6%] Building CXX object CMakeFiles/libtesseract.dir/src/api/capi.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [  7%] Building CXX object CMakeFiles/libtesseract.dir/src/api/hocrrenderer.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
[xberg-tesseract 1.4.0] [  7%] Building CXX object CMakeFiles/libtesseract.dir/src/api/lstmboxrenderer.cpp.o
[xberg-tesseract 1.4.0] /usr/bin/g++ -DCMAKE_BUILD -DHAVE_AVX -DHAVE_AVX2 -DHAVE_AVX512F -DHAVE_CONFIG_H -DHAVE_FMA -DHAVE_SSE4_1 -DOPENMP_SIMD -D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS=1 -I/home/runner/work/xberg/xbe…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42573755023 — dark (conclusion: `cancelled`), 2026-11-09 06:33 UTC
- Dark since: 2026-11-08 00:41 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling nu-ansi-term v0.50.3
   Compiling dyn-stack-macros v0.1.3
   Compiling minimal-lexical v0.2.1
   Compiling dyn-stack v0.13.2
   Compiling nom v7.1.3
   Compiling tracing-subscriber v0.3.23
   Compiling rustls-webpki v0.103.16
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42573755276 — dark (conclusion: `cancelled`), 2026-11-09 06:33 UTC
- Dark since: 2026-11-09 05:49 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness` → `Verify generated e2e suites are current`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

<details><summary>End of the job log</summary>

```
 WARN wasm e2e: entire fixture category excluded for wasm — emitting placeholder skip suite instead of silently omitting it category=code excluded_count=1
 INFO   [wasm] generated 25 file(s)
 INFO   [zig] generated 21 file(s)
 INFO   [dart] generated 22 file(s)
 INFO   [swift] generated 21 file(s)
 INFO   [homebrew] generated 1 file(s)
 INFO 10 file(s) were not written because `[workspace.ownership] user_owned` in alef.toml declares them owned by this repository: alef does not overwrite, stamp, or verify them. Remove the matching pattern to hand a pat…
##[error]The operation was canceled.
```

</details>

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42573754988 — dark (conclusion: `cancelled`), 2026-11-09 06:33 UTC
- Dark since: 2026-11-09 05:49 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios)` → `cargo check xberg-dart`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling delegate-attr v0.3.1
    Checking similar v3.2.1
    Checking org v0.3.1
    Checking jotdown v0.10.0
    Checking minijinja v3.0.5
   Compiling xberg-dart v1.4.0 (/Users/runner/work/xberg/xberg/packages/dart/rust)
warning: xberg-dart@1.4.0: flutter_rust_bridge_codegen regeneration skipped by default -- using the committed generated bridge. Run `alef generate` to regenerate it (with alef's full post-processing). Set ALEF_FRB_REGEN…
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
