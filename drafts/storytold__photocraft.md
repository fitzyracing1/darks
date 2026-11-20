<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 80648 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("FreeBSD", "Perf (nightly)", "SonarCloud", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44660713361 — dark (conclusion: `failure`), 2026-11-20 02:25 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Set up the aarch64 cross toolchain`
- Likely cause: error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts

<details><summary>End of the job log</summary>

```
 90 148.3M  90 133.7M   0      0 781.8k      0   03:14   02:55   00:19 544.8k
 90 148.3M  90 134.5M   0      0 781.6k      0   03:14   02:56   00:18 614.4k
 91 148.3M  91 135.7M   0      0 784.3k      0   03:13   02:57   00:16 741.8k
 91 148.3M  91 136.4M   0      0 784.0k      0   03:13   02:58   00:15 767.3k
 92 148.3M  92 137.4M   0      0 785.4k      0   03:13   02:59   00:14 883.5k
curl: (28) Operation timed out after 180000 milliseconds with 144834012 out of 155595600 bytes received
error: could not fetch https://download.freebsd.org/releases/arm64/aarch64/15.1-RELEASE/base.txz after 3 attempts
##[error]Process completed with exit code 1.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44668055682 — dark (conclusion: `cancelled`), 2026-11-20 03:29 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling photocraft-ui-egui v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/ui-egui)
   Compiling photocraft-ops v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/ops)
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=e9711ca9b69772f875ae0d1cef1977ff8c16234d#e9711ca9)
   Compiling photocraft-engine v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/engine)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling memory-stats v1.2.0
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44725582264 — dark (conclusion: `cancelled`), 2026-11-20 11:11 UTC
- Dark since: 2026-11-19 16:52 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/44725608544 — dark (conclusion: `failure`), 2026-11-20 11:11 UTC
- Dark since: 2026-11-20 11:11 UTC (first run of the current streak)
- Job / step: `corpus tests` → `Corpus tests`
- Likely cause: error: cargo test --release --features corpus,heif (photocraft-io, photocraft-engine): exited with exit status: 101

<details><summary>End of the job log</summary>

```
    |                                  ^^^^^^^^^^^ cannot borrow as mutable
    |
    = help: trait `DerefMut` is required to modify through a dereference, but it is not implemented for `DocState`
For more information about this error, try `rustc --explain E0596`.
error: could not compile `photocraft-engine` (lib test) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
error: cargo test --release --features corpus,heif (photocraft-io, photocraft-engine): exited with exit status: 101
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
