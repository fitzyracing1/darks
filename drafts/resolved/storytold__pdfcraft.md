<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-10-24); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 17396 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40002741931 — dark (conclusion: `cancelled`), 2026-10-23 18:22 UTC
- Dark since: 2026-10-23 01:38 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling egui_extras v0.36.2
   Compiling rand_chacha v0.9.0
   Compiling rand v0.9.5
   Compiling rand_xorshift v0.4.0
   Compiling craft-quit v0.1.0 (https://github.com/storytold/craft-libs?rev=f58bc1a3df490992d633393d0898af0588ce882c#f58bc1a3)
   Compiling craft-ui v0.1.0 (https://github.com/storytold/craft-libs?rev=5c874d51eeb3de70e735c8ce87a59a7dedd47675#5c874d51)
   Compiling winresource v0.1.31
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40002741795 — dark (conclusion: `cancelled`), 2026-10-23 18:22 UTC
- Dark since: 2026-10-23 17:00 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: Canceling since a higher priority waiting request for sonarcloud-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling pdfcraft-xfdf v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/crates/xfdf)
   Compiling pdfcraft-ocr v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/crates/ocr)
   Compiling pdfcraft-create v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/crates/create)
   Compiling pdfcraft-engine v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/crates/engine)
   Compiling pdfcraft-ui-egui v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/crates/ui-egui)
   Compiling pdfcraft-automation v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/crates/automation)
   Compiling pdfcraft-cli v0.13.0 (/home/runner/work/pdfcraft/pdfcraft/apps/pdfcraft-cli)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
