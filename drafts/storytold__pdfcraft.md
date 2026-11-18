<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21079 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44282815544 — dark (conclusion: `cancelled`), 2026-11-18 10:10 UTC
- Dark since: 2026-11-18 09:27 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: run cancelled in job "freebsd / FreeBSD 15 x86_64 (build + test)"

<details><summary>End of the job log</summary>

```
  --> apps/pdfcraft-web/Cargo.toml:13:1
   |
13 | pdfcraft-ui-egui = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
help: consider removing the dependency on `pdfcraft-ui-egui`
warning: `pdfcraft-web` (manifest) generated 3 warnings
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44287742537 — dark (conclusion: `failure`), 2026-11-18 10:41 UTC
- Dark since: 2026-11-18 09:29 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: CI: 1 passed, FAILED at 'clippy': cargo clippy --workspace --all-targets -- -D warnings: exited with exit status: 101

<details><summary>End of the job log</summary>

```
13 | pdfcraft-ui-egui = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
help: consider removing the dependency on `pdfcraft-ui-egui`
warning: `pdfcraft-web` (manifest) generated 3 warnings
xtask ci: error: ci failed at `clippy`
CI: 1 passed, FAILED at `clippy`: cargo clippy --workspace --all-targets -- -D warnings: exited with exit status: 101
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
