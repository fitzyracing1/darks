<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 20164 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/40004148936 — dark (conclusion: `failure`), 2026-10-23 18:32 UTC
- Dark since: 2026-10-23 18:20 UTC (first run of the current streak)
- Job / step: `test (macos-latest)` → `Test`
- Likely cause: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-cast] (internal/gui/trayimage_darwin.go:112)

<details><summary>End of the job log</summary>

```
GOTOOLDIR='/Users/runner/hostedtoolcache/go/1.26.8/arm64/pkg/tool/darwin_arm64'
GOVCS=''
GOVERSION='go1.26.8'
GOWORK=''
PKG_CONFIG='pkg-config'
go: downloading github.com/coder/websocket v1.8.14
# github.com/yetone/magpie/internal/gui
##[error]internal/gui/trayimage_darwin.go:112:67: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-c…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
