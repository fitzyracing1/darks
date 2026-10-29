<!-- dark-draft: yetone/magpie -->
<!-- draft-state: ready -->
# Upstream issue draft: yetone/magpie

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/yetone/magpie/issues/new
- **Stars:** 25332 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow getting cancelled on main since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/yetone/magpie/actions/runs/40931287128 — dark (conclusion: `cancelled`), 2026-10-29 18:29 UTC
- Dark since: 2026-10-25 04:42 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining magpie!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
