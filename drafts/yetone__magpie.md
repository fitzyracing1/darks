<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 39040 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/44582469535 — dark (conclusion: `failure`), 2026-11-19 17:56 UTC
- Dark since: 2026-11-18 11:36 UTC (first run of the current streak)
- Job / step: `test (macos-latest, 1/3)` → `Test`
- Likely cause: internal/proc/disclaim_darwin.go:35:19: warning: 'posix_spawn_file_actions_addchdir_np' is deprecated: first deprecated in macOS 26.0 - posix_spawn_file_actions_addchdir(3) has replaced posix_spawn_file_actions_addchdir…

<details><summary>End of the job log</summary>

```
GOTOOLCHAIN='auto'
GOTOOLDIR='/Users/runner/hostedtoolcache/go/1.26.8/arm64/pkg/tool/darwin_arm64'
GOVCS=''
GOVERSION='go1.26.8'
GOWORK=''
PKG_CONFIG='pkg-config'
# github.com/yetone/magpie/internal/proc
##[error]internal/proc/disclaim_darwin.go:35:19: warning: 'posix_spawn_file_actions_addchdir_np' is deprecated: first deprecated in macOS 26.0 - posix_spawn_file_actions_addchdir(3) has replaced posix_spawn_file_actions…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
