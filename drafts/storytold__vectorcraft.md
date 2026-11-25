<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12079 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("FreeBSD", "Windows ARM64", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45326000401 — dark (conclusion: `failure`), 2026-11-24 04:23 UTC
- Dark since: 2026-11-22 04:21 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/root/.rustup/toolchains/stable-x86_64-unknown-freebsd/bin/rustc --crate-name vectorcraft_engine --edition=2024 crates/engine/src/lib.rs --error-format=json --json=diagnostic-rendered-…

<details><summary>End of the job log</summary>

```
   |
23 | egui_extras = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `egui_extras`
warning: `vectorcraft-web` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45551854191 — dark (conclusion: `failure`), 2026-11-25 05:11 UTC
- Dark since: 2026-11-24 05:11 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: | cargo build (aarch64-pc-windows-msvc) failed with exit code 101

<details><summary>End of the job log</summary>

```
error: could not compile `vectorcraft-ui-egui` (lib) due to 7 previous errors
warning: build failed, waiting for other jobs to finish...
Exception: D:\a\vectorcraft\vectorcraft\packaging\windows\package.ps1:33
Line |
  33 |  … EXITCODE -ne 0) { throw "$What failed with exit code $LASTEXITCODE" }
     |                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | cargo build (aarch64-pc-windows-msvc) failed with exit code 101
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45547733852 — dark (conclusion: `failure`), 2026-11-25 04:34 UTC
- Dark since: 2026-11-24 23:00 UTC (first run of the current streak)
- Job / step: `gate / cache warm (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  build tests: cargo test --lib --bins --no-run (vectorcraft-ui-egui): exited with exit status: 101

<details><summary>End of the job log</summary>

```
  FAIL  build tests: cargo test --lib --bins --no-run (vectorcraft-ui-egui): exited with exit status: 101
  skip  build tests
  skip  build tests
  skip  build tests
  skip  clippy
  skip  no-bundled-fonts
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45547733949 — dark (conclusion: `failure`), 2026-11-25 04:34 UTC
- Dark since: 2026-11-25 04:27 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Build instrumented test archive`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
     |                                           ^^^ not found in this scope
Some errors have detailed explanations: E0423, E0425.
For more information about an error, try `rustc --explain E0423`.
error: process didn't exit successfully: `/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/rustc --crate-name vectorcraft_ui_egui --edition=2024 crates/ui-egui/src/lib.rs --error-format=json --json=di…
error: could not compile `vectorcraft-ui-egui` (lib) due to 7 previous errors
warning: build failed, waiting for other jobs to finish...
error: command `/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo '--color=always' test --no-run '--message-format=json-render-diagnostics' --workspace` exited with code 101
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
