<!-- dark-draft: eslint/eslint -->
<!-- draft-state: resolved -->
# Upstream issue draft: eslint/eslint

- **Status:** resolved — lit again (2026-10-30); nothing to file
- **Would be filed at:** https://github.com/eslint/eslint/issues/new
- **Stars:** 27602 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test Ecosystem Plugins" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test Ecosystem Plugins** workflow (`.github/workflows/ecosystem-tests.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/eslint/eslint/actions/runs/41034238678 — dark (conclusion: `failure`), 2026-10-30 09:32 UTC
- Dark since: 2026-10-30 09:32 UTC (first run of the current streak)
- Job / step: `Test Ecosystem Plugin (eslint-plugin-unicorn)` → `Test Ecosystem Plugins`
- Likely cause: eslint-plugin-unicorn: Error: ERROR: "test:js" exited with 1.

<details><summary>End of the job log</summary>

```
[eslint-plugin-unicorn] npm run test
Failed: eslint-plugin-unicorn
Errors occurred while testing plugins:
eslint-plugin-unicorn: Error: ERROR: "test:js" exited with 1.
    at runCommand (file:///home/runner/work/eslint/eslint/tools/test-ecosystem/index.mjs:84:26)
    at runTests (file:///home/runner/work/eslint/eslint/tools/test-ecosystem/index.mjs:134:2)
    at async file:///home/runner/work/eslint/eslint/tools/test-ecosystem/index.mjs:159:3
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining eslint!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
