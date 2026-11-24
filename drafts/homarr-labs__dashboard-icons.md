<!-- dark-draft: homarr-labs/dashboard-icons -->
<!-- draft-state: ready -->
# Upstream issue draft: homarr-labs/dashboard-icons

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/homarr-labs/dashboard-icons/issues/new
- **Stars:** 9155 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Sync selfh.st icons" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Sync selfh.st icons** workflow (`.github/workflows/sync-selfhst.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/homarr-labs/dashboard-icons/actions/runs/45206771399 — dark (conclusion: `failure`), 2026-11-23 15:34 UTC
- Dark since: 2026-11-23 15:34 UTC (first run of the current streak)
- Job / step: `sync` → `Import external icons`
- Likely cause: error: The socket connection was closed unexpectedly. For more information, pass 'verbose: true' in the second argument to fetch()

<details><summary>End of the job log</summary>

```
181 | 			await pb.collection("external_icons").update(existingId, record)
                                               ^
error: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()
  path: "***/api/collections/external_icons/records/tomsau8vwco7dkz",
 errno: 0,
  code: "ECONNRESET"
      at async main (/home/runner/work/dashboard-icons/dashboard-icons/web/scripts/import-selfhst.ts:181:42)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dashboard-icons!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
