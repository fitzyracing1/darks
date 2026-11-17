<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** resolved — lit again (2026-11-17); nothing to file
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11811 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43912632630 — dark (conclusion: `failure`), 2026-11-16 16:54 UTC
- Dark since: 2026-11-15 05:37 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 3 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
17:57:38.293 INFO  ------------- Upload SCA dependency files
17:57:39.337 INFO  Successfully sent architecture data
17:57:40.487 INFO  Sensor cache published successfully
17:57:42.740 INFO  Analysis total time: 4:31.452 min
17:57:42.742 INFO  SonarScanner Engine completed successfully
17:57:42.810 INFO  EXECUTION SUCCESS
17:57:42.811 INFO  Total time: 4:37.455s
##[error]Coverage shard 3 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43913414503 — dark (conclusion: `failure`), 2026-11-16 16:58 UTC
- Dark since: 2026-11-16 05:55 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
  skip  brands
  skip  cursors
  skip  i18n-report
  skip  ui-commands
  skip  layers
  skip  wasm
error: ci failed at `test`
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
