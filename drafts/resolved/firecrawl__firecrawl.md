<!-- dark-draft: firecrawl/firecrawl -->
<!-- draft-state: resolved -->
# Upstream issue draft: firecrawl/firecrawl

- **Status:** resolved — lit again (2026-11-17); nothing to file
- **Would be filed at:** https://github.com/firecrawl/firecrawl/issues/new
- **Stars:** 202489 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish Rust SDK" workflow getting cancelled on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish Rust SDK** workflow (`.github/workflows/publish-rust-sdk.yml`) on `main` has been getting cancelled since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/firecrawl/firecrawl/actions/runs/43474926270 — dark (conclusion: `cancelled`), 2026-11-13 17:39 UTC
- Dark since: 2026-11-13 17:39 UTC (first run of the current streak)
- Job / step: `Publish to crates.io`
- Likely cause: run cancelled in job "Publish to crates.io"

If this is already known or expected, feel free to close. Thanks for maintaining firecrawl!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
