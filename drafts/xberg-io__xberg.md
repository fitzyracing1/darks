<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9599 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- CI Rust (`.github/workflows/ci-rust.yaml`): [issue #3290](https://github.com/xberg-io/xberg/issues/3290) "fix(ocr): abandoned Tesseract pages can crash the process at exit"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "ADRs" workflow getting cancelled on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **ADRs** workflow (`.github/workflows/adrs.yml`) on `main` has been getting cancelled since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
