<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/filmcraft

- **Status:** resolved — lit again (2026-11-18); nothing to file
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 18529 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/44279547228 — dark (conclusion: `failure`), 2026-11-18 09:49 UTC
- Dark since: 2026-11-18 09:23 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
10:17:48.486 INFO  ------------- Upload SCA dependency files
10:17:50.127 INFO  Successfully sent architecture data
10:17:51.369 INFO  Sensor cache published successfully
10:17:52.775 INFO  Analysis total time: 2:12.578 min
10:17:52.776 INFO  SonarScanner Engine completed successfully
10:17:53.221 INFO  EXECUTION SUCCESS
10:17:53.222 INFO  Total time: 2:19.915s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/44279546986 — dark (conclusion: `failure`), 2026-11-18 09:49 UTC
- Dark since: 2026-11-18 09:23 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: failed: "/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo" "nextest" "run" "--workspace" "--lib" "--bins" "--tests" "--no-fail-fast"

<details><summary>End of the job log</summary>

```
     Running tests/it/main.rs (target/debug/build/filmcraft-web/4dc56294c1b4cf51/out/it-4dc56294c1b4cf51)
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 13 filtered out; finished in 0.00s
     Running unittests src/main.rs (target/debug/build/xtask/7dd990ea25aedf8c/out/xtask-7dd990ea25aedf8c)
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 18 filtered out; finished in 0.00s
failed: "/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo" "nextest" "run" "--workspace" "--lib" "--bins" "--tests" "--no-fail-fast"
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
