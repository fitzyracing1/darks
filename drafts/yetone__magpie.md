<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 39758 · **Generated:** 2026-11-21T18:36:18.976Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/44910247487 — dark (conclusion: `failure`), 2026-11-21 13:43 UTC
- Dark since: 2026-11-18 11:36 UTC (first run of the current streak)
- Job / step: `test (macos-latest, 3/3)` → `Test`
- Likely cause: internal/proc/disclaim_darwin.go:35:19: warning: 'posix_spawn_file_actions_addchdir_np' is deprecated: first deprecated in macOS 26.0 - posix_spawn_file_actions_addchdir(3) has replaced posix_spawn_file_actions_addchdir…

<details><summary>End of the job log</summary>

```
Cache Size: ~23 MB (23912749 B)
[command]/opt/homebrew/bin/gtar -xf /Users/runner/work/_temp/2da36dc9-470a-453b-bb15-1d72f936d662/cache.tzst -P -C /Users/runner/work/magpie/magpie --delay-directory-restore --use-compress-program unzstd
Cache restored successfully
[command]/Users/runner/.bun/bin/bun --revision
1.4.2+744846f84
Using a cached version of Bun: 1.4.2+744846f84
# github.com/yetone/magpie/internal/proc
##[error]internal/proc/disclaim_darwin.go:35:19: warning: 'posix_spawn_file_actions_addchdir_np' is deprecated: first deprecated in macOS 26.0 - posix_spawn_file_actions_addchdir(3) has replaced posix_spawn_file_actions…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
