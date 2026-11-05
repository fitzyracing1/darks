<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 198816 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Publish Go SDK", "Publish JS SDK", "Publish .NET SDK", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Go SDK (`.github/workflows/publish-go-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41793074345 — dark (conclusion: `cancelled`), 2026-11-04 07:33 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Tag and index on pkg.go.dev`
- Likely cause: run cancelled in job "Tag and index on pkg.go.dev"

### Publish JS SDK (`.github/workflows/publish-js-sdk.yml`)

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41793074645 — dark (conclusion: `failure`), 2026-11-04 07:33 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish` → `Publish`
- Likely cause: npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-04T16_59_57_950Z-debug-0.log

<details><summary>End of the job log</summary>

```
npm error command git --no-replace-objects ls-remote ssh://git@github.com/dist/firecrawl-4.52.0.tgz.git
npm error git@github.com: Permission denied (publickey).
npm error fatal: Could not read from remote repository.
npm error
npm error Please make sure you have the correct access rights
npm error and the repository exists.
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-04T16_59_57_950Z-debug-0.log
##[error]Process completed with exit code 128.
```

</details>

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

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/41793074752 — dark (conclusion: `cancelled`), 2026-11-04 07:33 UTC
- Dark since: 2026-11-03 20:04 UTC (first run of the current streak)
- Job / step: `Publish to crates.io`
- Likely cause: run cancelled in job "Publish to crates.io"

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
