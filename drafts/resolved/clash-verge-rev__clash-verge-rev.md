<!-- dark-draft: clash-verge-rev/clash-verge-rev -->
<!-- draft-state: resolved -->
# Upstream issue draft: clash-verge-rev/clash-verge-rev

- **Status:** resolved — lit again (2026-11-05); nothing to file
- **Would be filed at:** https://github.com/clash-verge-rev/clash-verge-rev/issues/new
- **Stars:** 156326 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Auto Build" workflow failing on dev since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Auto Build** workflow (`.github/workflows/autobuild.yml`) on `dev` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/clash-verge-rev/clash-verge-rev/actions/runs/41811423725 — dark (conclusion: `failure`), 2026-11-04 10:01 UTC
- Dark since: 2026-11-04 10:01 UTC (first run of the current streak)
- Job / step: `Clean Old Release Assets / Clean Old Release Assets` → `Clean old assets from release`
- Likely cause: ⚠️  Some assets failed to delete. Please check the logs above.

<details><summary>End of the job log</summary>

```
  Deleting: Clash.Verge_2.6.0+autobuild.1104.e4d82a1_arm64_fixed_webview2-setup.exe.sig
  Deleting: Clash.Verge_2.6.0+autobuild.1104.e4d82a1_arm64_fixed_webview2-setup.exe
📊 Cleanup summary:
  - Deleted: 20 assets
  - Failed: 2 assets
  - Kept: 1 assets
⚠️  Some assets failed to delete. Please check the logs above.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining clash-verge-rev!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
