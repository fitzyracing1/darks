<!-- dark-draft: Significant-Gravitas/AutoGPT -->
<!-- draft-state: resolved -->
# Upstream issue draft: Significant-Gravitas/AutoGPT

- **Status:** resolved — lit again (2026-11-19); nothing to file
- **Would be filed at:** https://github.com/Significant-Gravitas/AutoGPT/issues/new
- **Stars:** 188099 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security - Public advisory sync" workflow failing on master since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security - Public advisory sync** workflow (`.github/workflows/security-advisory-sync.yml`) on `master` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/Significant-Gravitas/AutoGPT/actions/runs/44524795911 — dark (conclusion: `failure`), 2026-11-19 12:32 UTC
- Dark since: 2026-11-18 12:32 UTC (first run of the current streak)
- Job / step: `public-data` → `Read public data anonymously`
- Likely cause: Public security sync failed: Published advisory release mapping is invalid or ambiguous

<details><summary>End of the job log</summary>

```
includeif.gitdir:/github/workspace/.git/worktrees/*.path
/home/runner/work/_temp/git-credentials-c0c6d7cf-9427-4831-8081-f87f36d72519.config
/home/runner/work/_temp/git-credentials-c0c6d7cf-9427-4831-8081-f87f36d72519.config
/github/runner_temp/git-credentials-c0c6d7cf-9427-4831-8081-f87f36d72519.config
/github/runner_temp/git-credentials-c0c6d7cf-9427-4831-8081-f87f36d72519.config
Removing credentials config '/home/runner/work/_temp/git-credentials-c0c6d7cf-9427-4831-8081-f87f36d72519.config'
Public security sync failed: Published advisory release mapping is invalid or ambiguous
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AutoGPT!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
