<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27306 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39383005411 — dark (conclusion: `cancelled`), 2026-10-20 06:53 UTC
- Dark since: 2026-10-20 06:40 UTC (first run of the current streak)
- Job / step: `frontend-test (1/2)` → `Run frontend test shard`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  at <App>
 ✓ apps/desktop/src/components/import/__tests__/TableImportDialog.existingTarget.spec.ts (19 tests) 5182ms
     ✓ maps headerless rows.csv by ordinal position and imports a manual adjustment  664ms
     ✓ maps headerless rows.tsv by ordinal position and imports a manual adjustment  650ms
     ✓ maps headerless rows.txt by ordinal position and imports a manual adjustment  553ms
     ✓ maps headerless rows.xlsx by ordinal position and imports a manual adjustment  514ms
     ✓ recognizes Doris unique-key columns as primary keys for update-existing  303ms
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
