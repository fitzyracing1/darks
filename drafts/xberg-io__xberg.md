<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9469 · **Generated:** 2026-10-31T06:39:29.667Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41156693941 — dark (conclusion: `cancelled`), 2026-10-31 01:43 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: run cancelled in job "Rust (macos-26)"

<details><summary>End of the job log</summary>

```
Filesystem      Size    Used   Avail Capacity iused ifree %iused  Mounted on
/dev/disk2s5   320Gi   269Gi    28Gi    91%    2.1M  297M    1%   /System/Volumes/Data
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
Finished in 3759.73s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41170429913 — dark (conclusion: `cancelled`), 2026-10-31 04:54 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build local integration bindings`
- Likely cause: The run was canceled by @Goldziher.

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41170430051 — dark (conclusion: `cancelled`), 2026-10-31 04:54 UTC
- Dark since: 2026-10-30 03:50 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Set up job`
- Likely cause: The run was canceled by @Goldziher.

<details><summary>End of the job log</summary>

```
Download action repository 'actions/upload-artifact@v7' (SHA:cf430e030ddbb5b0abf93d22962f4752f3646cd9)
Getting action download info
Download action repository 'actions-rust-lang/setup-rust-toolchain@v2' (SHA:ecabd13d1c56bd1345c230e542e9144811ad706f)
Download action repository 'mozilla-actions/sccache-action@v0.0.11' (SHA:fc920bf0ec8de6ee65d409111f7ec508035751ba)
Download action repository 'taiki-e/install-action@v2' (SHA:68a389c788b2cd04016ce8c80ee23b80d2ab3d68)
Getting action download info
Download action repository 'Swatinem/rust-cache@6323deb102c322ba6fcbdcafc7e3dddab59af2b6' (SHA:6323deb102c322ba6fcbdcafc7e3dddab59af2b6)
##[error]A task was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41170430196 — dark (conclusion: `cancelled`), 2026-10-31 04:54 UTC
- Dark since: 2026-10-30 05:08 UTC (first run of the current streak)
- Job / step: `Toolchain baseline`
- Likely cause: The run was canceled by @Goldziher.

### CI Scripts (`.github/workflows/ci-scripts.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/41172758701 — dark (conclusion: `failure`), 2026-10-31 05:28 UTC
- Dark since: 2026-10-31 04:54 UTC (first run of the current streak)
- Job / step: `Bats on ubuntu-latest` → `Run the shell contract tests`
- Likely cause: ok 667 WASM test runner should propagate the actual wasm-pack test failure

<details><summary>End of the job log</summary>

```
ok 666 WASM test runner should reject a failing executed POSIX probe rather than only checking the binary exists
ok 667 WASM test runner should propagate the actual wasm-pack test failure
The following warnings were encountered during tests:
BW02: Using flags on `run` requires at least BATS_VERSION=1.5.0. Use `bats_require_minimum_version 1.5.0` to fix this message.
      (from function `bats_warn_minimum_guaranteed_version' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/warnings.bash, line 32,
       from function `run' in file /home/runner/work/_temp/bats/bats-core-1.14.0/lib/bats-core/test_functions.bash, line 359,
       in test file scripts/tests/bats/benchmark_liteparse.bats, line 26)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
