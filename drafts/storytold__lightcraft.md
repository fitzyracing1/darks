<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15916 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43360786720 — dark (conclusion: `failure`), 2026-11-13 03:42 UTC
- Dark since: 2026-11-12 11:28 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 6 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
04:50:31.393 INFO  ------------- Upload SCA dependency files
04:50:32.861 INFO  Successfully sent architecture data
04:50:34.650 INFO  Sensor cache published successfully
04:50:36.411 INFO  Analysis total time: 2:15.876 min
04:50:36.412 INFO  SonarScanner Engine completed successfully
04:50:36.847 INFO  EXECUTION SUCCESS
04:50:36.848 INFO  Total time: 2:21.891s
##[error]Coverage shard 4 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
