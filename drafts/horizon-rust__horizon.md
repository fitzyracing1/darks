<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8157 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("parity-main", "checks")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### parity-main (`.github/workflows/parity-main.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42542273830 — dark (conclusion: `cancelled`), 2026-11-09 00:49 UTC
- Dark since: 2026-11-08 04:57 UTC (first run of the current streak)
- Likely cause: run cancelled

### checks (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42537911007 — dark (conclusion: `failure`), 2026-11-09 00:00 UTC
- Dark since: 2026-11-08 18:17 UTC (first run of the current streak)
- Job / step: `verify` → `Test Rust core and voxel kernel correctness`
- Likely cause: error: test failed, to rerun pass '-p horizon-client --lib'

<details><summary>End of the job log</summary>

```
assertion `left == right` failed
  left: {"add_server_reload_listeners", "analog_output", "anvil_craft_post", "anvil_craft_pre", "anvil_damaged", "anvil_update", "apply_effect_tick", "armor_stand_manipulate", "arrow_loose", "arrow_nock", "attack_entity…
 right: {"add_server_reload_listeners", "analog_output", "anvil_craft_post", "anvil_craft_pre", "anvil_damaged", "anvil_update", "apply_effect_tick", "armor_stand_manipulate", "arrow_loose", "arrow_nock", "attack_entity…
failures:
    game::native_hooks::tests::catalog_matches_hook_points
test result: FAILED. 1216 passed; 1 failed; 372 ignored; 0 measured; 0 filtered out; finished in 2.89s
error: test failed, to rerun pass `-p horizon-client --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
