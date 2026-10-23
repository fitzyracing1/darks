<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 220219 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "publish" workflow getting cancelled on dev since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **publish** workflow (`.github/workflows/publish.yml`) on `dev` has been getting cancelled since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/39878909825 — dark (conclusion: `cancelled`), 2026-10-23 00:34 UTC
- Dark since: 2026-10-22 17:19 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
