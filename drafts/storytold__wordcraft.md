<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 14484 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #2069](https://github.com/storytold/wordcraft/issues/2069) "FreeBSD nightly is red: two layout tests depend on the installed fonts"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Printing" workflow getting cancelled on main since 2026-10-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Printing** workflow (`.github/workflows/printing.yml`) on `main` has been getting cancelled since 2026-10-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/39213709420 — dark (conclusion: `cancelled`), 2026-10-19 07:05 UTC
- Dark since: 2026-10-18 15:34 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining wordcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
