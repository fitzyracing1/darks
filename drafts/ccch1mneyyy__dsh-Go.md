<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 29778 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "iOS UI tour")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44992183119 — dark (conclusion: `cancelled`), 2026-11-22 06:05 UTC
- Dark since: 2026-11-20 18:29 UTC (first run of the current streak)
- Job / step: `engine` → `Run the engine inside the app`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  vector_graphics_compiler 1.3.4 (1.3.6 available)
  windows_file_picker 2.0.1 (2.0.2 available)
  xml 7.0.1 (7.1.0 available)
Got dependencies!
47 packages have newer versions incompatible with dependency constraints.
Try `flutter pub outdated` for more information.
Building io.github.ccch1mneyyy.dshgo for simulator (ios)...
##[error]The operation was canceled.
```

</details>

### iOS UI tour (`.github/workflows/ios-ui-tour.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44992183149 — dark (conclusion: `cancelled`), 2026-11-22 06:05 UTC
- Dark since: 2026-11-22 06:05 UTC (first run of the current streak)
- Job / step: `tour` → `Run the tour`
- Likely cause: Canceling since a higher priority waiting request for ios-ui-tour-refs/heads/main exists

<details><summary>End of the job log</summary>

```
shot 4 sheet_rising_light in 23899 ms
Note: No display specified. Defaulting to display: F50B8928-9ECE-48C7-BAF1-DA9A53DA1545 (screenID: 1, name: LCD)
Wrote screenshot to: /Users/runner/work/_temp/ui-tour/04-sheet_rising_light.png
Detected file type from extension: PNG
shot 5 sheet_light in 18243 ms
Note: No display specified. Defaulting to display: F50B8928-9ECE-48C7-BAF1-DA9A53DA1545 (screenID: 1, name: LCD)
Wrote screenshot to: /Users/runner/work/_temp/ui-tour/05-sheet_light.png
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
