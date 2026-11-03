<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 28400 · **Generated:** 2026-11-03T00:52:20.983Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/41547633783 — dark (conclusion: `failure`), 2026-11-02 23:43 UTC
- Dark since: 2026-10-25 04:42 UTC (first run of the current streak)
- Job / step: `test (macos-latest)` → `Test`
- Likely cause: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-cast] (internal/gui/trayimage_darwin.go:131)

<details><summary>End of the job log</summary>

```
go: downloading github.com/ncruces/go-strftime v1.0.0
go: downloading github.com/dustin/go-humanize v1.0.1
go: downloading golang.org/x/exp v0.0.0-20260410095643-746e56fc9e2f
go: downloading modernc.org/mathutil v1.7.1
go: downloading modernc.org/memory v1.11.0
go: downloading github.com/remyoudompheng/bigfft v0.0.0-20230129092748-24d4a6f8daec
# github.com/yetone/magpie/internal/proc
##[error]internal/proc/disclaim_darwin.go:35:19: warning: 'posix_spawn_file_actions_addchdir_np' is deprecated: first deprecated in macOS 26.0 - posix_spawn_file_actions_addchdir(3) has replaced posix_spawn_file_actions…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
