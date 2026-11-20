<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11946 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("SonarCloud", "CI", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44699346975 — dark (conclusion: `failure`), 2026-11-20 08:02 UTC
- Dark since: 2026-11-18 03:14 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
09:28:54.038 INFO  ------------- Upload SCA dependency files
09:28:55.289 INFO  Successfully sent architecture data
09:28:56.342 INFO  Sensor cache published successfully
09:28:58.992 INFO  Analysis total time: 6:14.324 min
09:28:58.996 INFO  SonarScanner Engine completed successfully
09:28:59.177 INFO  EXECUTION SUCCESS
09:28:59.178 INFO  Total time: 6:20.889s
##[error]Coverage shard 4 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44699346852 — dark (conclusion: `failure`), 2026-11-20 08:02 UTC
- Dark since: 2026-11-19 23:22 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: Compiling xtask v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/xtask)

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-ui-egui v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/ui-egui)
   Compiling vectorcraft v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft)
   Compiling vectorcraft-testkit v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/testkit)
   Compiling vectorcraft-mcp v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/crates/mcp)
   Compiling vectorcraft-web v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
   Compiling vectorcraft-cli v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
   Compiling xtask v0.24.1 (/home/runner/work/vectorcraft/vectorcraft/xtask)
##[error]Process completed with exit code 143.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/44673985543 — dark (conclusion: `failure`), 2026-11-20 04:22 UTC
- Dark since: 2026-11-20 04:22 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-eps --lib'

<details><summary>End of the job log</summary>

```
thread 'import::tests::search_in_a_loop_runs_out_of_the_budget' (216675) panicked at crates/eps/src/import/tests.rs:1239:101:
reading 0 0 10 10 rectfill /h 4194304 string def /n 2097152 string def n 2097152 1 sub 1 put { h n search { pop pop pop } { pop } ifelse } loop did not finish
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    import::tests::search_in_a_loop_runs_out_of_the_budget
test result: FAILED. 1842 passed; 1 failed; 8 ignored; 0 measured; 0 filtered out; finished in 479.86s
error: test failed, to rerun pass `-p vectorcraft-eps --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
