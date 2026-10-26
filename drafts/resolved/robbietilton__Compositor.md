<!-- dark-draft: robbietilton/Compositor -->
<!-- draft-state: resolved -->
# Upstream issue draft: robbietilton/Compositor

- **Status:** resolved — lit again (2026-10-26); nothing to file
- **Would be filed at:** https://github.com/robbietilton/Compositor/issues/new
- **Stars:** 17874 · **Generated:** 2026-10-25T18:43:35.920Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Verify" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Verify** workflow (`.github/workflows/verify.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/robbietilton/Compositor/actions/runs/40205862011 — dark (conclusion: `failure`), 2026-10-25 15:12 UTC
- Dark since: 2026-10-24 17:51 UTC (first run of the current streak)
- Job / step: `unit` → `Run unit tests`
- Likely cause: rest failed — open its group above for the log.

<details><summary>End of the job log</summary>

```
Test case 'MiddleButtonTests/middleDraggingScrollsOnlyTheLayerList(_:)' passed on 'My Mac - Compositor (11646)' (0.569 seconds)
Test case 'CursorTests/duplicateAndDistortCursors()' passed on 'My Mac - Compositor (11646)' (0.169 seconds)
Test case 'FilterLayerTests/vignetteLensEffectsAndTonalContrastLayersRenderEditAndSave()' passed on 'My Mac - Compositor (11646)' (46.428 seconds)
Test case 'CursorTests/hiddenTransformControlsLeaveOnlyMoving()' passed on 'My Mac - Compositor (11646)' (0.009 seconds)
Test case 'CursorTests/optionOverALayerRowOffersDuplicatingIncludingOverThumbnails()' passed on 'My Mac - Compositor (11646)' (0.342 seconds)
Test case 'CameraRawGPUTests/largePreviewsUseMetalAndOKStillMatchesTheCPU()' passed on 'My Mac - Compositor (11646)' (2.451 seconds)
Test case 'CameraRawGPUTests/hdrPreviewKeepsTheExistingNormalizationAndPixels()' passed on 'My Mac - Compositor (11646)' (0.332 seconds)
##[error]rest failed — open its group above for the log.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Compositor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
