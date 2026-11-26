<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 459649 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("i18n - Build Validation", "CI - Node.js")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### i18n - Build Validation (`.github/workflows/i18n-validate-builds.yml`)

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/45768012506 — dark (conclusion: `cancelled`), 2026-11-26 06:24 UTC
- Dark since: 2026-11-25 20:11 UTC (first run of the current streak)
- Job / step: `Validate i18n Builds` → `Validate Challenge Files`
- Likely cause: Canceling since a higher priority waiting request for i18n - Build Validation-refs/heads/main exists

<details><summary>End of the job log</summary>

```
=== portuguese ===
All challenges pass.
=== ukrainian ===
All challenges pass.
=== japanese ===
All challenges pass.
=== german ===
##[error]The operation was canceled.
```

</details>

### CI - Node.js (`.github/workflows/node.js-tests.yml`)

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/45768012555 — dark (conclusion: `cancelled`), 2026-11-26 06:24 UTC
- Dark since: 2026-11-26 06:24 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
