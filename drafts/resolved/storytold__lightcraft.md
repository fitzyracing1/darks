<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/lightcraft

- **Status:** resolved — lit again (2026-11-16); nothing to file
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 16036 · **Generated:** 2026-11-16T00:59:22.034Z
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

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/43765135252 — dark (conclusion: `failure`), 2026-11-15 21:42 UTC
- Dark since: 2026-11-15 12:17 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 6 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
00:00:10.326 INFO  ------------- Upload SCA dependency files
00:00:11.499 INFO  Successfully sent architecture data
00:00:13.890 INFO  Sensor cache published successfully
00:00:15.414 INFO  Analysis total time: 1:41.551 min
00:00:15.415 INFO  SonarScanner Engine completed successfully
00:00:15.852 INFO  EXECUTION SUCCESS
00:00:15.853 INFO  Total time: 1:46.275s
##[error]Coverage shard 3 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
