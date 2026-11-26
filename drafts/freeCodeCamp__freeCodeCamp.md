<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 459639 · **Generated:** 2026-11-26T00:53:15.119Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "i18n - Build Validation" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **i18n - Build Validation** workflow (`.github/workflows/i18n-validate-builds.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/45692559975 — dark (conclusion: `failure`), 2026-11-25 20:11 UTC
- Dark since: 2026-11-25 20:11 UTC (first run of the current streak)
- Job / step: `Validate i18n Builds` → `Validate Challenge Files`
- Likely cause: [ELIFECYCLE] Command failed with exit code 1.

<details><summary>End of the job log</summary>

```
turbo::setup::disabled
  x `turbo setup` requires root futureFlags.experimentalSetup to be true
  help: Set "futureFlags": {"experimentalSetup": true} in the root turbo.json
        or turbo.jsonc. Select the intended repository with --cwd=<root> if
        necessary.
[ELIFECYCLE] Command failed with exit code 1.
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
