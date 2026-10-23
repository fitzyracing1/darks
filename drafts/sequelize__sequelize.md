<!-- dark-draft: sequelize/sequelize -->
<!-- draft-state: ready -->
# Upstream issue draft: sequelize/sequelize

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/sequelize/sequelize/issues/new
- **Stars:** 30348 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Stale issue handler" workflow failing on main since 2026-09-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Stale issue handler** workflow (`.github/workflows/stale.yml`) on `main` has been failing since 2026-09-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/sequelize/sequelize/actions/runs/39877796298 — dark (conclusion: `failure`), 2026-10-23 00:23 UTC
- Dark since: 2026-09-25 00:24 UTC (first run of the current streak)
- Job / step: `stale` → `Draft unfinished PRs`
- Likely cause: Error processing PR #18529: Request failed due to following response errors:

<details><summary>End of the job log</summary>

```
── Checking PR #18581 ──
PR appears ready — no action taken.
── Checking PR #18580 ──
PR appears ready — no action taken.
── Checking PR #18579 ──
✓ Reason: failing required CI checks
Converting PR #18579 to draft (failing-required-checks)…
##[error]Failed to process PR #18579: Request failed due to following response errors:
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining sequelize!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
