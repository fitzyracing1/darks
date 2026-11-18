<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: ready -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 20644 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Build FEX (x86-64 Steam client)", "Build APK")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Build FEX (x86-64 Steam client) (`.github/workflows/build-fex.yml`)

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

### Build APK (`.github/workflows/build.yml`)

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/44191833438 — dark (conclusion: `cancelled`), 2026-11-17 22:37 UTC
- Dark since: 2026-11-17 22:37 UTC (first run of the current streak)
- Job / step: `sign / sign pubg` → `Run actions/checkout@v4`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/DroidDeck/DroidDeck/.git/
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
