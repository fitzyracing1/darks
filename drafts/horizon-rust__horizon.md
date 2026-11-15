<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 9895 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "mojang republish" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **mojang republish** workflow (`.github/workflows/mojang-republish.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43685847134 — dark (conclusion: `failure`), 2026-11-15 06:31 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: Path 'crates/horizon-core/tests/density_world_fields.rs' not uptodate; will not remove from working tree.

<details><summary>End of the job log</summary>

```
HEAD is now at f4d8d62c31ec Merge pull request #15015 from Mik00000/perf/async-chunk-save
Deleted branch main (was f4d8d62c31ec).
HEAD is now at f4d8d62c31ec Merge pull request #15015 from Mik00000/perf/async-chunk-save
From https://github.com/horizon-rust/horizon
 + f4d8d62c31ec...d5592b6e207a d5592b6e207af77d4d1871236b2ab10beb3b44f4 -> origin/main  (forced update)
  origin/main
d5592b6e207af77d4d1871236b2ab10beb3b44f4
##[error]error: Path 'crates/horizon-client-render/tests/atomic_member_values.rs' not uptodate; will not remove from working tree.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
