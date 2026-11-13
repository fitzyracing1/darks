<!-- dark-draft: mksglu/context-mode -->
<!-- draft-state: ready -->
# Upstream issue draft: mksglu/context-mode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mksglu/context-mode/issues/new
- **Stars:** 34038 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("readme-stats", "weekly")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### readme-stats (`.github/workflows/readme-stats.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/43358733011 — dark (conclusion: `failure`), 2026-11-13 03:24 UTC
- Dark since: 2026-11-05 03:23 UTC (first run of the current streak)
- Job / step: `readme-stats` → `commit only if a file changed`
- Likely cause: error: failed to push some refs to 'https://github.com/mksglu/context-mode'

<details><summary>End of the job log</summary>

```
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/mksglu/context-mode'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
##[error]Process completed with exit code 1.
```

</details>

### weekly (`.github/workflows/weekly.yml`)

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/42560203886 — dark (conclusion: `failure`), 2026-11-09 04:09 UTC
- Dark since: 2026-11-09 04:09 UTC (first run of the current streak)
- Job / step: `weekly` → `Run node scripts/release/smoke.mjs --ref release --agent claude-code`
- Likely cause: Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@modelcontextprotocol/sdk' imported from /home/runner/work/context-mode/context-mode/scripts/release/smoke.mjs

<details><summary>End of the job log</summary>

```
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:763:56)
    at #resolve (node:internal/modules/esm/loader:687:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:607:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:276:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}
Node.js v24.22.2
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining context-mode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
