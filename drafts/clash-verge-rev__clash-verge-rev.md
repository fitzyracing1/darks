<!-- dark-draft: clash-verge-rev/clash-verge-rev -->
<!-- draft-state: ready -->
# Upstream issue draft: clash-verge-rev/clash-verge-rev

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/clash-verge-rev/clash-verge-rev/issues/new
- **Stars:** 157145 · **Generated:** 2026-11-08T18:35:29.654Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Auto Build" workflow failing on dev since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Auto Build** workflow (`.github/workflows/autobuild.yml`) on `dev` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/clash-verge-rev/clash-verge-rev/actions/runs/42469636896 — dark (conclusion: `failure`), 2026-11-08 10:01 UTC
- Dark since: 2026-11-08 10:01 UTC (first run of the current streak)
- Job / step: `Autobuild x86 and ARM Windows with WebView2 (windows-latest, aarch64-pc-windows-msvc, arm64)` → `Pnpm install and check`
- Likely cause: Error fetching latest alpha version: Failed to fetch https://github.com/MetaCubeX/mihomo/releases/download/Prerelease-Alpha/version.txt: 504

<details><summary>End of the job log</summary>

```
+ vitest 5.0.1
+ webdriverio 10.2.0
+ ws 8.22.1
Done in 17.3s using pnpm v12.18.0
$ node scripts/prebuild.mjs aarch64-pc-windows-msvc
Error fetching latest alpha version: Failed to fetch https://github.com/MetaCubeX/mihomo/releases/download/Prerelease-Alpha/version.txt: 504
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining clash-verge-rev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
