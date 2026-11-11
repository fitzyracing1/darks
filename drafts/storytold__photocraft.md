<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 78698 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Perf (nightly)", "FreeBSD", "SonarCloud", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42952965150 — dark (conclusion: `failure`), 2026-11-11 03:28 UTC
- Dark since: 2026-11-02 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: P44 Open .psd, 36 MP, 3 layers: **missing**: bench 'interactive_bench' failed: interactive_bench --reps 5 --json /Users/runner/work/photocraft/photocraft/target/perf/interactive_bench.json: exited with exit status: 101

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

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/42945698932 — dark (conclusion: `failure`), 2026-11-11 02:23 UTC
- Dark since: 2026-11-09 02:25 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p photocraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
thread 'canvas::background_redraw::tests::a_redraw_across_a_text_gamma_change_and_back_is_not_kept' (998937) panicked at crates/ui-egui/src/canvas/background_redraw/tests.rs:352:5:
the redraw finished before the change back
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    canvas::background_redraw::tests::a_redraw_across_a_text_gamma_change_and_back_is_not_kept
test result: FAILED. 6561 passed; 1 failed; 24 ignored; 0 measured; 0 filtered out; finished in 279.16s
error: test failed, to rerun pass `-p photocraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43076485459 — dark (conclusion: `cancelled`), 2026-11-11 18:18 UTC
- Dark since: 2026-11-10 23:50 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/43065948556 — dark (conclusion: `failure`), 2026-11-11 17:12 UTC
- Dark since: 2026-11-11 07:07 UTC (first run of the current streak)
- Job / step: `test (windows-latest, unit)` → `Test`
- Likely cause: error: command ''C:\Users\runneradmin\.rustup\toolchains\stable-x86_64-pc-windows-msvc\bin\cargo.exe' '--color=always' metadata '--format-version=1' --all-features '--filter-platform=x86_64-pc-windows-msvc' --locked' fa…

<details><summary>End of the job log</summary>

```
host: x86_64-pc-windows-msvc
##[end-action id=__taiki-e_install-action.__run_2;outcome=success;conclusion=success;duration_ms=2811]
error: process didn't exit successfully: `sccache 'C:\Users\runneradmin\.rustup\toolchains\stable-x86_64-pc-windows-msvc\bin\rustc.exe' -vV` (exit code: 2)
--- stderr
sccache: error: Timed out waiting for server startup. Maybe the remote service is unreachable?
Run with SCCACHE_LOG=debug SCCACHE_NO_DAEMON=1 to get more information
error: command `'C:\Users\runneradmin\.rustup\toolchains\stable-x86_64-pc-windows-msvc\bin\cargo.exe' '--color=always' metadata '--format-version=1' --all-features '--filter-platform=x86_64-pc-windows-msvc' --locked` fa…
##[error]Process completed with exit code 102.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
