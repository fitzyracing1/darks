<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14434 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/39996351427 — dark (conclusion: `cancelled`), 2026-10-23 17:35 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: Canceling since a higher priority waiting request for sonarcloud-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test tests_tone::the_base_plane_is_cached_per_process ... ok
test tests_window::a_spot_overlapping_the_window_edge_matches_the_whole_render ... ok
test tests_window::a_mask_overlay_window_matches_the_whole_render has been running for over 60 seconds
test tests_window::a_window_matches_the_full_render ... ok
test tests_window::a_spot_with_its_source_outside_the_window_matches_the_whole_render ... ok
test tests_window::a_window_of_a_huge_frame_is_cheap ... ok
test tests_window::an_automatic_spot_source_does_not_depend_on_the_window ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
