<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 22084 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Release", "CI", "Fresh-agent field report", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45934431853 — dark (conclusion: `cancelled`), 2026-11-27 03:29 UTC
- Dark since: 2026-11-06 03:27 UTC (first run of the current streak)
- Job / step: `Build x86_64-apple-darwin`
- Likely cause: The configuration 'macos-14-arm64-us-default' is not supported

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45703884502 — dark (conclusion: `failure`), 2026-11-25 21:23 UTC
- Dark since: 2026-11-07 06:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Fresh-agent field report (`.github/workflows/field-report-e2e.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45703884511 — dark (conclusion: `failure`), 2026-11-25 21:23 UTC
- Dark since: 2026-11-17 17:53 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Deploy site (Cloudflare Pages) (`.github/workflows/deploy-pages.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45701979333 — dark (conclusion: `failure`), 2026-11-25 21:11 UTC
- Dark since: 2026-11-18 17:14 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### SEO (`.github/workflows/seo.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45701979336 — dark (conclusion: `failure`), 2026-11-25 21:11 UTC
- Dark since: 2026-11-18 17:14 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
