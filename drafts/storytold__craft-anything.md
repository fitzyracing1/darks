<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 32107 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43546216837 — dark (conclusion: `failure`), 2026-11-14 02:25 UTC
- Dark since: 2026-11-12 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-ai --lib'

<details><summary>End of the job log</summary>

```
  left: 0
 right: 3
failures:
    rebuild::kinds::runs::tests::a_relative_project_runs_a_console_check
    rebuild::tests::console_study_keeps_two_real_observations_for_each_input
test result: FAILED. 642 passed; 2 failed; 3 ignored; 0 measured; 0 filtered out; finished in 10.48s
error: test failed, to rerun pass `-p craft-anything-ai --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43586574907 — dark (conclusion: `failure`), 2026-11-14 10:42 UTC
- Dark since: 2026-11-14 10:42 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 3 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
10:55:00.451 INFO  ------------- Upload SCA dependency files
10:55:01.679 INFO  Successfully sent architecture data
10:55:03.484 INFO  Sensor cache published successfully
10:55:04.805 INFO  Analysis total time: 1:08.611 min
10:55:04.807 INFO  SonarScanner Engine completed successfully
10:55:04.974 INFO  EXECUTION SUCCESS
10:55:04.975 INFO  Total time: 1:13.454s
##[error]Coverage shard 3 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
