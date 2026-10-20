<!-- dark-draft: github/spec-kit -->
<!-- draft-state: ready -->
# Upstream issue draft: github/spec-kit

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/github/spec-kit/issues/new
- **Stars:** 141967 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Documentation to Pages" workflow getting cancelled on main since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Documentation to Pages** workflow (`.github/workflows/docs.yml`) on `main` has been getting cancelled since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/github/spec-kit/actions/runs/39302748485 — dark (conclusion: `cancelled`), 2026-10-19 18:28 UTC
- Dark since: 2026-10-16 20:11 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining spec-kit!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
