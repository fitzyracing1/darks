<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 26777 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/43518067215 — dark (conclusion: `cancelled`), 2026-11-13 22:17 UTC
- Dark since: 2026-11-13 18:23 UTC (first run of the current streak)
- Job / step: `portable / portable (macos-15, osx-arm64)` → `Build and test native projects`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.RenderTests.Main_window_pages_render(page: "toolbar", language: "en") [1 s]
  Passed Filee.App.Tests.SliceLabelFitTests.Every_label_of_every_built_in_donut_fits_its_slice_in_every_language(code: "fa") [28 s]
  Passed Filee.App.Tests.CropOverlayTests.Several_files_show_a_strip_with_how_each_went(language: "pl", dark: False) [1 s]
  Passed Filee.App.Tests.RenderTests.Main_window_pages_render(page: "toolbar", language: "hi") [1 s]
  Passed Filee.App.Tests.SliceLabelFitTests.Every_label_of_every_built_in_donut_fits_its_slice_in_every_language(code: "pt-BR") [25 s]
  Passed Filee.App.Tests.CropOverlayTests.Each_corner_drags_on_its_own [770 ms]
  Passed Filee.App.Tests.RenderTests.Main_window_pages_render(page: "about", language: "ar") [320 ms]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
