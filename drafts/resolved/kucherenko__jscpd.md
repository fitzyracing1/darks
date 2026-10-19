<!-- dark-draft: kucherenko/jscpd -->
<!-- draft-state: resolved -->
# Upstream issue draft: kucherenko/jscpd

- **Status:** resolved — lit again 2026-10-18: https://github.com/kucherenko/jscpd/actions/runs/39103608037; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/kucherenko/jscpd/issues/new
- **Stars:** 6409 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Nightly audit" workflow failing on the default branch since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Nightly audit** workflow (`.github/workflows/audit.yml`) on the default branch has been failing since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/kucherenko/jscpd/actions/runs/39009443081 — dark (conclusion: `failure`), 2026-10-17 06:18 UTC
- Dark since: 2026-10-17 06:18 UTC (first run of the current streak)
- Likely cause: step "cargo deny check" in job "cargo deny (Rust)" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining jscpd!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
