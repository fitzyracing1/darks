<!-- dark-draft: mksglu/context-mode -->
<!-- draft-state: ready -->
# Upstream issue draft: mksglu/context-mode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mksglu/context-mode/issues/new
- **Stars:** 34391 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "weekly" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **weekly** workflow (`.github/workflows/weekly.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/43802331794 — dark (conclusion: `failure`), 2026-11-16 04:09 UTC
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
