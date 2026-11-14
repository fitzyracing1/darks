<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15983 · **Generated:** 2026-11-14T18:37:03.336Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43609844946 — dark (conclusion: `failure`), 2026-11-14 15:22 UTC
- Dark since: 2026-11-12 11:28 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 7 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
16:51:26.823 INFO  ------------- Upload SCA dependency files
16:51:28.094 INFO  Successfully sent architecture data
16:51:29.665 INFO  Sensor cache published successfully
16:51:31.170 INFO  Analysis total time: 1:24.099 min
16:51:31.171 INFO  SonarScanner Engine completed successfully
16:51:31.642 INFO  EXECUTION SUCCESS
16:51:31.642 INFO  Total time: 1:28.951s
##[error]Coverage shard 2 tests failed (exit 100); analysis was still uploaded
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43555779728 — dark (conclusion: `failure`), 2026-11-14 04:16 UTC
- Dark since: 2026-11-14 04:16 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p lightcraft-engine --lib'

<details><summary>End of the job log</summary>

```
noise 0.01: none 1180486 B, ZIP 1214459 B (+2.9 %), LZW 1136338 B (-3.7 %)
thread 'export::tests::sixteen_bit_zip_tiff_is_never_larger_than_uncompressed' (115495) panicked at crates/engine/src/export/tests.rs:962:9:
noise 0.01: 16-bit ZIP 1214459 B is larger than uncompressed 1180486 B
failures:
    export::tests::sixteen_bit_zip_tiff_is_never_larger_than_uncompressed
test result: FAILED. 1716 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 137.15s
error: test failed, to rerun pass `-p lightcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
