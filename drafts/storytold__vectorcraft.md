<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11634 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42958781374 — dark (conclusion: `failure`), 2026-11-11 04:22 UTC
- Dark since: 2026-11-09 04:23 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: Killed

<details><summary>End of the job log</summary>

```
   Compiling eframe v0.37.0 (https://github.com/storytold/egui.git?rev=6d518fc799681571963842f95b55a6b68431b15a#6d518fc7)
   Compiling webbrowser v1.2.5
   Compiling craft-window v0.1.0 (https://github.com/storytold/craft-libs?rev=9be9a63782298ab59cd9b7a42ee9cba4f42a5ccb#9be9a637)
   Compiling craft-web-api v0.1.0 (https://github.com/storytold/craft-libs?rev=fd5e2feff6ea25bed371a99cc732b3968d621505#fd5e2fef)
   Compiling vectorcraft-cli v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
   Compiling vectorcraft-web v0.21.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
Killed
##[error]Process completed with exit code 137.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43074935982 — dark (conclusion: `cancelled`), 2026-11-11 18:08 UTC
- Dark since: 2026-11-10 18:11 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43074935599 — dark (conclusion: `cancelled`), 2026-11-11 18:08 UTC
- Dark since: 2026-11-11 11:16 UTC (first run of the current streak)
- Job / step: `affinity3` → `Check every artboard, native save, SVG, PDF and PSD exports`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
test objects_nested_in_text_are_clipped_by_the_type ... ok
test each_font_weight_and_italic_maps_to_the_expected_style ... ok
test unicode_mixed_fonts_line_breaks_and_styles_remain_editable_after_save ... ok
test installed_postscript_identity_overrides_ambiguous_family_and_weight ... ok
test corpus::sha256::tests::known_digests ... ok
test pinned_affinity3_text_opens_as_editable_unicode_with_resolved_emoji_font ... ok
test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
