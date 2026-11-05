<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-11-05); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 17850 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow getting cancelled on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been getting cancelled since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/41887206485 — dark (conclusion: `cancelled`), 2026-11-04 18:26 UTC
- Dark since: 2026-11-04 18:26 UTC (first run of the current streak)
- Job / step: `Prepare verified components` → `Bundle the droiddeck-esync packs`
- Likely cause: Canceling since a higher priority waiting request for build-main exists

<details><summary>End of the job log</summary>

```
drwxr-xr-x 2 runner runner  4096 Nov  4 18:28 packs
app/src/main/assets/droiddeck-esync/packs:
total 2212
-rw-r--r-- 1 runner runner 562919 Jan  1  1970 cachyos-cachyos-11.0-20260703-slr-1784677009-ca9fabbcbd2c-r1.tzst
-rw-r--r-- 1 runner runner 570783 Jan  1  1970 ge-GE-Proton11-7-1789520806-6ba770ec0df5-r1.tzst
-rw-r--r-- 1 runner runner 561449 Jan  1  1970 valve-experimental-11.0-20261001-arm64-1790819359-76e24eb8146d-r1.tzst
-rw-r--r-- 1 runner runner 559829 Jan  1  1970 valve-proton-11.0-2c-arm64-1788504814-9c618d49c992-r1.tzst
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
