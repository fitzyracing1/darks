<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 12376 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Pages", "Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41150242541 — dark (conclusion: `cancelled`), 2026-10-31 00:27 UTC
- Dark since: 2026-10-29 18:10 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41150242511 — dark (conclusion: `cancelled`), 2026-10-31 00:27 UTC
- Dark since: 2026-10-30 12:22 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
warning: `solidcraft-ui-egui` (lib) generated 3 warnings (run `cargo fix --lib -p solidcraft-ui-egui` to apply 1 suggestion)
   Compiling solidcraft-web v0.28.0 (/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web)
    Finished `release` profile [optimized + debuginfo] target(s) in 7m 23s
2026-10-31T00:36:47.293846Z  INFO downloading wasm-bindgen version="0.2.129"
2026-10-31T00:36:47.682020Z  INFO installing wasm-bindgen
2026-10-31T00:37:08.499939Z  INFO downloading wasm-opt version="version_123"
2026-10-31T00:37:09.073541Z  INFO installing wasm-opt
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
