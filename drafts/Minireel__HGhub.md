<!-- dark-draft: Minireel/HGhub -->
<!-- draft-state: ready -->
# Upstream issue draft: Minireel/HGhub

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Minireel/HGhub/issues/new
- **Stars:** 9179 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build iOS IPA" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build iOS IPA** workflow (`.github/workflows/build-ios.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Minireel/HGhub/actions/runs/43811106072 — dark (conclusion: `failure`), 2026-11-16 05:34 UTC
- Dark since: 2026-11-16 05:34 UTC (first run of the current streak)
- Job / step: `iOS Build (IPA)` → `构建 iOS 应用与打包 IPA`
- Likely cause: Info Looking up installed tauri packages to check mismatched versions...

<details><summary>End of the job log</summary>

```
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 1.64s
[icons] 跳过：gen/android 还没生成（先跑 tauri android init）
        Info Opening Xcode
        Info connection; remote_addr=127.0.0.1:49218 conn_id=0
##[error]Process completed with exit code 65.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining HGhub!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
