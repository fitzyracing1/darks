<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 19105 · **Generated:** 2026-11-06T12:41:11.038Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow getting cancelled on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been getting cancelled since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42156654351 — dark (conclusion: `cancelled`), 2026-11-06 03:27 UTC
- Dark since: 2026-11-06 03:27 UTC (first run of the current streak)
- Job / step: `Build x86_64-apple-darwin`
- Likely cause: The configuration 'macos-14-arm64-us-default' is not supported

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
