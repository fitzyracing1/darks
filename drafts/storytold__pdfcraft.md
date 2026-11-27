<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21924 · **Generated:** 2026-11-27T12:42:45.007Z
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

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45929832851 — dark (conclusion: `failure`), 2026-11-27 02:41 UTC
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

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45934692416 — dark (conclusion: `failure`), 2026-11-27 03:31 UTC
- Dark since: 2026-11-23 19:45 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
833 |     assert!(h.state().views[0].crop_drag.is_none(), "the Crop tool must not receive a wheel drag");
    |                                ^^^^^^^^^ unknown field
    |
    = note: available fields are: `id`, `from_attachment`, `view`, `session`, `textures` ... and 23 others
For more information about this error, try `rustc --explain E0609`.
error: could not compile `pdfcraft-ui-egui` (test "it") due to 1 previous error
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45889982203 — dark (conclusion: `failure`), 2026-11-26 20:17 UTC
- Dark since: 2026-11-23 20:01 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: CI: 9 of 11 steps passed, FAILED: test, deny

<details><summary>End of the job log</summary>

```
  K Optimize and standards                  58       20       12      44.8%
  L Print and print production              41       21        3      54.9%
  M Accessibility                           61       39       10      72.1%
  N Compare, automation, AI, misc           76       19       14      34.2%
xtask ci: error: ci failed at `test`, `deny`
note: 100 shipped feature(s) have no automation tool yet (AGENTS.md §3): core.malformed-input-safety, core.xref-streams, core.stream-filters, core.decompression-limits, core.unicode-passwords, core.permissions-enforced,…
CI: 9 of 11 steps passed, FAILED: test, deny
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
