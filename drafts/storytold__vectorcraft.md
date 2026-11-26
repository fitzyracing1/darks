<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12118 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Release", "FreeBSD", "SonarCloud", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45745422901 — dark (conclusion: `failure`), 2026-11-26 02:53 UTC
- Dark since: 2026-11-26 02:53 UTC (first run of the current streak)
- Job / step: `release / Linux aarch64` → `Build and package (AppImage, deb, rpm, tar.gz)`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   --> crates/ui-egui/src/panels/color_wheel.rs:930:29
    |
930 |         bucket: app.session.bucket_paints(),
    |                             ^^^^^^^^^^^^^ method not found in `vectorcraft_engine::Session`
For more information about this error, try `rustc --explain E0599`.
error: could not compile `vectorcraft-ui-egui` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45754877482 — dark (conclusion: `failure`), 2026-11-26 04:23 UTC
- Dark since: 2026-11-26 04:23 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/root/.rustup/toolchains/stable-x86_64-unknown-freebsd/bin/rustc --crate-name vectorcraft_ui_egui --edition=2024 crates/ui-egui/src/lib.rs --error-format=json --json=diagnostic-rendere…

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft)
   Compiling craft-psd v0.1.0 (https://github.com/storytold/craft-libs?rev=b0d422cf0c23baccdaca314b916458a89c0952e0#b0d422cf)
   Compiling weezl v0.2.1
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
error: could not compile `vectorcraft-ui-egui` (lib test)
Caused by:
  process didn't exit successfully: `/root/.rustup/toolchains/stable-x86_64-unknown-freebsd/bin/rustc --crate-name vectorcraft_ui_egui --edition=2024 crates/ui-egui/src/lib.rs --error-format=json --json=diagnostic-rende…
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45820574449 — dark (conclusion: `cancelled`), 2026-11-26 12:32 UTC
- Dark since: 2026-11-26 09:43 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45797174095 — dark (conclusion: `failure`), 2026-11-26 10:00 UTC
- Dark since: 2026-11-26 09:48 UTC (first run of the current streak)
- Job / step: `gate / test 1/5 (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
warning: 904/4150 tests were not run due to test failure (run with --no-fail-fast to run all tests, or run with --max-fail)
error: test run failed
CI summary:
  FAIL  test: cargo nextest run -p vectorcraft-ui-egui --lib --bins --tests: exited with exit status: 100
  skip  doctests
  skip  i18n-report
error: ci failed at `test`
##[error]Process completed with exit code 1.
```

</details>

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45820574359 — dark (conclusion: `cancelled`), 2026-11-26 12:32 UTC
- Dark since: 2026-11-26 12:31 UTC (first run of the current streak)
- Job / step: `affinity3 / gate (ubuntu-24.04)` → `Set up job`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Download action repository 'step-security/taiki-e-install-action@76747d22a7567cc4438546a84f11bdf18e670ab8' (SHA:76747d22a7567cc4438546a84f11bdf18e670ab8)
Download action repository 'Mozilla-Actions/sccache-action@fc920bf0ec8de6ee65d409111f7ec508035751ba' (SHA:fc920bf0ec8de6ee65d409111f7ec508035751ba)
Download action repository 'actions/cache@caa296126883cff596d87d8935842f9db880ef25' (SHA:caa296126883cff596d87d8935842f9db880ef25)
Getting action download info
Getting action download info
Getting action download info
Download action repository 'Swatinem/rust-cache@d1527c8f67ef9af357290475d4af4b0fab8f12e0' (SHA:d1527c8f67ef9af357290475d4af4b0fab8f12e0)
##[error]A task was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
