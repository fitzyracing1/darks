<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14653 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/40237755936 — dark (conclusion: `cancelled`), 2026-10-25 21:55 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 2/4` → `Run this shard's tests`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
    thread 'tests_preview_limit::in_the_loupe::one_to_one_is_a_canvas_sized_frame_plus_a_native_window' (20215) panicked at crates/ui-egui/src/tests_preview_limit.rs:188:39:
    its texture
    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
        PASS [   0.078s] (1170/1254) lightcraft-ui-egui tests_print::printing_shows_a_row_in_the_activity_stack_and_stops
        SLOW [>180.000s] (─────────) lightcraft-ui-egui tests_preview_limit::in_the_loupe::side_by_side_at_one_to_one_decodes_the_original_once
        SLOW [>120.000s] (─────────) lightcraft-ui-egui tests_preview_limit::in_the_loupe::the_window_lines_up_with_the_whole_frame_render
        SLOW [> 60.000s] (─────────) lightcraft-ui-egui tests_print::dragging_a_cell_snaps_to_its_neighbour_when_snap_is_on
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
