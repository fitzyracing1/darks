<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80475 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("FreeBSD", "Release", "Perf (nightly)", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44444265007 — dark (conclusion: `failure`), 2026-11-19 02:25 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   |
26 | photocraft-ui-egui = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `photocraft-ui-egui`
warning: `photocraft-web` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44445095812 — dark (conclusion: `failure`), 2026-11-19 02:32 UTC
- Dark since: 2026-11-18 02:32 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Set up the aarch64 cross toolchain`
- Likely cause: error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/MANIFEST after 3 attempts

<details><summary>End of the job log</summary>

```
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
tar: Removing leading '/' from member names
curl: (28) Connection timed out after 20062 milliseconds
curl: (28) Connection timed out after 20027 milliseconds
curl: (28) Connection timed out after 20019 milliseconds
error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/MANIFEST after 3 attempts
##[error]Process completed with exit code 1.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44451779041 — dark (conclusion: `cancelled`), 2026-11-19 03:29 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling photocraft-ui-egui v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/ui-egui)
   Compiling photocraft-ops v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/ops)
   Compiling photocraft-engine v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/engine)
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=e9711ca9b69772f875ae0d1cef1977ff8c16234d#e9711ca9)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling memory-stats v1.2.0
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44585573637 — dark (conclusion: `cancelled`), 2026-11-19 18:13 UTC
- Dark since: 2026-11-19 16:52 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44582769788 — dark (conclusion: `failure`), 2026-11-19 17:58 UTC
- Dark since: 2026-11-19 17:58 UTC (first run of the current streak)
- Job / step: `gate / test 2/4 (ubuntu-24.04)` → `Gate`
- Likely cause: skip  panic_hunt

<details><summary>End of the job log</summary>

```
       4: <photocraft_ui_egui::canvas::paint_tool::tests::live_stroke_uses_pen_tilt_and_redraws_partially::{closure#0} as core::ops::function::FnOnce<()>>::call_once
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
error: test run failed
error: ci failed at `test`
CI summary:
  FAIL  test: cargo nextest run --profile ci --binaries-metadata /home/runner/work/photocraft/photocraft/target/nextest-archive/target/nextest/binaries-metadata.json --cargo-metadata /home/runner/work/photocraft/photocr…
  skip  panic_hunt
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
