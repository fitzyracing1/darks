<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 72047 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Perf (nightly)", "SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40058999887 — dark (conclusion: `failure`), 2026-10-24 03:36 UTC
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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40052993411 — dark (conclusion: `cancelled`), 2026-10-24 02:09 UTC
- Dark since: 2026-10-23 13:54 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test retouch_cmds::tests::content_aware_move_fails_gracefully ... ok
test retouch_cmds::tests::content_aware_move_moves_the_object_and_fills_its_place_at_all_depths has been running for over 60 seconds
test retouch_cmds::tests::content_aware_move_coarse_preview_handles_transform_extend_and_limits ... ok
test retouch_cmds::content_aware_move::tests::a_preview_within_the_full_resolution_budget_is_the_plain_solve_bit_for_bit ... ok
test retouch_cmds::tests::content_aware_move_moves_the_object_and_fills_its_place_at_all_depths ... ok
test retouch_cmds::tests::content_aware_move_overlapping_at_the_edge_and_on_other_targets has been running for over 60 seconds
test retouch_cmds::tests::content_aware_move_preview_shows_the_result_without_touching_the_session ... ok
##[error]The operation was canceled.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40054875853 — dark (conclusion: `failure`), 2026-10-24 02:36 UTC
- Dark since: 2026-10-24 02:36 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p photocraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
thread 'background_redraw::tests::an_edit_during_a_redraw_is_not_overwritten_by_blocks_drawn_before_it' (541967) panicked at crates/ui-egui/src/background_redraw_tests.rs:220:5:
the redraw goes on
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    background_redraw::tests::an_edit_during_a_redraw_is_not_overwritten_by_blocks_drawn_before_it
test result: FAILED. 3792 passed; 1 failed; 18 ignored; 0 measured; 0 filtered out; finished in 134.63s
error: test failed, to rerun pass `-p photocraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
