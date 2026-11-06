<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9548 · **Generated:** 2026-11-06T06:44:53.221Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42173101669 — dark (conclusion: `cancelled`), 2026-11-06 06:13 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Install system dependencies`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[ 60%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/input.cpp.o
[ 61%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/lstm.cpp.o
[ 61%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/lstmrecognizer.cpp.o
[ 61%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/maxpool.cpp.o
[ 62%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/network.cpp.o
[ 62%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/networkio.cpp.o
[ 63%] Building CXX object CMakeFiles/libtesseract.dir/src/lstm/parallel.cpp.o
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42173101666 — dark (conclusion: `cancelled`), 2026-11-06 06:13 UTC
- Dark since: 2026-11-02 11:54 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42173101611 — dark (conclusion: `cancelled`), 2026-11-06 06:13 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42173101977 — dark (conclusion: `cancelled`), 2026-11-06 06:13 UTC
- Dark since: 2026-11-05 18:52 UTC (first run of the current streak)
- Job / step: `Submodule gitlinks reachable`
- Likely cause: Canceling since a higher priority waiting request for ci-lint-refs/heads/main exists

### CI Mobile (`.github/workflows/ci-mobile.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42173101706 — dark (conclusion: `cancelled`), 2026-11-06 06:13 UTC
- Dark since: 2026-11-06 04:19 UTC (first run of the current streak)
- Job / step: `iOS cargo check (aarch64-apple-ios-sim)`
- Likely cause: Canceling since a higher priority waiting request for ci-mobile-refs/heads/main exists

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42162679714 — dark (conclusion: `cancelled`), 2026-11-06 04:28 UTC
- Dark since: 2026-11-06 04:28 UTC (first run of the current streak)
- Job / step: `Bats on macos-26` → `Run the shell contract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-scripts-refs/heads/main exists

<details><summary>End of the job log</summary>

```
ok 395 local native staging should preserve Intel macOS artifacts in both package layouts
ok 396 local native staging should normalize both macOS ARM architecture names
ok 397 local native staging should use the unprefixed Windows DLL for every supported shell
ok 398 local native staging should reject unsupported systems before creating package directories
ok 399 local native staging should reject missing built libraries before creating package directories
ok 400 local native staging should propagate failed artifact copies in both package layouts
ok 401 macOS Elixir archive contracts run the complete portable unittest suite
##[error]The operation was canceled.
```

</details>

### CI Docs (`.github/workflows/ci-docs.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42171675982 — dark (conclusion: `cancelled`), 2026-11-06 05:59 UTC
- Dark since: 2026-11-06 05:54 UTC (first run of the current streak)
- Job / step: `docs / Deploy`
- Likely cause: Canceling since a higher priority waiting request for ci-docs-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
