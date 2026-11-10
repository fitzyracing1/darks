<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: ready -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 200161 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish JS SDK" workflow getting cancelled on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish JS SDK** workflow (`.github/workflows/publish-js-sdk.yml`) on `main` has been getting cancelled since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/42295179005 — dark (conclusion: `cancelled`), 2026-11-06 21:15 UTC
- Dark since: 2026-11-06 21:15 UTC (first run of the current streak)
- Job / step: `Publish`
- Likely cause: run cancelled in job "Publish"

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
