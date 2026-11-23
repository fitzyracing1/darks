<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 81081 · **Generated:** 2026-11-23T06:58:02.022Z
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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45106488160 — dark (conclusion: `cancelled`), 2026-11-23 03:31 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling kittest v0.5.0
   Compiling memory-stats v1.2.0
   Compiling open v5.4.5
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=f5025284445ea19c35f746d96fc0b75468b3f560#f5025284)
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
   Compiling photocraft-engine v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/engine)
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45101030021 — dark (conclusion: `failure`), 2026-11-23 02:34 UTC
- Dark since: 2026-11-21 02:32 UTC (first run of the current streak)
- Job / step: `release / FreeBSD x86_64` → `Build and package`
- Likely cause: process didn't exit successfully: '/root/.rustup/toolchains/1.100.0-x86_64-unknown-freebsd/bin/rustc --crate-name photocraft --edition=2024 apps/photocraft/src/main.rs --error-format=json --json=diagnostic-rendered-ansi…

<details><summary>End of the job log</summary>

```
   Compiling quick-xml v0.42.0
   Compiling plist v1.10.3
   Compiling open v5.4.5
   Compiling photocraft-tablet v0.23.1 (/home/runner/work/photocraft/photocraft/crates/tablet)
error: could not compile `photocraft` (bin "photocraft")
Caused by:
  process didn't exit successfully: `/root/.rustup/toolchains/1.100.0-x86_64-unknown-freebsd/bin/rustc --crate-name photocraft --edition=2024 apps/photocraft/src/main.rs --error-format=json --json=diagnostic-rendered-an…
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
