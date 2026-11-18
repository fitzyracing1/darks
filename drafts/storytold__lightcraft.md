<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16142 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44283042623 — dark (conclusion: `failure`), 2026-11-18 10:11 UTC
- Dark since: 2026-11-17 02:58 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 6 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
11:44:32.943 INFO  ------------- Upload SCA dependency files
11:44:34.605 INFO  Successfully sent architecture data
11:44:36.279 INFO  Sensor cache published successfully
11:44:37.991 INFO  Analysis total time: 2:11.613 min
11:44:37.993 INFO  SonarScanner Engine completed successfully
11:44:38.395 INFO  EXECUTION SUCCESS
11:44:38.396 INFO  Total time: 2:18.295s
##[error]Coverage shard 6 tests failed (exit 100); analysis was still uploaded
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44236239203 — dark (conclusion: `failure`), 2026-11-18 04:17 UTC
- Dark since: 2026-11-18 04:17 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/var/tmp/craft-target/debug/build/lightcraft/9d9393413b4ba0e9/out/lightcraft-9d9393413b4ba0e9' (signal: 11, SIGSEGV: invalid memory reference)

<details><summary>End of the job log</summary>

```
test window_gpu::tests::composition_only_changes_windows_dx12_presentation ... ok
test tests::ui_json_is_written_atomically ... ok
test window_gpu::tests::marker_records_the_failed_renderer ... ok
test window_gpu::tests::probe_fallback_is_silent ... ok
error: test failed, to rerun pass `-p lightcraft --bin lightcraft`
Caused by:
  process didn't exit successfully: `/var/tmp/craft-target/debug/build/lightcraft/9d9393413b4ba0e9/out/lightcraft-9d9393413b4ba0e9` (signal: 11, SIGSEGV: invalid memory reference)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
