<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: resolved -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** resolved — lit again (2026-11-22); nothing to file
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 29747 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/44985153059 — dark (conclusion: `cancelled`), 2026-11-22 04:27 UTC
- Dark since: 2026-11-22 04:12 UTC (first run of the current streak)
- Job / step: `windows / build (win-x64)` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.ToolbarPaletteViewTests.A_press_after_a_lost_release_only_ends_a_slice_drag(button: Left, onSlice: True) [400 ms]
  Passed Filee.App.Tests.ToolbarPaletteViewTests.A_press_after_a_lost_release_only_ends_a_slice_drag(button: Right, onSlice: True) [395 ms]
  Passed Filee.App.Tests.ToolbarPaletteViewTests.Profile_change_resets_tab_but_face_flip_keeps_it [12 s]
  Passed Filee.App.Tests.ToolbarPaletteViewTests.A_finger_on_the_screen_leaves_a_mouse_drag_alone(onChip: False) [4 s]
  Passed Filee.App.Tests.ToolbarPaletteViewTests.A_finger_on_the_screen_leaves_a_mouse_drag_alone(onChip: True) [5 s]
  Passed Filee.App.Tests.ToolbarPaletteViewTests.Empty_tabs_and_redundant_row_disappear [753 ms]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
