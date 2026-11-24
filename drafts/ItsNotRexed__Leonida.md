<!-- dark-draft: ItsNotRexed/Leonida -->
<!-- draft-state: ready -->
# Upstream issue draft: ItsNotRexed/Leonida

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ItsNotRexed/Leonida/issues/new
- **Stars:** 27081 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Runtime (`.github/workflows/runtime.yml`): [issue #4420](https://github.com/ItsNotRexed/Leonida/issues/4420) "NVIDIA GTX 1060 (Pascal, 582.78): three runtime GPU tests fail on clean main", [issue #1725](https://github.com/ItsNotRexed/Leonida/issues/1725) "Runtime tests d3d12_descriptor, d3d12_copy_xfmt and d3d12_vulkan_device fail on Intel UHD 770 (Xe-LP, 101.7092)", [issue #4810](https://github.com/ItsNotRexed/Leonida/issues/4810) "d3d12_vulkan_device_test: 8 invalid-argument cases where the layer accepts what an older NVIDIA runtime refuses (per-vendor divergence, needs a ruling)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "No Game Data")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ItsNotRexed/Leonida/actions/runs/45238973350 — dark (conclusion: `cancelled`), 2026-11-23 18:29 UTC
- Dark since: 2026-11-22 13:02 UTC (first run of the current streak)
- Likely cause: run cancelled

### No Game Data (`.github/workflows/no-game-data.yml`)

- Latest run on `main`: https://github.com/ItsNotRexed/Leonida/actions/runs/45238973265 — dark (conclusion: `cancelled`), 2026-11-23 18:29 UTC
- Dark since: 2026-11-23 16:29 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining Leonida!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
