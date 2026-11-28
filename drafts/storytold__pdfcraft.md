<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21972 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Nightly macOS", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly macOS (`.github/workflows/nightly-macos.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/46099338968 — dark (conclusion: `failure`), 2026-11-28 02:41 UTC
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

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/46077053718 — dark (conclusion: `cancelled`), 2026-11-27 22:30 UTC
- Dark since: 2026-11-23 20:01 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Gate`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
   Compiling async-lock v3.4.2
   Compiling ordered-stream v0.2.0
   Compiling zbus v5.19.0
   Compiling craft-web-api v0.1.0 (https://github.com/storytold/craft-libs?rev=0a6e42b80bfd586aee6ee1144aa98cf1ea37a844#0a6e42b8)
   Compiling xtask v0.1.0 (D:\a\pdfcraft\pdfcraft\xtask)
   Compiling pdfcraft-ocr-worker v0.22.0 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft-ocr-worker)
   Compiling pdfcraft-web v0.22.0 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft-web)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
