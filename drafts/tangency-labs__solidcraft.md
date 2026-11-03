<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 13235 · **Generated:** 2026-11-03T06:44:54.436Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41587135019 — dark (conclusion: `failure`), 2026-11-03 06:00 UTC
- Dark since: 2026-11-03 04:27 UTC (first run of the current streak)
- Job / step: `Reference tests` → `Replay tests/oracle and compare with expected.json`
- Likely cause: error: 1 case(s) failed: 77-fillet-variable-linear

<details><summary>End of the job log</summary>

```
    Finished `ci` profile [optimized + debuginfo] target(s) in 3m 49s
   Compiling serde_json v1.0.151
   Compiling xtask v0.40.0-rc.1 (/home/runner/_work/solidcraft/solidcraft/xtask)
    Finished `dev` profile [optimized + debuginfo] target(s) in 7.88s
     Running `target/debug/xtask oracle --cli target/ci/solidcraft-cli`
oracle: 87/90 cases pass, 2 known failures, 0 without expected values → docs/oracle.md
error: 1 case(s) failed: 77-fillet-variable-linear
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
