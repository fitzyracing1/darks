<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 251890 · **Generated:** 2026-11-03T12:42:36.291Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("(DevTools) Regression Tests", "(Runtime) Release From CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### (DevTools) Regression Tests (`.github/workflows/devtools_regression_tests.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/41550065078 — dark (conclusion: `failure`), 2026-11-03 00:03 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Download base build` → `Download react-devtools artifacts for base revision`
- Likely cause: The workflow run for the specified commit (76baa3b5434fad315ece9cfd4d20d7a8d6c34a25) could not be found.

<details><summary>End of the job log</summary>

```
⠸ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
⠼ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
⠴ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
The workflow run for the specified commit (76baa3b5434fad315ece9cfd4d20d7a8d6c34a25) could not be found.
##[error]Process completed with exit code 1.
```

</details>

### (Runtime) Release From CI (`.github/workflows/runtime_release_from_ci.yml`)

- Latest run on `main`: https://github.com/react/react/actions/runs/41479887926 — dark (conclusion: `failure`), 2026-11-02 16:16 UTC
- Dark since: 2026-11-02 16:16 UTC (first run of the current streak)
- Job / step: `Publish release` → `Stage canary artifacts`
- Likely cause: The workflow run for the specified commit (76baa3b5434fad315ece9cfd4d20d7a8d6c34a25) could not be found.

<details><summary>End of the job log</summary>

```
⠸ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
⠼ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
⠴ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
The workflow run for the specified commit (76baa3b5434fad315ece9cfd4d20d7a8d6c34a25) could not be found.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
