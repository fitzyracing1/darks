<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 28731 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- iOS guest (`.github/workflows/ios-guest.yml`): [issue #651](https://github.com/ccch1mneyyy/dsh-Go/issues/651) "Bug iOS：guest 任务卡住后取消会把内核 quarantine，之后所有 Linux 命令报 "Guest resource exit was not confirmed""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("iOS compile", "CI", "OHOS compile")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44735901967 — dark (conclusion: `cancelled`), 2026-11-20 12:27 UTC
- Dark since: 2026-11-20 01:21 UTC (first run of the current streak)
- Job / step: `phone-protocol`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44735901996 — dark (conclusion: `cancelled`), 2026-11-20 12:27 UTC
- Dark since: 2026-11-20 11:26 UTC (first run of the current streak)
- Likely cause: run cancelled

### OHOS compile (`.github/workflows/ohos-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/44735901884 — dark (conclusion: `cancelled`), 2026-11-20 12:27 UTC
- Dark since: 2026-11-20 12:27 UTC (first run of the current streak)
- Job / step: `compile` → `Run actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1`
- Likely cause: Canceling since a higher priority waiting request for ohos-compile-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[command]/opt/homebrew/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
[command]/opt/homebrew/bin/git config --file /Users/runner/work/_temp/git-credentials-2adcd828-ea88-4e73-82ea-983b7193bdde.config http.https://github.com/.extraheader AUTHORIZATION: basic ***
[command]/opt/homebrew/bin/git config --local includeIf.gitdir:/Users/runner/work/dsh-Go/dsh-Go/.git.path /Users/runner/work/_temp/git-credentials-2adcd828-ea88-4e73-82ea-983b7193bdde.config
[command]/opt/homebrew/bin/git config --local includeIf.gitdir:/Users/runner/work/dsh-Go/dsh-Go/.git/worktrees/*.path /Users/runner/work/_temp/git-credentials-2adcd828-ea88-4e73-82ea-983b7193bdde.config
[command]/opt/homebrew/bin/git config --local includeIf.gitdir:/github/workspace/.git.path /github/runner_temp/git-credentials-2adcd828-ea88-4e73-82ea-983b7193bdde.config
[command]/opt/homebrew/bin/git config --local includeIf.gitdir:/github/workspace/.git/worktrees/*.path /github/runner_temp/git-credentials-2adcd828-ea88-4e73-82ea-983b7193bdde.config
[command]/opt/homebrew/bin/git -c protocol.version=2 fetch --no-tags --prune --no-recurse-submodules --depth=1 origin +cf5cc532f0a009f2923d89b00ab2304b2aad62a8:refs/remotes/origin/main
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
