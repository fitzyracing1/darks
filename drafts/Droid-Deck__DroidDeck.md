<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: ready -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 21046 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow getting cancelled on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been getting cancelled since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/44791627168 — dark (conclusion: `cancelled`), 2026-11-20 18:19 UTC
- Dark since: 2026-11-20 18:05 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
