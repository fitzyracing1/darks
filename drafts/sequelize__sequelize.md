<!-- dark-draft: sequelize/sequelize -->
<!-- draft-state: ready -->
# Upstream issue draft: sequelize/sequelize

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/sequelize/sequelize/issues/new
- **Stars:** 30347 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Stale issue handler" workflow failing on main since 2026-09-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Stale issue handler** workflow (`.github/workflows/stale.yml`) on `main` has been failing since 2026-09-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/sequelize/sequelize/actions/runs/39180621003 — dark (conclusion: `failure`), 2026-10-19 00:24 UTC
- Dark since: 2026-09-25 00:24 UTC (first run of the current streak)
- Job / step: `stale` → `Draft unfinished PRs`
- Likely cause: Error processing PR #18543: Request failed due to following response errors:

<details><summary>End of the job log</summary>

```
Complete job name: stale
Inputs 'owner' and 'repositories' are not set. Creating token for this repository (sequelize/sequelize).
Listing all open pull requests…
Found 142 open non-draft PR(s).
── Checking PR #18555 ──
✓ Reason: failing required CI checks
Converting PR #18555 to draft (failing-required-checks)…
##[error]Failed to process PR #18555: Request failed due to following response errors:
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining sequelize!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
