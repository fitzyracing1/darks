<!-- dark-draft: storytold/craft-anything -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/craft-anything

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/craft-anything/issues/new
- **Stars:** 31267 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43351826331 — dark (conclusion: `failure`), 2026-11-13 02:23 UTC
- Dark since: 2026-11-12 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p craft-anything-ai --lib'

<details><summary>End of the job log</summary>

```
failures:
    rebuild::kinds::runs::tests::a_relative_project_runs_a_console_check
    rebuild::tests::console_study_keeps_two_real_observations_for_each_input
    rebuild::tests::picking_up_a_build::a_failed_turn_leaves_just_ask_questions_to_tell_with_the_next_message
    rebuild::tests::picking_up_a_build::a_skipped_scan_does_not_hide_the_builders_own_failure
test result: FAILED. 634 passed; 4 failed; 3 ignored; 0 measured; 0 filtered out; finished in 10.17s
error: test failed, to rerun pass `-p craft-anything-ai --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/craft-anything/actions/runs/43477273772 — dark (conclusion: `failure`), 2026-11-13 17:53 UTC
- Dark since: 2026-11-13 15:28 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
18:11:07.364 INFO  ------------- Upload SCA dependency files
18:11:08.950 INFO  Successfully sent architecture data
18:11:10.363 INFO  Sensor cache published successfully
18:11:11.660 INFO  Analysis total time: 1:15.412 min
18:11:11.662 INFO  SonarScanner Engine completed successfully
18:11:11.797 INFO  EXECUTION SUCCESS
18:11:11.797 INFO  Total time: 1:19.812s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining craft-anything!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
