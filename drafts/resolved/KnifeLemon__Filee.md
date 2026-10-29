<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: resolved -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** resolved — lit again (2026-10-29); nothing to file
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 17103 · **Generated:** 2026-10-29T12:46:05.949Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/40871341963 — dark (conclusion: `cancelled`), 2026-10-29 12:12 UTC
- Dark since: 2026-10-29 05:05 UTC (first run of the current streak)
- Job / step: `build` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.RenderTests.Preset_editor_shows_and_saves_the_fits_options(language: "ko") [145 ms]
  Passed Filee.App.Tests.RenderTests.Preset_editor_shows_and_saves_the_fits_options(language: "pt-PT") [191 ms]
  Passed Filee.App.Tests.RenderTests.Preset_editor_shows_and_saves_the_fits_options(language: "en") [178 ms]
  Passed Filee.App.Tests.RenderTests.Preset_editor_offers_the_subfolder_only_for_several_files_with_a_subfolder(language: "ru", dark: False) [261 ms]
  Passed Filee.App.Tests.RenderTests.Preset_editor_offers_the_subfolder_only_for_several_files_with_a_subfolder(language: "ar", dark: True) [437 ms]
  Passed Filee.App.Tests.RenderTests.Preset_editor_offers_the_subfolder_only_for_several_files_with_a_subfolder(language: "en", dark: False) [232 ms]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
