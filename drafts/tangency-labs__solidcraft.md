<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 12313 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Pages", "Docker", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41106539937 — dark (conclusion: `cancelled`), 2026-10-30 18:23 UTC
- Dark since: 2026-10-29 18:10 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41106539805 — dark (conclusion: `cancelled`), 2026-10-30 18:23 UTC
- Dark since: 2026-10-30 12:22 UTC (first run of the current streak)
- Job / step: `image`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling solidcraft-kernel v0.27.1 (/home/runner/work/solidcraft/solidcraft/crates/kernel)
   Compiling solidcraft-derive v0.27.1 (/home/runner/work/solidcraft/solidcraft/crates/derive)
   Compiling egui-wgpu v0.36.2 (/home/runner/work/solidcraft/solidcraft/vendor/egui-wgpu)
   Compiling solidcraft-ui-egui v0.27.1 (/home/runner/work/solidcraft/solidcraft/crates/ui-egui)
   Compiling solidcraft-gpu v0.27.1 (/home/runner/work/solidcraft/solidcraft/crates/gpu)
   Compiling solidcraft-space-mouse v0.27.1 (/home/runner/work/solidcraft/solidcraft/crates/space-mouse)
   Compiling eframe v0.36.2
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41106539926 — dark (conclusion: `cancelled`), 2026-10-30 18:23 UTC
- Dark since: 2026-10-30 18:23 UTC (first run of the current streak)
- Likely cause: run cancelled

### Generated files (`.github/workflows/generated.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41106539826 — dark (conclusion: `cancelled`), 2026-10-30 18:23 UTC
- Dark since: 2026-10-30 18:23 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
