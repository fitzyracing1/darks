<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 7932 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Windows Full Suite", "Gentle Shell macOS qualification")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Windows Full Suite (`.github/workflows/windows-full-suite.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/39755270080 — dark (conclusion: `failure`), 2026-10-22 09:25 UTC
- Dark since: 2026-10-21 18:46 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (rest)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/update/upgrade	6.776s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/verify	0.046s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/versions	0.036s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts	[no test files]
ok  	github.com/gentleman-programming/gentle-ai/v4/scripts/crosslane	1.930s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts/gen-sdd-agent-digests	[no test files]
FAIL
##[error]Process completed with exit code 1.
```

</details>

### Gentle Shell macOS qualification (`.github/workflows/shell-macos-qualification.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/39755270255 — dark (conclusion: `failure`), 2026-10-22 09:25 UTC
- Dark since: 2026-10-22 06:51 UTC (first run of the current streak)
- Job / step: `macOS installation and recovery qualification` → `Run native installer package tests`
- Likely cause: "strconv" imported and not used

<details><summary>End of the job log</summary>

```
GOTOOLDIR='/Users/runner/hostedtoolcache/go/1.25.10/arm64/pkg/tool/darwin_arm64'
GOVCS=''
GOVERSION='go1.25.10'
GOWORK=''
PKG_CONFIG='pkg-config'
go: downloading golang.org/x/sys v0.47.0
# github.com/gentleman-programming/gentle-ai/v4/internal/shellinstaller [github.com/gentleman-programming/gentle-ai/v4/internal/shellinstaller.test]
##[error]internal/shellinstaller/user_shell_apply_unix_test.go:21:2: undefined: writeInstallFixture
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
