<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 39055 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/44623895969 — dark (conclusion: `failure`), 2026-11-19 21:57 UTC
- Dark since: 2026-11-18 11:36 UTC (first run of the current streak)
- Job / step: `test (macos-latest, 2/3)` → `Test`
- Likely cause: internal/proc/disclaim_darwin.go:35:19: warning: 'posix_spawn_file_actions_addchdir_np' is deprecated: first deprecated in macOS 26.0 - posix_spawn_file_actions_addchdir(3) has replaced posix_spawn_file_actions_addchdir…

<details><summary>End of the job log</summary>

```
Cache Size: ~23 MB (23912749 B)
[command]/opt/homebrew/bin/gtar -xf /Users/runner/work/_temp/33054b30-0dea-4542-a1e0-e7d2e4b2ac81/cache.tzst -P -C /Users/runner/work/magpie/magpie --delay-directory-restore --use-compress-program unzstd
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
