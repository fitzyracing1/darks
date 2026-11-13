<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/filmcraft

- **Status:** resolved — lit again (2026-11-13); nothing to file
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18173 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/43374645394 — dark (conclusion: `failure`), 2026-11-13 05:50 UTC
- Dark since: 2026-11-13 00:08 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
06:33:57.991 INFO  ------------- Upload SCA dependency files
06:33:59.274 INFO  Successfully sent architecture data
06:34:01.795 INFO  Sensor cache published successfully
06:34:03.357 INFO  Analysis total time: 2:39.598 min
06:34:03.358 INFO  SonarScanner Engine completed successfully
06:34:03.796 INFO  EXECUTION SUCCESS
06:34:03.797 INFO  Total time: 2:46.470s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
