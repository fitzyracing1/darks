<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: resolved -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** resolved — lit again (2026-11-07); nothing to file
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 18236 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build APK" workflow getting cancelled on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build APK** workflow (`.github/workflows/build.yml`) on `main` has been getting cancelled since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/42269313286 — dark (conclusion: `cancelled`), 2026-11-06 18:17 UTC
- Dark since: 2026-11-06 18:17 UTC (first run of the current streak)
- Job / step: `Compile APK and Android tests` → `Build`
- Likely cause: Canceling since a higher priority waiting request for build-main exists

<details><summary>End of the job log</summary>

```
Inputs:
 - /home/runner/work/DroidDeck/DroidDeck/app/build/intermediates/cxx/RelWithDebInfo/u2q2f28u/obj/arm64-v8a/libc++_shared.so
 - /home/runner/.gradle/caches/8.10.2/transforms/ce602678c38068f4bf5abd4280f40c1c/transformed/opencv-4.13.0/jni/arm64-v8a/libc++_shared.so
> Task :app:stripReleaseDebugSymbols
> Task :app:extractReleaseNativeSymbolTables FROM-CACHE
> Task :app:compileReleaseKotlin
> Task :app:mergeReleaseNativeDebugMetadata
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
