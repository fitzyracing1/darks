<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16206 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44541625014 — dark (conclusion: `failure`), 2026-11-19 14:14 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 7 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
15:42:10.189 INFO  ------------- Upload SCA dependency files
15:42:11.646 INFO  Successfully sent architecture data
15:42:13.761 INFO  Sensor cache published successfully
15:42:15.354 INFO  Analysis total time: 2:17.699 min
15:42:15.356 INFO  SonarScanner Engine completed successfully
15:42:15.849 INFO  EXECUTION SUCCESS
15:42:15.850 INFO  Total time: 2:24.996s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
