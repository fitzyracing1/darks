<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again 2026-10-17: https://github.com/Droid-Deck/DroidDeck/actions/runs/39070813495; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 10087 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow failing on the default branch since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on the default branch has been failing since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/Droid-Deck/DroidDeck/actions/runs/39053075869 — dark (conclusion: `failure`), 2026-10-17 17:17 UTC
- Dark since: 2026-10-17 17:17 UTC (first run of the current streak)
- Likely cause: antutu: the manifest still names com.droiddeck.launcher in an authority or task

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
