<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 200738 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Images to GHCR" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Images to GHCR** workflow (`.github/workflows/deploy-image.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/42952188142 — dark (conclusion: `failure`), 2026-11-11 03:21 UTC
- Dark since: 2026-11-11 03:21 UTC (first run of the current streak)
- Job / step: `build (linux/arm64, linux-arm64, blacksmith-4vcpu-ubuntu-2404-arm)` → `Setup Blacksmith Builder`
- Likely cause: The strategy configuration was canceled because "build.linux_amd64_linux-amd64_b" failed

<details><summary>End of the job log</summary>

```
Successfully connected to Blacksmith agent
Getting sticky disk for firecrawl/firecrawl
##[warning]Error in setupStickyDisk: [unknown] failed to expose and mount sticky disk: unexpected status code: 409, body: {"error":"Sticky disk exposes are temporarily disabled (all_stickydisk_expose_disabled)","code":"…
(node:2947) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabili…
##[warning]Error during Blacksmith builder setup: [unknown] failed to expose and mount sticky disk: unexpected status code: 409, body: {"error":"Sticky disk exposes are temporarily disabled (all_stickydisk_expose_disabl…
##[warning]Failed to setup Blacksmith builder, using local builder
Found configured builder: default
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
