<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 8002 · **Generated:** 2026-10-25T06:55:04.561Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Windows Full Suite", "Gentle Shell macOS qualification")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Windows Full Suite (`.github/workflows/windows-full-suite.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40158945931 — dark (conclusion: `failure`), 2026-10-25 03:38 UTC
- Dark since: 2026-10-21 18:46 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (rest)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/update/upgrade	8.548s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/verify	0.032s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/versions	0.033s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts	[no test files]
ok  	github.com/gentleman-programming/gentle-ai/v4/scripts/crosslane	2.553s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts/gen-sdd-agent-digests	[no test files]
FAIL
##[error]Process completed with exit code 1.
```

</details>

### Gentle Shell macOS qualification (`.github/workflows/shell-macos-qualification.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40154334306 — dark (conclusion: `failure`), 2026-10-25 02:24 UTC
- Dark since: 2026-10-22 06:51 UTC (first run of the current streak)
- Job / step: `macOS installation and recovery qualification` → `Run native installer package tests`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
    user_channel_overlay_unix_test.go:340: rollback expected an applied failure: applied=false err=<nil>
--- FAIL: TestUserUnixChannelOverlayRefusesOccupiedComposition (0.00s)
    user_channel_overlay_unix_test.go:384: occupied composition must refuse: applied=false err=<nil>
FAIL
FAIL	github.com/gentleman-programming/gentle-ai/v4/internal/shellinstaller	12.075s
ok  	github.com/gentleman-programming/gentle-ai/v4/scripts	0.364s
FAIL
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
