<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: resolved -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** resolved — lit again 2026-10-15: https://github.com/farion1231/cc-switch/actions/runs/38787138461; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 144705 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on the default branch ("WSL2 Nightly", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on the default branch have been dark recently. Details below, in case they're useful:

### WSL2 Nightly (`.github/workflows/wsl2-nightly.yml`)

- Latest run on the default branch: https://github.com/farion1231/cc-switch/actions/runs/38616944200 — dark (conclusion: `failure`), 2026-10-14 18:39 UTC
- Dark since: 2026-10-13 18:41 UTC (first run of the current streak)
- Likely cause: step "Run lib tests against WSL2-backed home" in job "Backend Lib Suite (Windows + WSL2 home)" exited nonzero

### CI (`.github/workflows/ci.yml`)

- Latest run on the default branch: https://github.com/farion1231/cc-switch/actions/runs/38550837670 — dark (conclusion: `failure`), 2026-10-14 10:37 UTC
- Dark since: 2026-10-14 10:37 UTC (first run of the current streak)
- Likely cause: TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "settings.toolUpdate" (tests/components/AppsPage.test.tsx:148)

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
