<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8629 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI (macOS)" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI (macOS)** workflow (`.github/workflows/ci-macos.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/42928458729 — dark (conclusion: `failure`), 2026-11-11 00:04 UTC
- Dark since: 2026-11-10 22:55 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-15)` → `Gate`
- Likely cause: ci failed: tests

<details><summary>End of the job log</summary>

```
   = note: `State` has a derived impl for the trait `Clone`, but this is intentionally ignored during dead code analysis
   = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default
warning: `effectcraft-ui-egui` (lib) generated 2 warnings (run `cargo fix --lib -p effectcraft-ui-egui` to apply 1 suggestion)
    Checking effectcraft-web v0.23.1 (/Users/runner/work/effectcraft/effectcraft/apps/effectcraft-web)
    Finished `dev` profile [optimized + debuginfo] target(s) in 33.22s
wasm: ok (35 crates)
ci failed: tests
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
