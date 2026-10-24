<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 71963 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Perf (nightly)", "SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/39896058423 — dark (conclusion: `failure`), 2026-10-23 03:38 UTC
- Dark since: 2026-10-23 03:38 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: wrote /Users/runner/work/photocraft/photocraft/target/perf/results.json

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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40041241850 — dark (conclusion: `cancelled`), 2026-10-23 23:43 UTC
- Dark since: 2026-10-23 13:54 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test retouch_cmds::tests::clone_stamp_sample_all_layers_onto_empty_layer_and_opacity ... ok
test retouch_cmds::tests::clone_stamp_samples_pre_stroke_state_and_non_aligned_returns_source ... ok
test retouch_cmds::tests::content_aware_extend_keeps_the_original ... ok
test retouch_cmds::tests::content_aware_move_coarse_preview_handles_transform_extend_and_limits has been running for over 60 seconds
test pixels::tests::tiled_adjustment_matches_one_pass_over_the_content ... ok
test retouch_cmds::tests::content_aware_move_fails_gracefully has been running for over 60 seconds
test retouch_cmds::tests::content_aware_move_fails_gracefully ... ok
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40041241880 — dark (conclusion: `failure`), 2026-10-23 23:43 UTC
- Dark since: 2026-10-23 23:43 UTC (first run of the current streak)
- Job / step: `test (windows-latest, unit)` → `Test`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
       2: photocraft_compose::cmyk::tests::the_split_route_agrees_with_the_exact_path
       3: <tempfile::file::NamedTempFile as core::io::seek::Seek>::seek
       4: core::ops::function::FnOnce::call_once
                 at /rustc/58cf8f9c35b355199727627d07ae34a4e2846d67/library\core\src\ops\function.rs:250
    note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
warning: 7612/9024 tests were not run due to test failure (run with --no-fail-fast to run all tests, or run with --max-fail)
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
