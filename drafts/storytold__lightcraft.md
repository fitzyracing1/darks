<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16216 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44675109124 — dark (conclusion: `failure`), 2026-11-20 04:32 UTC
- Dark since: 2026-11-18 23:57 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 6 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
05:26:27.813 INFO  ------------- Upload SCA dependency files
05:26:29.347 INFO  Successfully sent architecture data
05:26:31.036 INFO  Sensor cache published successfully
05:26:32.554 INFO  Analysis total time: 2:09.279 min
05:26:32.555 INFO  SonarScanner Engine completed successfully
05:26:33.036 INFO  EXECUTION SUCCESS
05:26:33.036 INFO  Total time: 2:16.482s
##[error]Coverage shard 3 tests failed (exit 100); analysis was still uploaded
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/44673419303 — dark (conclusion: `failure`), 2026-11-20 04:17 UTC
- Dark since: 2026-11-20 04:17 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: process didn't exit successfully: '/var/tmp/craft-target/debug/build/lightcraft/cb971947e928aa38/out/lightcraft-cb971947e928aa38' (signal: 11, SIGSEGV: invalid memory reference)

<details><summary>End of the job log</summary>

```
test window_gpu::tests::composition_only_changes_windows_dx12_presentation ... ok
test window_gpu::tests::marker_records_the_failed_renderer ... ok
test tests::ui_json_is_written_atomically ... ok
test window_gpu::tests::probe_fallback_is_silent ... ok
error: test failed, to rerun pass `-p lightcraft --bin lightcraft`
Caused by:
  process didn't exit successfully: `/var/tmp/craft-target/debug/build/lightcraft/cb971947e928aa38/out/lightcraft-cb971947e928aa38` (signal: 11, SIGSEGV: invalid memory reference)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
