<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: resolved -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** resolved — lit again (2026-11-19); nothing to file
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 8025 · **Generated:** 2026-11-19T00:54:00.080Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("pages", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/44424833771 — dark (conclusion: `cancelled`), 2026-11-18 23:55 UTC
- Dark since: 2026-11-18 21:42 UTC (first run of the current streak)
- Job / step: `deploy`
- Likely cause: run cancelled in job "deploy"

### tests (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/44424804388 — dark (conclusion: `cancelled`), 2026-11-18 23:55 UTC
- Dark since: 2026-11-18 23:55 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
