<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 14637 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/40197625041 — dark (conclusion: `cancelled`), 2026-10-25 13:26 UTC
- Dark since: 2026-10-23 15:45 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Generate Rust coverage`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
test tests_album_picker::import_review::import_album_picker_follows_custom_sidebar_order ... ok
test tests_album_picker::import_review::import_album_picker_handles_an_empty_catalog ... ok
test tests_album_picker::import_review::import_album_picker_keeps_the_new_name_inside_the_dialog ... ok
test slideshow_export::tests::video_dialog_asks_for_an_mp4_and_jpeg_for_a_folder_name ... ok
test tests_album_picker::import_review::import_album_picker_localizes_choices_in_every_shipped_language ... ok
test tests_album_picker::import_review::import_album_picker_fits_long_names_across_themes_sizes_and_densities ... ok
test tests_album_picker::import_review::import_album_picker_retains_none_new_and_existing_transitions ... ok
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
