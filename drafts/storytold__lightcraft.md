<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16106 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44090686337 — dark (conclusion: `failure`), 2026-11-17 13:14 UTC
- Dark since: 2026-11-17 02:58 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 8 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
16:03:37.371 INFO  ------------- Upload SCA dependency files
16:03:38.696 INFO  Successfully sent architecture data
16:03:41.026 INFO  Sensor cache published successfully
16:03:42.675 INFO  Analysis total time: 1:49.423 min
16:03:42.676 INFO  SonarScanner Engine completed successfully
16:03:43.151 INFO  EXECUTION SUCCESS
16:03:43.152 INFO  Total time: 1:55.593s
##[error]Coverage shard 7 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
