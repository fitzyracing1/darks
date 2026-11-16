<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11804 · **Generated:** 2026-11-16T12:52:35.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43813400300 — dark (conclusion: `failure`), 2026-11-16 05:55 UTC
- Dark since: 2026-11-15 05:37 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 1 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
07:22:15.720 INFO  ------------- Upload SCA dependency files
07:22:17.093 INFO  Successfully sent architecture data
07:22:18.756 INFO  Sensor cache published successfully
07:22:21.350 INFO  Analysis total time: 5:38.200 min
07:22:21.353 INFO  SonarScanner Engine completed successfully
07:22:21.516 INFO  EXECUTION SUCCESS
07:22:21.517 INFO  Total time: 5:44.989s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43813400374 — dark (conclusion: `failure`), 2026-11-16 05:55 UTC
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
