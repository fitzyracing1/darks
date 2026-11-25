<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16400 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/45570373437 — dark (conclusion: `failure`), 2026-11-25 07:43 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 6 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
09:07:29.789 INFO  Successfully sent architecture data
09:07:29.789 INFO  ------------- Upload SCA dependency files
09:07:31.481 INFO  Sensor cache published successfully
09:07:32.817 INFO  Analysis total time: 1:44.174 min
09:07:32.818 INFO  SonarScanner Engine completed successfully
09:07:33.296 INFO  EXECUTION SUCCESS
09:07:33.297 INFO  Total time: 1:50.117s
##[error]Coverage shard 2 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
