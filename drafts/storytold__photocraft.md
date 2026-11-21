<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80821 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Perf (nightly)", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44855798189 — dark (conclusion: `failure`), 2026-11-21 02:25 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Set up the aarch64 cross toolchain`
- Likely cause: error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts

<details><summary>End of the job log</summary>

```
 59 148.3M  59 88.34M   0      0 516.0k      0   04:54   02:55   01:59 515.0k
 59 148.3M  59 88.74M   0      0 515.4k      0   04:54   02:56   01:58 514.9k
 60 148.3M  60 89.12M   0      0 514.4k      0   04:55   02:57   01:58 435.9k
 60 148.3M  60 89.78M   0      0 515.2k      0   04:54   02:58   01:56 475.5k
 60 148.3M  60 90.45M   0      0 516.2k      0   04:54   02:59   01:55 534.4k
curl: (28) Operation timed out after 180000 milliseconds with 95321564 out of 155595600 bytes received
error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts
##[error]Process completed with exit code 1.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44861309627 — dark (conclusion: `cancelled`), 2026-11-21 03:28 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=6525c87923ca47465aac244460fe4b1139349060#6525c879)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling kittest v0.5.0
   Compiling open v5.4.5
   Compiling memory-stats v1.2.0
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=6525c87923ca47465aac244460fe4b1139349060#6525c879)
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44856457485 — dark (conclusion: `failure`), 2026-11-21 02:32 UTC
- Dark since: 2026-11-21 02:32 UTC (first run of the current streak)
- Job / step: `release / Linux aarch64` → `Run storytold/craft-common-actions/actions/rust-channel@main`
- Likely cause: ModuleNotFoundError: No module named 'tomllib'

<details><summary>End of the job log</summary>

```
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions.__run;outcome=success;conclusion=success;duration_ms=591]
##[end-action id=__storytold_craft-common-actions_3.__storytold_craft-common-actions;outcome=success;conclusion=success;duration_ms=597]
##[start-action display=Run python3 "$CHANNEL";id=rust.channel]
Traceback (most recent call last):
  File "/home/runner/work/_actions/storytold/craft-common-actions/main/actions/rust-channel/channel.py", line 9, in <module>
    import tomllib
ModuleNotFoundError: No module named 'tomllib'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
