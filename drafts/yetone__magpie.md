<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 27347 · **Generated:** 2026-11-01T12:36:12.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/41300185755 — dark (conclusion: `failure`), 2026-11-01 11:03 UTC
- Dark since: 2026-10-25 04:42 UTC (first run of the current streak)
- Job / step: `test (macos-latest)` → `Test`
- Likely cause: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-cast] (internal/gui/trayimage_darwin.go:131)

<details><summary>End of the job log</summary>

```
GOTOOLCHAIN='auto'
GOTOOLDIR='/Users/runner/hostedtoolcache/go/1.26.8/arm64/pkg/tool/darwin_arm64'
GOVCS=''
GOVERSION='go1.26.8'
GOWORK=''
PKG_CONFIG='pkg-config'
# github.com/yetone/magpie/internal/gui [github.com/yetone/magpie/internal/gui.test]
##[error]internal/gui/dockflap_darwin.go:42:77: warning: implicit conversion from enumeration type 'enum CGImageAlphaInfo' to different enumeration type 'CGBitmapInfo' (aka 'enum CGBitmapInfo') [-Wimplicit-enum-enum-cas…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
