<!-- dark-draft: tonhowtf/omniget -->
<!-- draft-state: ready -->
# Upstream issue draft: tonhowtf/omniget

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tonhowtf/omniget/issues/new
- **Stars:** 14414 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tonhowtf/omniget/actions/runs/43503311996 — dark (conclusion: `failure`), 2026-11-13 20:37 UTC
- Dark since: 2026-11-13 15:52 UTC (first run of the current streak)
- Job / step: `rust (macos-latest)` → `Clippy baseline (no new warnings)`
- Likely cause: omniget_lib: clippy::assertions_on_constants  0 -> 1  (+1)

<details><summary>End of the job log</summary>

```
  omniget_lib: clippy::manual_clamp  0 -> 1  (+1)
  omniget_lib: clippy::manual_contains  0 -> 1  (+1)
  omniget_lib: clippy::option_map_unit_fn  0 -> 1  (+1)
  omniget_lib: clippy::unnecessary_lazy_evaluations  0 -> 1  (+1)
Fix the new warnings. If they are genuinely acceptable, run
  node scripts/clippy-baseline.mjs --update
and justify the change in the pull request.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining omniget!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
