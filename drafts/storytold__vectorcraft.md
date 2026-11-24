<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12045 · **Generated:** 2026-11-24T06:47:07.198Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("FreeBSD", "SonarCloud", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45111661096 — dark (conclusion: `failure`), 2026-11-23 04:24 UTC
- Dark since: 2026-11-22 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: help: consider removing the dependency on 'thiserror'

<details><summary>End of the job log</summary>

```
   |
20 | craft-web-api = { git = "https://github.com/storytold/craft-libs", rev = "50b0ee7bf811e363b5f238382b5c77318cf33e46", version = "0.1.0" }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `craft-web-api`
warning: `vectorcraft-web` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45328344049 — dark (conclusion: `failure`), 2026-11-24 04:43 UTC
- Dark since: 2026-11-24 01:25 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
06:14:52.276 INFO  ------------- Upload SCA dependency files
06:14:53.185 INFO  Successfully sent architecture data
06:14:54.372 INFO  Sensor cache published successfully
06:14:57.349 INFO  Analysis total time: 3:57.366 min
06:14:57.353 INFO  SonarScanner Engine completed successfully
06:14:57.505 INFO  EXECUTION SUCCESS
06:14:57.506 INFO  Total time: 4:01.547s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45328344013 — dark (conclusion: `failure`), 2026-11-24 04:43 UTC
- Dark since: 2026-11-24 01:25 UTC (first run of the current streak)
- Job / step: `gate / test 1/5 (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
warning: 2828/3856 tests were not run due to test failure (run with --no-fail-fast to run all tests, or run with --max-fail)
error: test run failed
CI summary:
  FAIL  test: cargo nextest run -p vectorcraft-ui-egui --lib --bins --tests: exited with exit status: 100
  skip  doctests
  skip  i18n-report
error: ci failed at `test`
##[error]Process completed with exit code 1.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45315618486 — dark (conclusion: `failure`), 2026-11-24 02:53 UTC
- Dark since: 2026-11-24 02:53 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Build and package`
- Likely cause: packaging/freebsd/package.sh: line 52:  9696 Killed                     ( cd "$ROOT" && cargo build --release --locked -p vectorcraft -p vectorcraft-cli ${CARGO_BUILD_TARGET:+--target "$CARGO_BUILD_TARGET"} )

<details><summary>End of the job log</summary>

```
   Compiling enum-map v3.1.0
   Compiling vectorcraft v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft)
   Compiling resvg v0.45.1
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling vectorcraft-mcp v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/mcp)
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
packaging/freebsd/package.sh: line 52:  9696 Killed                     ( cd "$ROOT" && cargo build --release --locked -p vectorcraft -p vectorcraft-cli ${CARGO_BUILD_TARGET:+--target "$CARGO_BUILD_TARGET"} )
##[error]Process completed with exit code 137.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
