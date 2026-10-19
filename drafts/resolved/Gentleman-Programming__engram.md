<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: resolved -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** resolved — lit again 2026-10-16; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7314 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Stable release gap audit" workflow failing on the default branch since 2026-09-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Stable release gap audit** workflow (`.github/workflows/release-gap-audit.yml`) on the default branch has been failing since 2026-09-28. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/Gentleman-Programming/engram/actions/runs/38232317964 — dark (conclusion: `failure`), 2026-10-12 09:49 UTC
- Dark since: 2026-09-28 09:42 UTC (first run of the current streak)
- Likely cause: step "Compare published stable releases with main" in job "audit" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
