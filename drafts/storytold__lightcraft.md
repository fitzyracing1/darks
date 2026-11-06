<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15549 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42129764884 — dark (conclusion: `cancelled`), 2026-11-05 23:29 UTC
- Dark since: 2026-11-05 23:29 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/42130549621 — dark (conclusion: `failure`), 2026-11-05 23:35 UTC
- Dark since: 2026-11-05 23:35 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
  fonts (2): needs craft-fonts (`CRAFT_FONTS_DIR`, see the README)
      1× ru: built without a craft-fonts face for Cyrl (lightcraft_ui_egui::i18n::tests::catalog_characters_are_paintable)
error: ci failed at `test`
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
