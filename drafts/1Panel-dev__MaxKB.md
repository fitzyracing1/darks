<!-- dark-draft: 1Panel-dev/MaxKB -->
<!-- draft-state: ready -->
# Upstream issue draft: 1Panel-dev/MaxKB

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/1Panel-dev/MaxKB/issues/new
- **Stars:** 23053 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "sync2gitee" workflow failing on v2 since 2026-09-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **sync2gitee** workflow (`.github/workflows/sync2gitee.yml`) on `v2` has been failing since 2026-09-14. Here is what I saw, in case it's useful:

- Latest run on `v2`: https://github.com/1Panel-dev/MaxKB/actions/runs/40484726141 — dark (conclusion: `failure`), 2026-10-27 09:57 UTC
- Dark since: 2026-09-14 06:06 UTC (first run of the current streak)
- Job / step: `repo-sync` → `Mirror the Github organization repos to Gitee.`
- Likely cause: INFO:hubmirror:Failed: ['MaxKB']

<details><summary>End of the job log</summary>

```
  cmdline: git push -f gitee refs/remotes/origin/*:refs/heads/* --tags --prune
  stderr: 'git@gitee.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.'
INFO:hubmirror:Total: 1, skip: 0, successed: 0, failed: 1.
INFO:hubmirror:Failed: ['MaxKB']
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining MaxKB!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
