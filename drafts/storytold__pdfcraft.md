<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 18199 · **Generated:** 2026-10-27T18:39:56.972Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40553101480 — dark (conclusion: `failure`), 2026-10-27 17:42 UTC
- Dark since: 2026-10-26 04:57 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: error: no matching package named 'craft-menu' found

<details><summary>End of the job log</summary>

```
    Updating crates.io index
    Updating git repository `https://github.com/storytold/craft-libs`
    Updating git repository `https://github.com/storytold/craft-libs`
    Updating git repository `https://github.com/storytold/craft-libs`
error: no matching package named `craft-menu` found
location searched: Git repository https://github.com/storytold/craft-libs?rev=edc41f68fa24c46651c3b5117d10f0ead75ec9cb#edc41f68
required by package `pdfcraft-ui-egui v0.14.0 (/home/runner/work/pdfcraft/pdfcraft/crates/ui-egui)`
##[error]Process completed with exit code 101.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40553101535 — dark (conclusion: `failure`), 2026-10-27 17:42 UTC
- Dark since: 2026-10-27 17:42 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: | cargo xtask models failed with exit code 1

<details><summary>End of the job log</summary>

```
xtask models: error: download failed: https://ocrs-models.s3-accelerate.amazonaws.com/text-detection.rten
error: process didn't exit successfully: `target\debug\xtask.exe models D:\a\pdfcraft\pdfcraft\target\windows-package\arm64\models` (exit code: 1)
Exception: D:\a\pdfcraft\pdfcraft\packaging\windows\package.ps1:46
Line |
  46 |  … EXITCODE -ne 0) { throw "$What failed with exit code $LASTEXITCODE" }
     |                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     | cargo xtask models failed with exit code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
