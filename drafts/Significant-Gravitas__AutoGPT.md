<!-- dark-draft: Significant-Gravitas/AutoGPT -->
<!-- draft-state: ready -->
# Upstream issue draft: Significant-Gravitas/AutoGPT

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Significant-Gravitas/AutoGPT/issues/new
- **Stars:** 188081 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security - Public advisory sync" workflow failing on master since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security - Public advisory sync** workflow (`.github/workflows/security-advisory-sync.yml`) on `master` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/Significant-Gravitas/AutoGPT/actions/runs/44304850355 — dark (conclusion: `failure`), 2026-11-18 12:32 UTC
- Dark since: 2026-11-18 12:32 UTC (first run of the current streak)
- Job / step: `public-data` → `Read public data anonymously`
- Likely cause: Public security sync failed: Published advisory release mapping is invalid or ambiguous

<details><summary>End of the job log</summary>

```
includeif.gitdir:/github/workspace/.git/worktrees/*.path
/home/runner/work/_temp/git-credentials-81641d83-517d-4092-856e-85988d426585.config
/home/runner/work/_temp/git-credentials-81641d83-517d-4092-856e-85988d426585.config
/github/runner_temp/git-credentials-81641d83-517d-4092-856e-85988d426585.config
/github/runner_temp/git-credentials-81641d83-517d-4092-856e-85988d426585.config
Removing credentials config '/home/runner/work/_temp/git-credentials-81641d83-517d-4092-856e-85988d426585.config'
Public security sync failed: Published advisory release mapping is invalid or ambiguous
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AutoGPT!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
