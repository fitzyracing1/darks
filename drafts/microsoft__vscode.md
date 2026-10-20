<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 193998 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL", "Code OSS (node_modules)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39350891879 — dark (conclusion: `cancelled`), 2026-10-20 00:59 UTC
- Dark since: 2026-10-19 18:04 UTC (first run of the current streak)
- Likely cause: run cancelled

### Code OSS (node_modules) (`.github/workflows/pr-node-modules.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/39350891865 — dark (conclusion: `failure`), 2026-10-20 00:59 UTC
- Dark since: 2026-10-20 00:59 UTC (first run of the current streak)
- Job / step: `Detect Missing Caches` → `Detect missing caches`
- Likely cause: Failed to load /home/runner/work/vscode/vscode/./.github/actions/detect-missing-caches/action.yml

<details><summary>End of the job log</summary>

```
includeif.gitdir:/github/workspace/.git.path
includeif.gitdir:/github/workspace/.git/worktrees/*.path
/home/runner/work/_temp/git-credentials-c01a2c44-ab62-486f-8ba6-7b2b84e11149.config
/home/runner/work/_temp/git-credentials-c01a2c44-ab62-486f-8ba6-7b2b84e11149.config
/github/runner_temp/git-credentials-c01a2c44-ab62-486f-8ba6-7b2b84e11149.config
/github/runner_temp/git-credentials-c01a2c44-ab62-486f-8ba6-7b2b84e11149.config
Removing credentials config '/home/runner/work/_temp/git-credentials-c01a2c44-ab62-486f-8ba6-7b2b84e11149.config'
##[error]/home/runner/work/vscode/vscode/./.github/actions/detect-missing-caches/action.yml: (Line: 6, Col: 48, Idx: 206) - (Line: 6, Col: 48, Idx: 206): Mapping values are not allowed in this context.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
