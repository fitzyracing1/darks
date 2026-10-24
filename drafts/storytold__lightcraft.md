<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14491 · **Generated:** 2026-10-24T12:48:18.474Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/40079143424 — dark (conclusion: `cancelled`), 2026-10-24 08:43 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test headless::tests::control_resize_keeps_a_minimum_width_after_zooming_out ... ok
test headless::tests::control_resize_rounds_in_native_points_after_a_fractional_zoom_out ... ok
test headless::tests::control_resize_uses_effective_points_after_ui_zoom ... ok
test headless::tests::click_zoom_ratio_animates ... ok
test headless::tests::crop_keys ... ok
test headless::tests::crop_default_browsing_is_read_only_and_drag_is_one_edit ... ok
test headless::tests::demo_grid_snapshot_has_ui_pixels ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
