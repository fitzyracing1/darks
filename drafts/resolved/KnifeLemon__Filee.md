<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: resolved -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 30819 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/45517037679 — dark (conclusion: `cancelled`), 2026-11-25 00:18 UTC
- Dark since: 2026-11-24 15:10 UTC (first run of the current streak)
- Job / step: `windows / build (win-arm64)` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.BackgroundWindowTests.What_the_window_draws_is_what_the_file_gets(picture: "grey", background: "gradient", canvas: Auto, shadow: 45, corners: 3, rightToLeft: False) [419 ms]
  Passed Filee.App.Tests.CropOverlayTests.Perspective_mode_looks(language: "en", dark: False) [1 s]
  Passed Filee.App.Tests.SliceLabelFitTests.Every_label_of_every_built_in_donut_fits_its_slice_in_every_language(code: "bn-BD") [51 s]
  Passed Filee.App.Tests.SliceLabelLayoutTests.A_name_with_a_word_too_wide_for_a_full_donut_at_100_percent_doesnt_fit_whole [25 ms]
  Passed Filee.App.Tests.BackgroundWindowTests.What_the_window_draws_is_what_the_file_gets(picture: "screenshot", background: "gradient", canvas: Landscape, shadow: 100, corners: 20, rightToLeft: True) [467 ms]
  Passed Filee.App.Tests.CropOverlayTests.Dragging_shows_the_grid_and_the_size_chip_follows_the_frame [1 s]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
