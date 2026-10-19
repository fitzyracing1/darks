<!-- dark-draft: tensorflow/tensorflow -->
<!-- draft-state: ready -->
# Upstream issue draft: tensorflow/tensorflow

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tensorflow/tensorflow/issues/new
- **Stars:** 201181 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** workflow failed to start (config/permissions on their side)

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Creates a GitHub Issue when a PR Rolled back via Commit to Master", "OSV-Scanner Scheduled Scan")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Creates a GitHub Issue when a PR Rolled back via Commit to Master (`.github/workflows/issue-on-pr-rollback.yml`)

- Latest run on `master`: https://github.com/tensorflow/tensorflow/actions/runs/39252623053 — dark (conclusion: `skipped`), 2026-10-19 12:30 UTC
- Dark since: 2026-10-13 00:19 UTC (first run of the current streak)
- Likely cause: run skipped

### OSV-Scanner Scheduled Scan (`.github/workflows/osv-scanner-scheduled.yml`)

- Latest run on `master`: https://github.com/tensorflow/tensorflow/actions/runs/39198085430 — dark (conclusion: `startup_failure`), 2026-10-19 04:09 UTC
- Dark since: 2026-10-19 04:09 UTC (first run of the current streak)
- Likely cause: run startup_failure

If this is already known or expected, feel free to close. Thanks for maintaining tensorflow!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
