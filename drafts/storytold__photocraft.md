<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 79509 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Perf (nightly)", "SonarCloud", "CI", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43672542532 — dark (conclusion: `failure`), 2026-11-15 03:28 UTC
- Dark since: 2026-11-12 03:28 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: | P44 | Open .psd, 36 MP, 3 layers | track only | – | – | – | – | – | – | **missing**: bench 'interactive_bench' failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive…

<details><summary>End of the job log</summary>

```
| Id | Scenario | Target | Why | Issue |
|---|---|---|---|---|
| P15 | Zoom / pan frame time on a 15000×10000 16-bit document | ≤ 16 ms per frame | no headless canvas frame harness yet (zoom and pan sample the GPU texture in the egui paint callback) | [#209](https://github.com/stor…
| P23 | Warp / Puppet / Perspective preview at 4K | ≤ 16 ms per frame, commit in the background | the previews run inside the UI tools; no headless frame harness, no background commit | [#210](https://github.com/storyto…
| P34 | Brush preview memory, small dab on an 8K viewport | ≤ 2 MiB | the live brush preview buffers are UI-side; no headless counter yet | [#211](https://github.com/storytold/photocraft/issues/211) |
| P35 | Marquee drag on 24 MP with Alt/Shift | ≤ 17 ms p95 | Shift/Alt marquee modifiers don't exist yet (#208) and the drag preview is UI-side | [#211](https://github.com/storytold/photocraft/issues/211) |
wrote /Users/runner/work/photocraft/photocraft/target/perf/results.json
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43703979575 — dark (conclusion: `failure`), 2026-11-15 10:25 UTC
- Dark since: 2026-11-12 12:27 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
11:26:30.897 INFO  ------------- Upload SCA dependency files
11:26:32.365 INFO  Successfully sent architecture data
11:26:34.105 INFO  Sensor cache published successfully
11:26:36.537 INFO  Analysis total time: 4:42.105 min
11:26:36.539 INFO  SonarScanner Engine completed successfully
11:26:36.737 INFO  EXECUTION SUCCESS
11:26:36.738 INFO  Total time: 4:49.076s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43703979897 — dark (conclusion: `failure`), 2026-11-15 10:25 UTC
- Dark since: 2026-11-14 03:13 UTC (first run of the current streak)
- Job / step: `test (without heif)` → `Test without heif`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
                 at ./tests/it/svg.rs:353:68
       7: call_once<it::svg::gzip_compressed_embedded_svg_decompresses_once_with_a_size_cap::{closure_env#0}, ()>
                 at /rustc/0ef1bc386059596dada8fb65b50425aab2ea637a/library/core/src/ops/function.rs:250:5
       8: <fn() -> core::result::Result<(), alloc::string::String> as core::ops::function::FnOnce<()>>::call_once
                 at /rustc/0ef1bc386059596dada8fb65b50425aab2ea637a/library/core/src/ops/function.rs:250:5
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43667743768 — dark (conclusion: `cancelled`), 2026-11-15 02:25 UTC
- Dark since: 2026-11-15 02:25 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling aes v0.8.4
   Compiling cbc v0.1.2
   Compiling ecb v0.1.2
   Compiling rangemap v1.8.0
   Compiling photocraft-cli v0.23.1 (/home/runner/work/photocraft/photocraft/apps/photocraft-cli)
   Compiling xtask v0.23.1 (/home/runner/work/photocraft/photocraft/xtask)
   Compiling lopdf v0.38.0
##[error]The operation was canceled.
```

</details>

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43668275415 — dark (conclusion: `failure`), 2026-11-15 02:32 UTC
- Dark since: 2026-11-15 02:32 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Build and package`
- Likely cause: error: dist/release/photocraft-0.23.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET

<details><summary>End of the job log</summary>

```
   Compiling clap_complete v4.6.11
   Compiling photocraft-automation v0.23.1 (/home/runner/work/photocraft/photocraft/crates/automation)
    Finished `release` profile [optimized] target(s) in 13m 06s
wrote /home/runner/work/photocraft/photocraft/dist/release/photocraft-0.23.1-freebsd-x86_64.tar.gz
photocraft-cli 0.23.1 (2fec95b0d, 2026-11-15)
==> done
error: dist/release/photocraft-0.23.1-freebsd-x86_64.tar.gz is not a FreeBSD aarch64 archive; packaging/freebsd/package.sh must honor CARGO_BUILD_TARGET
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
