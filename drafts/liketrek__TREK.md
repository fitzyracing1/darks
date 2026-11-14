<!-- dark-draft: liketrek/TREK -->
<!-- draft-state: ready -->
# Upstream issue draft: liketrek/TREK

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/liketrek/TREK/issues/new
- **Stars:** 15540 · **Generated:** 2026-11-14T12:39:18.791Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests & SonarQube" workflow getting cancelled on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests & SonarQube** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/liketrek/TREK/actions/runs/43290014169 — dark (conclusion: `cancelled`), 2026-11-12 19:25 UTC
- Dark since: 2026-11-12 19:25 UTC (first run of the current streak)
- Job / step: `Shared: i18n Parity`
- Likely cause: The run was canceled by @mauriceboe.

If this is already known or expected, feel free to close. Thanks for maintaining TREK!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
