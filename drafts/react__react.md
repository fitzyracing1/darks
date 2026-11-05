<!-- dark-draft: react/react -->
<!-- draft-state: ready -->
# Upstream issue draft: react/react

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/react/react/issues/new
- **Stars:** 251994 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "(DevTools) Regression Tests" workflow failing on main since 2026-10-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **(DevTools) Regression Tests** workflow (`.github/workflows/devtools_regression_tests.yml`) on `main` has been failing since 2026-10-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/react/react/actions/runs/41938445557 — dark (conclusion: `failure`), 2026-11-05 00:03 UTC
- Dark since: 2026-10-11 00:06 UTC (first run of the current streak)
- Job / step: `Download base build` → `Download react-devtools artifacts for base revision`
- Likely cause: The workflow run for the specified commit (76baa3b5434fad315ece9cfd4d20d7a8d6c34a25) could not be found.

<details><summary>End of the job log</summary>

```
⠹ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
⠸ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
⠼ Downloading artifacts from GitHub for commit 76baa3b5434fad315ece9cfd4d20d7a8d
6c34a25)
The workflow run for the specified commit (76baa3b5434fad315ece9cfd4d20d7a8d6c34a25) could not be found.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining react!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
