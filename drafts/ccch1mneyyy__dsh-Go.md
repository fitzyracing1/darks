<!-- dark-draft: ccch1mneyyy/dsh-Go -->
<!-- draft-state: ready -->
# Upstream issue draft: ccch1mneyyy/dsh-Go

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ccch1mneyyy/dsh-Go/issues/new
- **Stars:** 24699 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("iOS compile", "OHOS compile")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### iOS compile (`.github/workflows/ios-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/43923734916 — dark (conclusion: `cancelled`), 2026-11-16 17:57 UTC
- Dark since: 2026-11-16 13:50 UTC (first run of the current streak)
- Job / step: `engine`
- Likely cause: Canceling since a higher priority waiting request for ios-compile-refs/heads/main exists

### OHOS compile (`.github/workflows/ohos-compile.yml`)

- Latest run on `main`: https://github.com/ccch1mneyyy/dsh-Go/actions/runs/43925147125 — dark (conclusion: `failure`), 2026-11-16 18:05 UTC
- Dark since: 2026-11-16 17:24 UTC (first run of the current streak)
- Job / step: `compile`
- Likely cause: The job was not acquired by Runner of type hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining dsh-Go!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
