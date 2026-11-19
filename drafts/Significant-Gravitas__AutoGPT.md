<!-- dark-draft: Significant-Gravitas/AutoGPT -->
<!-- draft-state: ready -->
# Upstream issue draft: Significant-Gravitas/AutoGPT

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Significant-Gravitas/AutoGPT/issues/new
- **Stars:** 188094 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security - Public advisory sync" workflow failing on master since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security - Public advisory sync** workflow (`.github/workflows/security-advisory-sync.yml`) on `master` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/Significant-Gravitas/AutoGPT/actions/runs/44431442739 — dark (conclusion: `failure`), 2026-11-19 00:44 UTC
- Dark since: 2026-11-18 12:32 UTC (first run of the current streak)
- Job / step: `public-data` → `Read public data anonymously`
- Likely cause: Public security sync failed: Published advisory release mapping is invalid or ambiguous

<details><summary>End of the job log</summary>

```
includeif.gitdir:/github/workspace/.git/worktrees/*.path
/home/runner/work/_temp/git-credentials-c6ffd7dd-55dd-4e37-9226-aa9ec883b15a.config
/home/runner/work/_temp/git-credentials-c6ffd7dd-55dd-4e37-9226-aa9ec883b15a.config
/github/runner_temp/git-credentials-c6ffd7dd-55dd-4e37-9226-aa9ec883b15a.config
/github/runner_temp/git-credentials-c6ffd7dd-55dd-4e37-9226-aa9ec883b15a.config
Removing credentials config '/home/runner/work/_temp/git-credentials-c6ffd7dd-55dd-4e37-9226-aa9ec883b15a.config'
Public security sync failed: Published advisory release mapping is invalid or ambiguous
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AutoGPT!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
