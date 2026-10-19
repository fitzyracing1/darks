<!-- dark-draft: qingjian-team/qingjian -->
<!-- draft-state: resolved -->
# Upstream issue draft: qingjian-team/qingjian

- **Status:** resolved — lit again 2026-10-15: https://github.com/qingjian-team/qingjian/actions/runs/38728711742; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/qingjian-team/qingjian/issues/new
- **Stars:** 6543 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ci" workflow getting cancelled on the default branch since 2026-10-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ci** workflow (`.github/workflows/ci.yml`) on the default branch has been getting cancelled since 2026-10-15. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/qingjian-team/qingjian/actions/runs/38694503545 — dark (conclusion: `cancelled`), 2026-10-15 06:47 UTC
- Dark since: 2026-10-15 06:47 UTC (first run of the current streak)
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining qingjian!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
