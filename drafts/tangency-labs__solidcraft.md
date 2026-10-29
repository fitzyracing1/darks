<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 11661 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Docker", "Pages", "CI", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40796799884 — dark (conclusion: `cancelled`), 2026-10-29 00:51 UTC
- Dark since: 2026-10-28 12:29 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling truck-meshalgo v0.4.0 (/home/runner/work/solidcraft/solidcraft/vendor/truck-meshalgo)
   Compiling truck-shapeops v0.4.0 (/home/runner/work/solidcraft/solidcraft/vendor/truck-shapeops)
   Compiling solidcraft-render v0.26.0 (/home/runner/work/solidcraft/solidcraft/crates/render)
   Compiling truck-stepio v0.3.0 (/home/runner/work/solidcraft/solidcraft/vendor/truck-stepio)
   Compiling solidcraft-kernel v0.26.0 (/home/runner/work/solidcraft/solidcraft/crates/kernel)
   Compiling solidcraft-sketch v0.26.0 (/home/runner/work/solidcraft/solidcraft/crates/sketch)
   Compiling solidcraft-gpu v0.26.0 (/home/runner/work/solidcraft/solidcraft/crates/gpu)
##[error]The operation was canceled.
```

</details>

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40796799906 — dark (conclusion: `cancelled`), 2026-10-29 00:51 UTC
- Dark since: 2026-10-28 18:08 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40796799950 — dark (conclusion: `cancelled`), 2026-10-29 00:51 UTC
- Dark since: 2026-10-29 00:51 UTC (first run of the current streak)
- Likely cause: run cancelled

### Generated files (`.github/workflows/generated.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40796799928 — dark (conclusion: `cancelled`), 2026-10-29 00:51 UTC
- Dark since: 2026-10-29 00:51 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
