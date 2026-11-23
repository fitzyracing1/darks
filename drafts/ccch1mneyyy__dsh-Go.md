<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 30714 · **Generated:** 2026-11-23T18:39:43.208Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "OHOS compile" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **OHOS compile** workflow (`.github/workflows/ohos-compile.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/45221522959 — dark (conclusion: `failure`), 2026-11-23 16:53 UTC
- Dark since: 2026-11-23 16:53 UTC (first run of the current streak)
- Job / step: `compile`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
