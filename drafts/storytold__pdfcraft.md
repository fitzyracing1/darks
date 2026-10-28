<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 18245 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40584620324 — dark (conclusion: `failure`), 2026-10-27 21:11 UTC
- Dark since: 2026-10-26 04:57 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: error: no matching package named 'craft-menu' found

<details><summary>End of the job log</summary>

```
    Updating git repository `https://github.com/storytold/egui.git`
    Updating git repository `https://github.com/storytold/winit.git`
    Updating crates.io index
    Updating git repository `https://github.com/storytold/craft-libs`
error: no matching package named `craft-menu` found
location searched: Git repository https://github.com/storytold/craft-libs?rev=92d392cff132eaf53e13afff77f38b5c11b73aa0#92d392cf
required by package `pdfcraft-ui-egui v0.14.0 (/home/runner/work/pdfcraft/pdfcraft/crates/ui-egui)`
##[error]Process completed with exit code 101.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40584620495 — dark (conclusion: `cancelled`), 2026-10-27 21:11 UTC
- Dark since: 2026-10-27 17:42 UTC (first run of the current streak)
- Job / step: `windows-arm64 / install and run on ARM64`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
