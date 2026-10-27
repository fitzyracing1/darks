<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 195706 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Publish PHP SDK", "Publish Go SDK", "Audit NPM Packages")
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

### Audit NPM Packages (`.github/workflows/npm-audit.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/40365312916 — dark (conclusion: `failure`), 2026-10-26 17:05 UTC
- Dark since: 2026-10-24 17:04 UTC (first run of the current streak)
- Job / step: `audit` → `Report audit failures`
- Likely cause: Failed security audit due to high, low, moderate vulnerabilities.

<details><summary>End of the job log</summary>

```
Vulnerable advisories are:
https://github.com/advisories/GHSA-333x-w4r6-6crp
https://github.com/advisories/GHSA-q7qp-rjg7-q26m
https://github.com/advisories/GHSA-w74x-v6f9-j3xg
https://github.com/advisories/GHSA-wjr9-j795-jxcr
https://github.com/advisories/GHSA-xhq7-xmqj-769h
Exiting...
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
