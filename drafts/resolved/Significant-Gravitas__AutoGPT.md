<!-- dark-draft: Significant-Gravitas/AutoGPT -->
<!-- draft-state: resolved -->
# Upstream issue draft: Significant-Gravitas/AutoGPT

- **Status:** resolved — lit again (2026-11-12); nothing to file
- **Would be filed at:** https://github.com/Significant-Gravitas/AutoGPT/issues/new
- **Stars:** 187997 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security - Public advisory sync" workflow failing on master since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security - Public advisory sync** workflow (`.github/workflows/security-advisory-sync.yml`) on `master` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/Significant-Gravitas/AutoGPT/actions/runs/43077867856 — dark (conclusion: `failure`), 2026-11-11 18:26 UTC
- Dark since: 2026-11-11 18:26 UTC (first run of the current streak)
- Job / step: `public-data` → `Read public data anonymously`
- Likely cause: Public security sync failed: Public API read failed; no authenticated fallback

<details><summary>End of the job log</summary>

```
includeif.gitdir:/github/workspace/.git/worktrees/*.path
/home/runner/work/_temp/git-credentials-69bdf014-369f-420d-b734-e6cf6c08399b.config
/home/runner/work/_temp/git-credentials-69bdf014-369f-420d-b734-e6cf6c08399b.config
/github/runner_temp/git-credentials-69bdf014-369f-420d-b734-e6cf6c08399b.config
/github/runner_temp/git-credentials-69bdf014-369f-420d-b734-e6cf6c08399b.config
Removing credentials config '/home/runner/work/_temp/git-credentials-69bdf014-369f-420d-b734-e6cf6c08399b.config'
Public security sync failed: Public API read failed; no authenticated fallback
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AutoGPT!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
