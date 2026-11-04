<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 198491 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Publish PHP SDK", "Publish Go SDK", "Publish Python SDK", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish PHP SDK (`.github/workflows/publish-php-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41525420774 — dark (conclusion: `cancelled`), 2026-11-02 21:07 UTC
- Dark since: 2026-11-02 21:07 UTC (first run of the current streak)
- Job / step: `Publish to Packagist`
- Likely cause: run cancelled in job "Publish to Packagist"

### Publish Go SDK (`.github/workflows/publish-go-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41709159878 — dark (conclusion: `cancelled`), 2026-11-03 20:04 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Tag and index on pkg.go.dev`
- Likely cause: run cancelled in job "Tag and index on pkg.go.dev"

### Publish Python SDK (`.github/workflows/publish-python-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41732735926 — dark (conclusion: `cancelled`), 2026-11-03 22:39 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish to PyPI`
- Likely cause: run cancelled in job "Publish to PyPI"

### Publish JS SDK (`.github/workflows/publish-js-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41709160241 — dark (conclusion: `cancelled`), 2026-11-03 20:04 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish`
- Likely cause: run cancelled in job "Publish"

### Publish .NET SDK (`.github/workflows/publish-dotnet-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41709160224 — dark (conclusion: `cancelled`), 2026-11-03 20:04 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish to NuGet`
- Likely cause: run cancelled in job "Publish to NuGet"

### Publish Java SDK (`.github/workflows/publish-java-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41709160134 — dark (conclusion: `cancelled`), 2026-11-03 20:04 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish to Maven Central`
- Likely cause: run cancelled in job "Publish to Maven Central"

### Publish Rust SDK (`.github/workflows/publish-rust-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41709160191 — dark (conclusion: `cancelled`), 2026-11-03 20:04 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish to crates.io`
- Likely cause: run cancelled in job "Publish to crates.io"

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
