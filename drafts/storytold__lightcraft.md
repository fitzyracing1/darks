<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16376 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45340078724 — dark (conclusion: `failure`), 2026-11-24 06:23 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 8 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
09:51:15.120 INFO  Successfully sent architecture data
09:51:15.120 INFO  ------------- Upload SCA dependency files
09:51:16.326 INFO  Sensor cache published successfully
09:51:17.482 INFO  Analysis total time: 2:14.563 min
09:51:17.484 INFO  SonarScanner Engine completed successfully
09:51:17.970 INFO  EXECUTION SUCCESS
09:51:17.971 INFO  Total time: 2:21.538s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45331846184 — dark (conclusion: `cancelled`), 2026-11-24 05:14 UTC
- Dark since: 2026-11-24 05:14 UTC (first run of the current streak)
- Job / step: `windows-arm64 / install and run on ARM64` → `Install the MSI, check it, run it, uninstall it`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
SHA256 digest of downloaded artifact is 79110b478012fc0e584d6f3040d0810a6fcedff95276860e3625df4833955649
Artifact download completed successfully.
Total of 1 artifact(s) downloaded
Download artifact has finished successfully
ok C:\Users\runneradmin\AppData\Local\Programs\ArtCraft\LightCraft\lightcraft.exe (ARM64)
ok C:\Users\runneradmin\AppData\Local\Programs\ArtCraft\LightCraft\lightcraft-cli.exe (ARM64)
ok lightcraft-cli.exe --version: lightcraft-cli 0.21.1
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
