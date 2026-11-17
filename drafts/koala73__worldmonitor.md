<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90798 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Gate" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Gate** workflow (`.github/workflows/deploy-gate.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44030208578 — dark (conclusion: `failure`), 2026-11-17 06:18 UTC
- Dark since: 2026-11-17 06:18 UTC (first run of the current streak)
- Job / step: `recover` → `Run bash -e .github/scripts/deploy-gate.sh recover`
- Likely cause: gh: Server Error (HTTP 502)

<details><summary>End of the job log</summary>

```
includeif.gitdir:/github/workspace/.git/worktrees/*.path
/home/runner/work/_temp/git-credentials-fe95ce96-ad3e-4a4e-bcfa-1c5e44f6218c.config
/home/runner/work/_temp/git-credentials-fe95ce96-ad3e-4a4e-bcfa-1c5e44f6218c.config
/github/runner_temp/git-credentials-fe95ce96-ad3e-4a4e-bcfa-1c5e44f6218c.config
/github/runner_temp/git-credentials-fe95ce96-ad3e-4a4e-bcfa-1c5e44f6218c.config
Removing credentials config '/home/runner/work/_temp/git-credentials-fe95ce96-ad3e-4a4e-bcfa-1c5e44f6218c.config'
gh: Server Error (HTTP 502)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
