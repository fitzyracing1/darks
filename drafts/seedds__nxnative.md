<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16803 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "tests" workflow getting cancelled on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tests** workflow (`.github/workflows/tests.yml`) on `main` has been getting cancelled since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45951061600 — dark (conclusion: `cancelled`), 2026-11-27 06:18 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
