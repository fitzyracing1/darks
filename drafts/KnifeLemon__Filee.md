<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 12282 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/40250624401 — dark (conclusion: `cancelled`), 2026-10-26 00:42 UTC
- Dark since: 2026-10-25 23:16 UTC (first run of the current streak)
- Job / step: `build` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.ThemePageTests.Visual_picker_and_swatches_stay_in_sync_and_persist(language: "en", mode: Dark) [2 s]
  Passed Filee.App.Tests.MarkdownViewTests.Third_party_notices_render_as_headings_tables_and_links [595 ms]
  Passed Filee.App.Tests.PortugueseRenderTests.Editors_fit_at_the_default_window_width(language: "pt-PT", page: "presets") [2 s]
  Passed Filee.App.Tests.TagEditorTests.Leaving_the_box_keeps_what_was_typed [2 s]
  Passed Filee.App.Tests.ThemePageTests.Visual_picker_and_swatches_stay_in_sync_and_persist(language: "en", mode: Light) [2 s]
  Passed Filee.App.Tests.PortugueseLocalizationTests.Editorial_glossary_keeps_variant_specific_terms_separate(key: "about.sponsor", european: "Apoiar", brazilian: "Patrocinar") [1 s]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
