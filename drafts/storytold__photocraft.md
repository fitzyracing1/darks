<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 81384 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Perf (nightly)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45312546433 — dark (conclusion: `cancelled`), 2026-11-24 02:27 UTC
- Dark since: 2026-11-18 02:26 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
test move_shift_click_tests::locked_top_layer_is_clicked_through_while_the_context_menu_still_lists_it ... ok
test move_shift_click_tests::pasteboard_only_empty_marquee_preserves_selection ... ok
test move_shift_click_tests::point_clicks_toggle_members_but_keep_the_singleton_and_plain_multi_selection ... ok
test move_shift_click_tests::shift_click_adds_shape_layers_one_after_another ... ok
test move_shift_click_tests::shift_drag_moves_the_layers_selected_after_the_press ... ok
test move_shift_click_tests::transparent_canvas_empty_marquee_preserves_selection ... ok
test move_shift_diagonal_tests::shift_drag_locks_to_the_eight_directions_and_alt_copies_along_them ... ok
##[error]The operation was canceled.
```

</details>

### Perf (nightly) (`.github/workflows/perf-nightly.yml`)

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/45540536281 — dark (conclusion: `cancelled`), 2026-11-25 03:31 UTC
- Dark since: 2026-11-18 03:29 UTC (first run of the current streak)
- Job / step: `perf (macOS, Apple GPU)` → `Run benchmarks`
- Likely cause: The job has exceeded the maximum execution time of 2h0m0s

<details><summary>End of the job log</summary>

```
   Compiling photocraft-engine v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/engine)
   Compiling photocraft-gpu v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/gpu)
   Compiling kittest v0.5.0
   Compiling memory-stats v1.2.0
   Compiling open v5.4.5
   Compiling egui_kittest v0.37.0 (https://github.com/storytold/egui.git?rev=a87d00caaec947ea781657c6ff410c9838016d18#a87d00ca)
   Compiling photocraft-testkit v0.23.1 (/Users/runner/work/photocraft/photocraft/crates/testkit)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
