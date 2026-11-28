<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 81870 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Perf (nightly)", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45928428545 — dark (conclusion: `cancelled`), 2026-11-27 02:27 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
test move_shift_click_tests::pasteboard_only_empty_marquee_preserves_selection ... ok
test move_shift_click_tests::point_clicks_toggle_members_but_keep_the_singleton_and_plain_multi_selection ... ok
test move_shift_click_tests::shift_click_adds_shape_layers_one_after_another ... ok
test move_shift_click_tests::shift_drag_moves_the_layers_selected_after_the_press ... ok
test move_shift_click_tests::transparent_canvas_empty_marquee_preserves_selection ... ok
test move_shift_diagonal_tests::shift_drag_locks_to_the_eight_directions_and_alt_copies_along_them ... ok
test move_target_default_tests::a_saved_choice_is_kept_and_only_a_missing_key_gets_layer ... ok
##[error]The operation was canceled.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45934550833 — dark (conclusion: `cancelled`), 2026-11-27 03:30 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling egui_extras v0.37.0 (https://github.com/storytold/egui.git?rev=b9770908e0f304896f9658d239a7b29cf8af1564#b9770908)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling kittest v0.5.0
   Compiling memory-stats v1.2.0
   Compiling open v5.4.5
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=b9770908e0f304896f9658d239a7b29cf8af1564#b9770908)
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/46078551115 — dark (conclusion: `failure`), 2026-11-27 22:45 UTC
- Dark since: 2026-11-27 21:29 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 3 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
00:10:06.972 INFO  Successfully sent architecture data
00:10:06.972 INFO  ------------- Upload SCA dependency files
00:10:08.949 INFO  Sensor cache published successfully
00:10:12.332 INFO  Analysis total time: 3:50.864 min
00:10:12.333 INFO  SonarScanner Engine completed successfully
00:10:12.489 INFO  EXECUTION SUCCESS
00:10:12.490 INFO  Total time: 3:56.519s
##[error]Coverage shard 3 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
