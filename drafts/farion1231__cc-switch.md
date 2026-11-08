<!-- dark-draft: farion1231/cc-switch -->
<!-- draft-state: ready -->
# Upstream issue draft: farion1231/cc-switch

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/farion1231/cc-switch/issues/new
- **Stars:** 152588 · **Generated:** 2026-11-08T00:55:40.555Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-07
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-07. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/farion1231/cc-switch/actions/runs/42387231924 — dark (conclusion: `failure`), 2026-11-07 15:36 UTC
- Dark since: 2026-11-07 15:36 UTC (first run of the current streak)
- Job / step: `Backend Checks (windows-latest)` → `Clippy`
- Likely cause: error: could not compile 'cc-switch' (lib) due to 1 previous error

<details><summary>End of the job log</summary>

```
    |                       ----^^^^^^^
    |                       |
    |                       help: remove this `mut`
    |
    = note: `-D unused-mut` implied by `-D warnings`
    = help: to override `-D warnings` add `#[allow(unused_mut)]`
error: could not compile `cc-switch` (lib) due to 1 previous error
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cc-switch!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
