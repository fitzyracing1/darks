<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 21999 · **Generated:** 2026-11-05T00:53:42.006Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41937575213 — dark (conclusion: `cancelled`), 2026-11-04 23:56 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `build (win-arm64)` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.PortugueseRenderTests.Pages_render_at_minimum_width_in_both_themes(language: "pt-BR", page: "watch", dark: False, scale: 2) [793 ms]
  Passed Filee.App.Tests.ImageEditWindowTests.The_width_and_height_render(language: "ru", dark: False) [338 ms]
  Passed Filee.App.Tests.CropOverlayTests.A_pdf_opens_rectangular_with_perspective_unavailable_and_it_comes_back [3 s]
  Passed Filee.App.Tests.RenderTests.Main_window_pages_render(page: "general", language: "hi") [322 ms]
  Passed Filee.App.Tests.PortugueseRenderTests.Pages_render_at_minimum_width_in_both_themes(language: "pt-PT", page: "general", dark: False, scale: 2) [862 ms]
  Passed Filee.App.Tests.ImageEditWindowTests.The_width_and_height_render(language: "ko", dark: False) [354 ms]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
