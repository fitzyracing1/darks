<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 19634 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42025390159 — dark (conclusion: `cancelled`), 2026-11-05 12:14 UTC
- Dark since: 2026-11-05 12:14 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling group v0.14.0
   Compiling pic-scale v0.7.12
   Compiling signature v3.0.0
   Compiling base16ct v1.0.0
   Compiling base64 v0.23.1
   Compiling sec1 v0.8.1
   Compiling hayro v0.7.1 (/home/runner/work/pdfcraft/pdfcraft/vendor/hayro)
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42025390165 — dark (conclusion: `cancelled`), 2026-11-05 12:14 UTC
- Dark since: 2026-11-05 12:14 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling pdfcraft-platform v0.18.1 (D:\a\pdfcraft\pdfcraft\crates\platform)
   Compiling pdfcraft-ui-egui v0.18.1 (D:\a\pdfcraft\pdfcraft\crates\ui-egui)
   Compiling pdfcraft-prc v0.18.1 (D:\a\pdfcraft\pdfcraft\crates\prc)
   Compiling pdfcraft-cli v0.18.1 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft-cli)
   Compiling pdfcraft v0.18.1 (D:\a\pdfcraft\pdfcraft\apps\pdfcraft)
   Compiling pdfcraft-prc-render v0.18.1 (D:\a\pdfcraft\pdfcraft\crates\prc-render)
   Compiling pdfcraft-automation v0.18.1 (D:\a\pdfcraft\pdfcraft\crates\automation)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
