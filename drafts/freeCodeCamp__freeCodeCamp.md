<!-- dark-draft: freeCodeCamp/freeCodeCamp -->
<!-- draft-state: ready -->
# Upstream issue draft: freeCodeCamp/freeCodeCamp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/freeCodeCamp/freeCodeCamp/issues/new
- **Stars:** 459378 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "i18n - Build Validation" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **i18n - Build Validation** workflow (`.github/workflows/i18n-validate-builds.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/freeCodeCamp/freeCodeCamp/actions/runs/44724331732 — dark (conclusion: `failure`), 2026-11-20 11:03 UTC
- Dark since: 2026-11-20 11:03 UTC (first run of the current streak)
- Job / step: `Validate i18n Builds` → `Validate Challenge Files`
- Likely cause: [ELIFECYCLE] Command failed with exit code 1.

<details><summary>End of the job log</summary>

```
/learn/python-v9/workshop-bill-splitter/step-5 appears more than once: 6af1c990fd96530285f9700c and 69779dcb44016eccc05c15a4
/learn/introduction-to-python-basics/workshop-bill-splitter/step-5 appears more than once: 6af1c990fd96530285f9700c and 69779dcb44016eccc05c15a4
=== arabic ===
/learn/python-v9/workshop-bill-splitter/step-5 appears more than once: 6af1c990fd96530285f9700c and 69779dcb44016eccc05c15a4
/learn/introduction-to-python-basics/workshop-bill-splitter/step-5 appears more than once: 6af1c990fd96530285f9700c and 69779dcb44016eccc05c15a4
[ELIFECYCLE] Command failed with exit code 1.
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining freeCodeCamp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
