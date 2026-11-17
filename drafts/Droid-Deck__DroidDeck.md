<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: ready -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 20625 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build FEX (x86-64 Steam client)" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build FEX (x86-64 Steam client)** workflow (`.github/workflows/build-fex.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/44124548727 — dark (conclusion: `failure`), 2026-11-17 16:20 UTC
- Dark since: 2026-11-17 16:20 UTC (first run of the current streak)
- Job / step: `build` → `Build in Arch Linux ARM`
- Likely cause: CMake Generate step failed.  Build files cannot be regenerated correctly.

<details><summary>End of the job log</summary>

```
-- Configuring done (5.2s)
CMake Error:
  Cannot find source file:
    /include/c++/16.1.1/bits/std.cc
CMake Error in External/fmt/CMakeLists.txt:
  No SOURCES given to target: @cmake_cxx_std@synth_0
CMake Generate step failed.  Build files cannot be regenerated correctly.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
