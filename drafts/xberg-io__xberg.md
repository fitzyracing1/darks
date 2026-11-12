<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9580 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43219600685 — dark (conclusion: `failure`), 2026-11-12 12:37 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04-arm)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   47G   98G  33% /
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 11957.84s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43219600614 — dark (conclusion: `failure`), 2026-11-12 12:37 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Install system dependencies`
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

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43219600794 — dark (conclusion: `failure`), 2026-11-12 12:37 UTC
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

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43219601439 — dark (conclusion: `failure`), 2026-11-12 12:37 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Docs snippets gate` → `Install system dependencies`
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

### Native libheif runtime qualification (`.github/workflows/ci-native-runtime.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43205553310 — dark (conclusion: `failure`), 2026-11-12 11:01 UTC
- Dark since: 2026-11-12 11:01 UTC (first run of the current streak)
- Job / step: `libheif 1.23.7 ABI and real decoding` → `Provision selected runtime`
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
