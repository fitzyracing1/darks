<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18891 · **Generated:** 2026-11-23T12:44:06.505Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/45104736898 — dark (conclusion: `failure`), 2026-11-23 03:13 UTC
- Dark since: 2026-11-22 22:58 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 1 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
03:55:29.342 INFO  ------------- Upload SCA dependency files
03:55:30.435 INFO  Successfully sent architecture data
03:55:31.449 INFO  Sensor cache published successfully
03:55:32.755 INFO  Analysis total time: 2:24.613 min
03:55:32.757 INFO  SonarScanner Engine completed successfully
03:55:33.247 INFO  EXECUTION SUCCESS
03:55:33.248 INFO  Total time: 2:31.851s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
