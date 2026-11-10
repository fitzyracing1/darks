<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8377 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "parity-main" workflow getting cancelled on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **parity-main** workflow (`.github/workflows/parity-main.yml`) on `main` has been getting cancelled since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42717498075 — dark (conclusion: `cancelled`), 2026-11-09 23:05 UTC
- Dark since: 2026-11-08 04:57 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
