<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8641 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI (macOS)", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (macOS) (`.github/workflows/ci-macos.yml`)

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/43018270816 — dark (conclusion: `cancelled`), 2026-11-11 12:12 UTC
- Dark since: 2026-11-10 22:55 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-15)` → `Gate`
- Likely cause: Canceling since a higher priority waiting request for ci-macos-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling sysinfo v0.37.2
   Compiling rfd v0.17.2
   Compiling fmv-macos-events v0.1.0
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling effectcraft-web v0.23.1 (/Users/runner/work/effectcraft/effectcraft/apps/effectcraft-web)
   Compiling xtask v0.23.1 (/Users/runner/work/effectcraft/effectcraft/xtask)
   Compiling effectcraft-cli v0.23.1 (/Users/runner/work/effectcraft/effectcraft/apps/effectcraft-cli)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/43018270646 — dark (conclusion: `cancelled`), 2026-11-11 12:12 UTC
- Dark since: 2026-11-11 11:45 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
