<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9582 · **Generated:** 2026-11-12T06:44:18.567Z
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43163075275 — dark (conclusion: `cancelled`), 2026-11-12 05:41 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (windows-latest, static-embeddings link)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  edgblob.cpp
  edgloop.cpp
  equationdetectbase.cpp
  fpchop.cpp
  gap_map.cpp
  imagefind.cpp
  Generating Code...
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43163075359 — dark (conclusion: `cancelled`), 2026-11-12 05:41 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build CLI`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling xet-data v1.8.1
   Compiling hf-xet v1.8.1
   Compiling xberg-gliner v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-gliner)
   Compiling hf-hub v1.0.0
   Compiling xberg-candle-ocr v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-candle-ocr)
   Compiling sceptre v0.10.1
   Compiling xberg-cli v1.4.0 (/home/runner/work/xberg/xberg/crates/xberg-cli)
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43167125068 — dark (conclusion: `failure`), 2026-11-12 06:17 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Install system dependencies`
- Likely cause: -- Configuring incomplete, errors occurred!

<details><summary>End of the job log</summary>

```
     "/usr/lib/x86_64-linux-gnu/cmake/AOM/AOMTargets.cmake"
  but not all the files it references.
Call Stack (most recent call first):
  /usr/lib/x86_64-linux-gnu/cmake/AOM/AOMConfig.cmake:43 (include)
  cmake/modules/FindAOM.cmake:1 (find_package)
  CMakeLists.txt:239 (find_package)
-- Configuring incomplete, errors occurred!
##[error]Process completed with exit code 1.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43167125454 — dark (conclusion: `failure`), 2026-11-12 06:17 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Install system dependencies (libheif for cargo-clippy)`
- Likely cause: -- Configuring incomplete, errors occurred!

<details><summary>End of the job log</summary>

```
     "/usr/lib/x86_64-linux-gnu/cmake/AOM/AOMTargets.cmake"
  but not all the files it references.
Call Stack (most recent call first):
  /usr/lib/x86_64-linux-gnu/cmake/AOM/AOMConfig.cmake:43 (include)
  cmake/modules/FindAOM.cmake:1 (find_package)
  CMakeLists.txt:239 (find_package)
-- Configuring incomplete, errors occurred!
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
