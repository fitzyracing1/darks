<!-- dark-draft: tensorflow/tensorflow -->
<!-- draft-state: ready -->
# Upstream issue draft: tensorflow/tensorflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tensorflow/tensorflow/issues/new
- **Stars:** 201158 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: "Creates a GitHub Issue when a PR Rolled back via Commit to Master" workflow not completing (runs skipped) on master since 2026-10-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Creates a GitHub Issue when a PR Rolled back via Commit to Master** workflow (`.github/workflows/issue-on-pr-rollback.yml`) on `master` has been not completing (runs skipped) since 2026-10-13. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/tensorflow/tensorflow/actions/runs/39524568168 — dark (conclusion: `skipped`), 2026-10-21 00:58 UTC
- Dark since: 2026-10-13 00:19 UTC (first run of the current streak)
- Likely cause: run skipped

If this is already known or expected, feel free to close. Thanks for maintaining tensorflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
