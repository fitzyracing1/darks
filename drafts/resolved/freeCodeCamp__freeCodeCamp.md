<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: resolved -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 457605 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI - Node.js", "i18n - Build Validation")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI - Node.js (`.github/workflows/node.js-tests.yml`)

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/39555038899 — dark (conclusion: `cancelled`), 2026-10-21 06:22 UTC
- Dark since: 2026-10-21 06:22 UTC (first run of the current streak)
- Likely cause: run cancelled

### i18n - Build Validation (`.github/workflows/i18n-validate-builds.yml`)

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/39556819021 — dark (conclusion: `cancelled`), 2026-10-21 06:39 UTC
- Dark since: 2026-10-21 06:39 UTC (first run of the current streak)
- Job / step: `Validate i18n Builds (24)` → `Validate Challenge Files`
- Likely cause: Canceling since a higher priority waiting request for i18n - Build Validation-refs/heads/main exists

<details><summary>End of the job log</summary>

```
=== italian ===
All challenges pass.
=== portuguese ===
All challenges pass.
=== ukrainian ===
All challenges pass.
=== japanese ===
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
