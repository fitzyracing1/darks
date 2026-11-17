<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18424 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/43788506479 — dark (conclusion: `cancelled`), 2026-11-16 01:49 UTC
- Dark since: 2026-11-16 01:49 UTC (first run of the current streak)
- Job / step: `release / Windows x64` → `Build, sign, package`
- Likely cause: The run was canceled by @FredApps.

<details><summary>End of the job log</summary>

```
   Compiling windows v0.54.0
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling filmcraft-platform v0.20.1 (D:\a\filmcraft\filmcraft\crates\platform)
   Compiling dasp_sample v0.11.0
   Compiling filmcraft-automation v0.20.1 (D:\a\filmcraft\filmcraft\crates\automation)
   Compiling open v5.4.5
   Compiling filmcraft-cli v0.20.1 (D:\a\filmcraft\filmcraft\apps\filmcraft-cli)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/43915753370 — dark (conclusion: `failure`), 2026-11-16 17:11 UTC
- Dark since: 2026-11-16 16:44 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 2 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
17:38:48.074 INFO  ------------- Upload SCA dependency files
17:38:49.016 INFO  Successfully sent architecture data
17:38:50.043 INFO  Sensor cache published successfully
17:38:51.355 INFO  Analysis total time: 2:24.460 min
17:38:51.356 INFO  SonarScanner Engine completed successfully
17:38:51.836 INFO  EXECUTION SUCCESS
17:38:51.837 INFO  Total time: 2:31.585s
##[error]Coverage shard 2 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
