<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11892 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44426624026 — dark (conclusion: `failure`), 2026-11-19 00:08 UTC
- Dark since: 2026-11-18 03:14 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Build instrumented test archive`
- Likely cause: help: consider removing the dependency on 'thiserror'

<details><summary>End of the job log</summary>

```
14 | thiserror = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `thiserror`
warning: `vectorcraft-geom` (manifest) generated 1 warning
error: command `/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo '--color=always' test --no-run '--message-format=json-render-diagnostics' --workspace` exited with code 101
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44426624178 — dark (conclusion: `failure`), 2026-11-19 00:08 UTC
- Dark since: 2026-11-18 17:39 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  fmt: cargo fmt --all -- --check: exited with exit status: 1

<details><summary>End of the job log</summary>

```
  skip  assets
  skip  brands
  skip  cursors
  skip  i18n-report
  skip  ui-commands
  skip  layers
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
