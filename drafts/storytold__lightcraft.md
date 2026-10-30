<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15064 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41008578053 — dark (conclusion: `failure`), 2026-10-30 05:27 UTC
- Dark since: 2026-10-30 05:27 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
      1× set LIGHTCRAFT_SAM3_DIR and LIGHTCRAFT_SAM3_REF (segment/it::reference::matches_reference)
  fonts (2): needs craft-fonts (`CRAFT_FONTS_DIR`, see the README)
      1× ru: built without a craft-fonts face for Cyrl (lightcraft_ui_egui::i18n::tests::catalog_characters_are_paintable)
      1× uk: built without a craft-fonts face for Cyrl (lightcraft_ui_egui::i18n::tests::catalog_characters_are_paintable)
  system (1): needs what the operating system provides
      1× no system ICC profiles (codecs/it::corpus::system_icc_profiles)
Report: target/ci/report.json; to paste into a PR: target/ci/summary.md (or run with --summary-md)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
