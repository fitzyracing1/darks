<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21609 · **Generated:** 2026-11-24T06:47:07.198Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Nightly macOS", "FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly macOS (`.github/workflows/nightly-macos.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45314341301 — dark (conclusion: `failure`), 2026-11-24 02:42 UTC
- Dark since: 2026-11-23 02:42 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-latest)` → `Gate`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   |
34 | egui_extras = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `egui_extras`
warning: `pdfcraft-ui-egui` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45266379428 — dark (conclusion: `failure`), 2026-11-23 21:07 UTC
- Dark since: 2026-11-23 19:45 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
  --> apps/pdfcraft-web/Cargo.toml:13:1
   |
13 | pdfcraft-ui-egui = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
help: consider removing the dependency on `pdfcraft-ui-egui`
warning: `pdfcraft-web` (manifest) generated 2 warnings
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45266379543 — dark (conclusion: `failure`), 2026-11-23 21:07 UTC
- Dark since: 2026-11-23 20:01 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: xtask ci: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
        FAIL [   0.479s] (7982/8867) pdfcraft-ui-egui::it snapshot_tabs::save_as_image_writes_this_tabs_area
        FAIL [   0.455s] (7983/8867) pdfcraft-ui-egui::it snapshot_tabs::the_area_stays_after_print_area
        FAIL [   0.621s] (8092/8867) pdfcraft-ui-egui::it ui::long_german_tool_labels_stay_within_the_sidebar
        FAIL [   0.524s] (8111/8867) pdfcraft-ui-egui::it updates::a_newer_release_is_offered_for_download
error: test run failed
CI: 4 passed, FAILED at `test`: cargo nextest run --no-fail-fast --workspace --lib --bins --tests: exited with exit status: 100
xtask ci: error: ci failed at `test`
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
