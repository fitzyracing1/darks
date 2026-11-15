<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 8994 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43659869904 — dark (conclusion: `cancelled`), 2026-11-15 00:46 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Changes`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43659542548 — dark (conclusion: `cancelled`), 2026-11-15 00:42 UTC
- Dark since: 2026-11-13 00:14 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
