<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 14164 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Kernel rig (`.github/workflows/kernel-rig.yml`): [issue #11647](https://github.com/tangency-labs/solidcraft/issues/11647) "Remove the kernel rig's transitional checks when the kernel cases run in solidcore"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42132595760 — dark (conclusion: `cancelled`), 2026-11-05 23:51 UTC
- Dark since: 2026-11-05 23:51 UTC (first run of the current streak)
- Job / step: `Format and repository checks` → `Translations in the complete catalogs`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
test ui_containers::tests::all_workspace_hosts_use_the_container ... ok
test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 105 filtered out; finished in 4.71s
    Finished `dev` profile [optimized + debuginfo] target(s) in 0.08s
     Running `target/debug/xtask lists`
lists: growing arrays checked; message catalogs, the known-failing tests and the kernel rig cases sorted (no new rig case); pending locale and attribution files fold cleanly
    Finished `dev` profile [optimized + debuginfo] target(s) in 0.07s
     Running `target/debug/xtask i18n --check`
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
