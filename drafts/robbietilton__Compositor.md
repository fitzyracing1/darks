<!-- dark-draft: robbietilton/Compositor -->
<!-- draft-state: ready -->
# Upstream issue draft: robbietilton/Compositor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/robbietilton/Compositor/issues/new
- **Stars:** 17860 · **Generated:** 2026-10-25T12:49:12.088Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Verify" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Verify** workflow (`.github/workflows/verify.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/robbietilton/Compositor/actions/runs/40118025373 — dark (conclusion: `failure`), 2026-10-24 17:51 UTC
- Dark since: 2026-10-24 17:51 UTC (first run of the current streak)
- Job / step: `unit` → `Run unit tests`
- Likely cause: rest failed — open its group above for the log.

<details><summary>End of the job log</summary>

```
Test case 'MiddleButtonTests/middleDraggingScrollsOnlyTheLayerList(_:)' passed on 'My Mac - Compositor (8712)' (0.345 seconds)
Test case 'FilterLayerTests/vignetteLensEffectsAndTonalContrastLayersRenderEditAndSave()' passed on 'My Mac - Compositor (8712)' (30.366 seconds)
Test case 'CursorTests/duplicateAndDistortCursors()' passed on 'My Mac - Compositor (8712)' (0.104 seconds)
Test case 'CursorTests/hiddenTransformControlsLeaveOnlyMoving()' passed on 'My Mac - Compositor (8712)' (0.318 seconds)
Test case 'CursorTests/optionOverALayerRowOffersDuplicatingIncludingOverThumbnails()' passed on 'My Mac - Compositor (8712)' (0.168 seconds)
Test case 'CameraRawGPUTests/largePreviewsUseMetalAndOKStillMatchesTheCPU()' passed on 'My Mac - Compositor (8712)' (1.127 seconds)
Test case 'CameraRawGPUTests/hdrPreviewKeepsTheExistingNormalizationAndPixels()' passed on 'My Mac - Compositor (8712)' (0.213 seconds)
##[error]rest failed — open its group above for the log.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Compositor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
