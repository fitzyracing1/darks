<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9582 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43416274113 — dark (conclusion: `cancelled`), 2026-11-13 11:20 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run no-ORT tract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling dirs v7.0.0
   Compiling codepage v0.1.3
   Compiling fs2 v0.4.3
   Compiling jpeg-encoder v0.7.1
   Compiling hex v0.4.3
   Compiling dotenvy v0.15.7
   Compiling jotdown v0.10.0
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43416274271 — dark (conclusion: `cancelled`), 2026-11-13 11:20 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-tesseract 1.4.0] cd /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-3d3026f485d0683d/out/build/src && /usr/bin/cc -DHAVE_CONFIG_H -I/home/runner/work/xberg/xberg/target/release/build/xberg-tess…
[xberg-tesseract 1.4.0] [ 69%] Building C object src/CMakeFiles/leptonica.dir/psio1.c.o
[xberg-tesseract 1.4.0] cd /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-3d3026f485d0683d/out/build/src && /usr/bin/cc -DHAVE_CONFIG_H -I/home/runner/work/xberg/xberg/target/release/build/xberg-tess…
[xberg-tesseract 1.4.0] [ 69%] Building C object src/CMakeFiles/leptonica.dir/psio1stub.c.o
[xberg-tesseract 1.4.0] cd /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-3d3026f485d0683d/out/build/src && /usr/bin/cc -DHAVE_CONFIG_H -I/home/runner/work/xberg/xberg/target/release/build/xberg-tess…
[xberg-tesseract 1.4.0] [ 70%] Building C object src/CMakeFiles/leptonica.dir/psio2.c.o
[xberg-tesseract 1.4.0] cd /home/runner/work/xberg/xberg/target/release/build/xberg-tesseract-3d3026f485d0683d/out/build/src && /usr/bin/cc -DHAVE_CONFIG_H -I/home/runner/work/xberg/xberg/target/release/build/xberg-tess…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43416274202 — dark (conclusion: `cancelled`), 2026-11-13 11:20 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling serde_urlencoded v0.7.1
   Compiling pulp v0.22.3
   Compiling async-trait v0.1.92
   Compiling rustls-platform-verifier v0.7.1
   Compiling option-ext v0.2.0
   Compiling dirs-sys v0.5.0
   Compiling cookie_store v0.22.1
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43417659236 — dark (conclusion: `failure`), 2026-11-13 11:30 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: error: could not compile 'xberg' (lib test) due to 1 previous error

<details><summary>End of the job log</summary>

```
      error: could not compile `xberg` (lib) due to 1 previous error
      warning: build failed, waiting for other jobs to finish...
      error: could not compile `xberg` (lib test) due to 1 previous error
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
