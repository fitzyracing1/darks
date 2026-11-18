<!-- dark-draft: eslint/eslint -->
<!-- draft-state: ready -->
# Upstream issue draft: eslint/eslint

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/eslint/eslint/issues/new
- **Stars:** 27629 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Update Test Ecosystem Plugins" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Update Test Ecosystem Plugins** workflow (`.github/workflows/ecosystem-updates.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/eslint/eslint/actions/runs/43778697217 — dark (conclusion: `failure`), 2026-11-16 00:09 UTC
- Dark since: 2026-11-16 00:09 UTC (first run of the current streak)
- Job / step: `test_ecosystem` → `Run npm run test:ecosystem:update`
- Likely cause: Error: Failed to fetch latest commit for @eslint/css:

<details><summary>End of the job log</summary>

```
Error: Failed to fetch latest commit for @eslint/css:
    at getLatestRepositoryCommit (file:///home/runner/work/eslint/eslint/tools/test-ecosystem/update.mjs:33:9)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async file:///home/runner/work/eslint/eslint/tools/test-ecosystem/update.mjs:72:13
    at async Promise.all (index 0)
    at async file:///home/runner/work/eslint/eslint/tools/test-ecosystem/update.mjs:67:2
Node.js v26.13.1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining eslint!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
