<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 252524 · **Generated:** 2026-11-12T00:55:01.455Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("(DevTools) Regression Tests", "(Runtime) Build and Test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### (DevTools) Regression Tests (`.github/workflows/devtools_regression_tests.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/43124415601 — dark (conclusion: `failure`), 2026-11-12 00:03 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Download base build` → `Download react-devtools artifacts for base revision`
- Likely cause: Could not download build as its conclusion was: failure

<details><summary>End of the job log</summary>

```
⠙ Downloading artifacts from GitHub for commit cb7c59ecdb7b620ed3d6ce0bf669d7502
daedf13)
⠹ Downloading artifacts from GitHub for commit cb7c59ecdb7b620ed3d6ce0bf669d7502
daedf13)
⠸ Downloading artifacts from GitHub for commit cb7c59ecdb7b620ed3d6ce0bf669d7502
daedf13)
Could not download build as its conclusion was: failure
##[error]Process completed with exit code 1.
```

</details>

### (Runtime) Build and Test (`.github/workflows/runtime_build_and_test.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/43068956506 — dark (conclusion: `failure`), 2026-11-11 17:31 UTC
- Dark since: 2026-11-11 17:31 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
