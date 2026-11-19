<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16175 · **Generated:** 2026-11-19T06:47:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44458408454 — dark (conclusion: `failure`), 2026-11-19 04:27 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 2 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
06:04:46.322 INFO  ------------- Upload SCA dependency files
06:04:48.006 INFO  Successfully sent architecture data
06:04:50.222 INFO  Sensor cache published successfully
06:04:51.783 INFO  Analysis total time: 2:27.857 min
06:04:51.785 INFO  SonarScanner Engine completed successfully
06:04:52.313 INFO  EXECUTION SUCCESS
06:04:52.314 INFO  Total time: 2:34.945s
##[error]Coverage shard 2 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
