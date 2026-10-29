<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 11931 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Docker", "Pages", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40929455785 — dark (conclusion: `cancelled`), 2026-10-29 18:17 UTC
- Dark since: 2026-10-29 18:10 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
58 |     Later(Deferred),
   |     ^^^^^
   |
   = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default
warning: `solidcraft-engine` (lib) generated 1 warning
warning: `solidcraft-ui-egui` (lib) generated 2 warnings (run `cargo fix --lib -p solidcraft-ui-egui` to apply 1 suggestion)
   Compiling solidcraft-web v0.26.1 (/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web)
##[error]The operation was canceled.
```

</details>

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40929455813 — dark (conclusion: `cancelled`), 2026-10-29 18:17 UTC
- Dark since: 2026-10-29 18:10 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40929455759 — dark (conclusion: `cancelled`), 2026-10-29 18:17 UTC
- Dark since: 2026-10-29 18:17 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
