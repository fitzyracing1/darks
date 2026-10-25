<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 72406 · **Generated:** 2026-10-25T01:15:05.160Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #9119](https://github.com/storytold/photocraft/issues/9119) "Background redraw test fails when the worker finishes before the edit (flaky on FreeBSD nightly)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Perf (nightly)", "SonarCloud")
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

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/40144258491 — dark (conclusion: `cancelled`), 2026-10-24 23:49 UTC
- Dark since: 2026-10-23 13:54 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test zoom_window_fit::tests::nothing_to_wrap_asks_for_nothing ... ok
test zoom_window_fit::tests::the_window_makes_room_for_the_scrollbars ... ok
test zoom_window_fit::tests::the_window_stays_between_the_minimum_and_the_screen ... ok
test zoom_window_fit::tests::the_window_wraps_the_image_at_its_zoom ... ok
test zoom_window_fit::tests::only_a_zoom_change_with_the_preference_on_resizes ... ok
test zoom_window_fit::tests::with_the_preference_off_the_window_keeps_its_size ... ok
test zoom_window_fit::tests::the_zoom_tool_options_bar_shows_the_same_setting ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
