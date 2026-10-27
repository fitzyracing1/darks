<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 22609 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/40428572883 — dark (conclusion: `failure`), 2026-10-27 00:47 UTC
- Dark since: 2026-10-25 04:42 UTC (first run of the current streak)
- Job / step: `test (macos-latest)` → `Test`
- Likely cause: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-cast] (internal/gui/trayimage_darwin.go:112)

<details><summary>End of the job log</summary>

```
go: downloading modernc.org/mathutil v1.7.1
go: downloading modernc.org/memory v1.11.0
go: downloading github.com/charmbracelet/colorprofile v0.4.1
go: downloading github.com/aymanbagabas/go-osc52/v2 v2.0.1
go: downloading github.com/remyoudompheng/bigfft v0.0.0-20230129092748-24d4a6f8daec
go: downloading github.com/xo/terminfo v0.0.0-20220910002029-abceb7e1c41e
# github.com/yetone/magpie/internal/gui
##[error]internal/gui/dockflap_darwin.go:42:77: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-cas…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
