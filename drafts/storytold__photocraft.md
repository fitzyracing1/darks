<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 79113 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("FreeBSD", "Perf (nightly)", "SonarCloud", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43351801650 — dark (conclusion: `failure`), 2026-11-13 02:23 UTC
- Dark since: 2026-11-12 02:25 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p xtask --lib'

<details><summary>End of the job log</summary>

```
thread 'psd_write_oracle::tests::export_batch_checks_reopened_result_and_propagates_command_failure' (550475) panicked at xtask/src/psd_write_oracle.rs:520:96:
called `Result::unwrap()` on an `Err` value: "start CLI: Text file busy (os error 26)"
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    psd_write_oracle::tests::export_batch_checks_reopened_result_and_propagates_command_failure
test result: FAILED. 12 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s
error: test failed, to rerun pass `-p xtask --lib`
##[error]Process completed with exit code 101.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43359229965 — dark (conclusion: `failure`), 2026-11-13 03:28 UTC
- Dark since: 2026-11-12 03:28 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: P44 Open .psd, 36 MP, 3 layers: **missing**: bench 'interactive_bench' failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  P40 Brush dab 60 px on 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  P41 Gaussian Blur r 40 on 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 1…
  P42 Curves dialog change, layer preview, 36 MP: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with…
  P43 Save .psd, 36 MP, 3 layers: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  P44 Open .psd, 36 MP, 3 layers: **missing**: bench `interactive_bench` failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  bench interactive_bench: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101
  bench large_file_bench: large_file_bench --reps 3 --json /Users/runner/work/photocraft/photocraft/target/perf/large_file_bench.json: exited with exit status: 1
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43425989591 — dark (conclusion: `cancelled`), 2026-11-13 12:32 UTC
- Dark since: 2026-11-12 12:27 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43352909287 — dark (conclusion: `failure`), 2026-11-13 02:32 UTC
- Dark since: 2026-11-13 02:32 UTC (first run of the current streak)
- Job / step: `credits / refresh` → `Refresh contributor credits for this release commit`
- Likely cause: Contributor refresh failed: gh failed: gh: HTTP 502

<details><summary>End of the job log</summary>

```
/home/runner/work/_temp/git-credentials-f8177b35-5147-453b-8fe2-e4d2ac904df9.config
/home/runner/work/_temp/git-credentials-f8177b35-5147-453b-8fe2-e4d2ac904df9.config
/github/runner_temp/git-credentials-f8177b35-5147-453b-8fe2-e4d2ac904df9.config
/github/runner_temp/git-credentials-f8177b35-5147-453b-8fe2-e4d2ac904df9.config
Removing credentials config '/home/runner/work/_temp/git-credentials-f8177b35-5147-453b-8fe2-e4d2ac904df9.config'
##[start-action display=Generate and validate contributor credits;id=__self.__run]
Contributor refresh failed: gh failed: gh: HTTP 502
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43402283101 — dark (conclusion: `failure`), 2026-11-13 09:33 UTC
- Dark since: 2026-11-13 09:33 UTC (first run of the current streak)
- Job / step: `select platforms` → `Git dependencies come from storytold`
- Likely cause: SSL error: unknown error; class=Ssl (16)

<details><summary>End of the job log</summary>

```
  revision 09dcbc225b95232998498a40ca56e24716571d53 not found
Caused by:
  network failure seems to have happened
  if a proxy or similar is necessary `net.git-fetch-with-cli` may help here
  https://doc.rust-lang.org/cargo/reference/config.html#netgit-fetch-with-cli
Caused by:
  SSL error: unknown error; class=Ssl (16)
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
