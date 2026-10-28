<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 196083 · **Generated:** 2026-10-28T01:00:05.584Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish PHP SDK", "Publish Go SDK")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish PHP SDK (`.github/workflows/publish-php-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/40035031098 — dark (conclusion: `cancelled`), 2026-10-23 22:39 UTC
- Dark since: 2026-10-23 07:52 UTC (first run of the current streak)
- Job / step: `Publish to Packagist`
- Likely cause: run cancelled in job "Publish to Packagist"

### Publish Go SDK (`.github/workflows/publish-go-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/39920726909 — dark (conclusion: `cancelled`), 2026-10-23 07:52 UTC
- Dark since: 2026-10-23 07:52 UTC (first run of the current streak)
- Job / step: `Tag and index on pkg.go.dev`
- Likely cause: run cancelled in job "Tag and index on pkg.go.dev"

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
