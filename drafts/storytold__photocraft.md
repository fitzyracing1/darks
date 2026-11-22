<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80966 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("FreeBSD", "Perf (nightly)", "Release", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44976143217 — dark (conclusion: `failure`), 2026-11-22 02:27 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Set up the aarch64 cross toolchain`
- Likely cause: error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts

<details><summary>End of the job log</summary>

```
 86 148.3M  86 128.5M   0      0 750.8k      0   03:22   02:55   00:27 676.4k
 87 148.3M  87 129.6M   0      0 752.9k      0   03:21   02:56   00:25 769.8k
 87 148.3M  87 130.3M   0      0 752.7k      0   03:21   02:57   00:24 787.4k
 88 148.3M  88 130.9M   0      0 751.9k      0   03:22   02:58   00:24 822.1k
 88 148.3M  88 131.8M   0      0 752.9k      0   03:21   02:59   00:22 877.3k
curl: (28) Operation timed out after 180000 milliseconds with 139214300 out of 155595600 bytes received
error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts
##[error]Process completed with exit code 1.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44980802471 — dark (conclusion: `cancelled`), 2026-11-22 03:28 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=8a3c5ecb29ab8679d57035f2cb51d7ec8a5c080f#8a3c5ecb)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling kittest v0.5.0
   Compiling memory-stats v1.2.0
   Compiling open v5.4.5
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=8a3c5ecb29ab8679d57035f2cb51d7ec8a5c080f#8a3c5ecb)
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44976646035 — dark (conclusion: `failure`), 2026-11-22 02:33 UTC
- Dark since: 2026-11-21 02:32 UTC (first run of the current streak)
- Job / step: `release / Linux aarch64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=567]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=573]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45012450601 — dark (conclusion: `failure`), 2026-11-22 10:26 UTC
- Dark since: 2026-11-22 05:03 UTC (first run of the current streak)
- Job / step: `gate / test 3/4 (artcraft-k8s-trusted)` → `Gate`
- Likely cause: skip  panic_hunt

<details><summary>End of the job log</summary>

```
    stack backtrace:
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
error: test run failed
error: ci failed at `test`
CI summary:
  FAIL  test: cargo nextest run --profile ci --binaries-metadata /home/runner/_work/photocraft/photocraft/target/nextest-archive/target/nextest/binaries-metadata.json --cargo-metadata /home/runner/_work/photocraft/photo…
  skip  panic_hunt
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45012450572 — dark (conclusion: `failure`), 2026-11-22 10:26 UTC
- Dark since: 2026-11-22 05:03 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 3 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
11:24:13.725 INFO  ------------- Upload SCA dependency files
11:24:14.901 INFO  Successfully sent architecture data
11:24:16.307 INFO  Sensor cache published successfully
11:24:18.988 INFO  Analysis total time: 3:22.936 min
11:24:18.991 INFO  SonarScanner Engine completed successfully
11:24:19.077 INFO  EXECUTION SUCCESS
11:24:19.078 INFO  Total time: 3:28.981s
##[error]Coverage shard 3 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
