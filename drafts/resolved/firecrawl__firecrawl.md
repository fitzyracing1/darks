<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: resolved -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** resolved — lit again (2026-10-28); nothing to file
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 196162 · **Generated:** 2026-10-28T06:48:10.228Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish PHP SDK", "Deploy Images to GHCR")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish PHP SDK (`.github/workflows/publish-php-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/40035031098 — dark (conclusion: `cancelled`), 2026-10-23 22:39 UTC
- Dark since: 2026-10-23 07:52 UTC (first run of the current streak)
- Job / step: `Publish to Packagist`
- Likely cause: run cancelled in job "Publish to Packagist"

### Deploy Images to GHCR (`.github/workflows/deploy-image.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/40636813359 — dark (conclusion: `failure`), 2026-10-28 05:14 UTC
- Dark since: 2026-10-28 05:14 UTC (first run of the current streak)
- Job / step: `build (linux/arm64, linux-arm64, blacksmith-4vcpu-ubuntu-2404-arm)` → `Build and Push Image`
- Likely cause: The strategy configuration was canceled because "build.linux_amd64_linux-amd64_b" failed

<details><summary>End of the job log</summary>

```
#22 61.70 native install:    Compiling tracing-subscriber v0.3.23
#22 62.68 native install:    Compiling tracing v0.1.44
#22 62.75 native install:    Compiling texting_robots v0.2.2
#22 62.91 native install:    Compiling strsim v0.11.1
#22 63.34 native install:    Compiling roxmltree v0.20.0
#22 82.63 native install:    Compiling pdf-inspector v1.25.2
#22 116.2 native install:    Compiling anydoc v0.2.4
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
