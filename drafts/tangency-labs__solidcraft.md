<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 14845 · **Generated:** 2026-11-08T06:41:39.628Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #12942](https://github.com/tangency-labs/solidcraft/issues/12942) "Preferences: a shared window with kit pages and host pages", [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42453070562 — dark (conclusion: `cancelled`), 2026-11-08 06:02 UTC
- Dark since: 2026-11-07 17:21 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
    |               ^^^^^^^^^^^^^^^^^
warning: `solidcraft-ui-egui` (lib) generated 12 warnings (run `cargo fix --lib -p solidcraft-ui-egui` to apply 3 suggestions)
    Finished `release` profile [optimized + debuginfo] target(s) in 11m 02s
2026-11-08T06:14:04.132306Z  INFO downloading wasm-bindgen version="0.2.129"
2026-11-08T06:14:04.571552Z  INFO installing wasm-bindgen
2026-11-08T06:14:38.224758Z  INFO downloading wasm-opt version="version_123"
2026-11-08T06:14:38.798620Z  INFO installing wasm-opt
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
