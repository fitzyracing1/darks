<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-10-31); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 16436 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow getting cancelled on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been getting cancelled since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/41104479426 — dark (conclusion: `cancelled`), 2026-10-30 18:09 UTC
- Dark since: 2026-10-30 17:04 UTC (first run of the current streak)
- Job / step: `Compile APK and Android tests`
- Likely cause: Canceling since a higher priority waiting request for build-main exists

<details><summary>End of the job log</summary>

```
> Task :app:stageSessionScripts
> Task :app:stageRuntimeAssets
> Task :app:verifyRuntimeInputs
Runtime inputs verified
> Task :app:buildRustStores
    Building arm64-v8a (aarch64-linux-android)
   Compiling droiddeckstores v0.1.0 (/home/runner/work/DroidDeck/DroidDeck/app/src/main/rust/stores)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
