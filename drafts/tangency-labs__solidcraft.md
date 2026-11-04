<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 13589 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Docker", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41887424995 — dark (conclusion: `cancelled`), 2026-11-04 18:28 UTC
- Dark since: 2026-11-04 18:25 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling eframe v0.36.2
   Compiling solidcraft-render v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/render)
   Compiling solidcraft-step v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/step)
   Compiling solidcraft-smlib v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/smlib)
   Compiling solidcraft-sketch v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/sketch)
   Compiling solidcraft-kernel v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/kernel)
   Compiling solidcraft-gpu v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/gpu)
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41887742650 — dark (conclusion: `cancelled`), 2026-11-04 18:29 UTC
- Dark since: 2026-11-04 18:28 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
