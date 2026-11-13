<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11693 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43365066215 — dark (conclusion: `failure`), 2026-11-13 04:22 UTC
- Dark since: 2026-11-13 04:22 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Killed

<details><summary>End of the job log</summary>

```
   Compiling craft-print v0.1.0 (https://github.com/storytold/craft-libs?rev=9be9a63782298ab59cd9b7a42ee9cba4f42a5ccb#9be9a637)
   Compiling eframe v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling webbrowser v1.2.5
   Compiling craft-window v0.1.0 (https://github.com/storytold/craft-libs?rev=9be9a63782298ab59cd9b7a42ee9cba4f42a5ccb#9be9a637)
   Compiling craft-web-api v0.1.0 (https://github.com/storytold/craft-libs?rev=fd5e2feff6ea25bed371a99cc732b3968d621505#fd5e2fef)
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
Killed
##[error]Process completed with exit code 137.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
