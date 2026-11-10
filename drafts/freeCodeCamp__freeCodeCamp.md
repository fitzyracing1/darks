<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 458830 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "i18n - Build Validation" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **i18n - Build Validation** workflow (`.github/workflows/i18n-validate-builds.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/42756276401 — dark (conclusion: `failure`), 2026-11-10 04:30 UTC
- Dark since: 2026-11-06 18:01 UTC (first run of the current streak)
- Job / step: `Validate i18n Builds (24)` → `Validate Challenge Files`
- Likely cause: [ELIFECYCLE] Command failed with exit code 1.

<details><summary>End of the job log</summary>

```
/learn/python-v9/workshop-employee-profile-validator/step-8 appears more than once: 5cda428400251e411df14313 and 6a71b3e49668c3be461257b5
/learn/introduction-to-python-basics/workshop-employee-profile-validator/step-8 appears more than once: 5cda428400251e411df14313 and 6a71b3e49668c3be461257b5
=== arabic ===
/learn/python-v9/workshop-employee-profile-validator/step-8 appears more than once: 5cda428400251e411df14313 and 6a71b3e49668c3be461257b5
/learn/introduction-to-python-basics/workshop-employee-profile-validator/step-8 appears more than once: 5cda428400251e411df14313 and 6a71b3e49668c3be461257b5
[ELIFECYCLE] Command failed with exit code 1.
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
