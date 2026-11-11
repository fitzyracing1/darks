<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11624 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42958781374 — dark (conclusion: `failure`), 2026-11-11 04:22 UTC
- Dark since: 2026-11-09 04:23 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Killed

<details><summary>End of the job log</summary>

```
   Compiling eframe v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling webbrowser v1.2.5
   Compiling craft-window v0.1.0 (https://github.com/storytold/craft-libs?rev=9be9a63782298ab59cd9b7a42ee9cba4f42a5ccb#9be9a637)
   Compiling craft-web-api v0.1.0 (https://github.com/storytold/craft-libs?rev=fd5e2feff6ea25bed371a99cc732b3968d621505#fd5e2fef)
   Compiling vectorcraft-cli v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
   Compiling vectorcraft-web v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
Killed
##[error]Process completed with exit code 137.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43019874593 — dark (conclusion: `cancelled`), 2026-11-11 12:23 UTC
- Dark since: 2026-11-10 18:11 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43019874469 — dark (conclusion: `cancelled`), 2026-11-11 12:23 UTC
- Dark since: 2026-11-11 11:16 UTC (first run of the current streak)
- Job / step: `affinity3` → `Check every artboard, native save, SVG, PDF and PSD exports`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling craft-docpath v0.1.0 (https://github.com/storytold/craft-libs?rev=9be9a63782298ab59cd9b7a42ee9cba4f42a5ccb#9be9a637)
   Compiling rusty-fork v0.3.1
   Compiling vectorcraft-svg v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/crates/svg)
   Compiling cfb v0.15.0
   Compiling wasm-encoder v0.263.0
   Compiling vectorcraft-eps v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/crates/eps)
   Compiling jxl-oxide v0.12.6
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
