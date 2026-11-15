<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16021 · **Generated:** 2026-11-15T18:36:31.465Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43667123980 — dark (conclusion: `failure`), 2026-11-15 02:18 UTC
- Dark since: 2026-11-15 02:18 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Build and package`
- Likely cause: error: dist/release/lightcraft-0.21.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET

<details><summary>End of the job log</summary>

```
   Compiling lightcraft-mcp v0.21.1 (/home/runner/work/lightcraft/lightcraft/crates/mcp)
   Compiling lightcraft-cli v0.21.1 (/home/runner/work/lightcraft/lightcraft/apps/lightcraft-cli)
    Finished `release` profile [optimized + debuginfo] target(s) in 25m 00s
wrote /home/runner/work/lightcraft/lightcraft/dist/release/lightcraft-0.21.1-freebsd-x86_64.tar.gz
lightcraft-cli 0.21.1
==> done
error: dist/release/lightcraft-0.21.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43720377852 — dark (conclusion: `failure`), 2026-11-15 13:42 UTC
- Dark since: 2026-11-15 12:17 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 8 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
16:13:49.467 INFO  ------------- Upload SCA dependency files
16:13:50.731 INFO  Successfully sent architecture data
16:13:52.399 INFO  Sensor cache published successfully
16:13:53.920 INFO  Analysis total time: 1:40.114 min
16:13:53.921 INFO  SonarScanner Engine completed successfully
16:13:54.372 INFO  EXECUTION SUCCESS
16:13:54.372 INFO  Total time: 1:44.941s
##[error]Coverage shard 6 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
