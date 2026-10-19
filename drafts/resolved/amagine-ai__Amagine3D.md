<!-- dark-draft: amagine-ai/Amagine3D -->
<!-- draft-state: resolved -->
# Upstream issue draft: amagine-ai/Amagine3D

- **Status:** resolved — lit again 2026-10-15: https://github.com/amagine-ai/Amagine3D/actions/runs/38678072831; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/amagine-ai/Amagine3D/issues/new
- **Stars:** 6275 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on the default branch since 2026-10-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on the default branch has been failing since 2026-10-14. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/amagine-ai/Amagine3D/actions/runs/38505518385 — dark (conclusion: `failure`), 2026-10-14 03:17 UTC
- Dark since: 2026-10-14 03:17 UTC (first run of the current streak)
- Likely cause: step "Run npm audit --audit-level=high" in job "Node verify" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining Amagine3D!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
