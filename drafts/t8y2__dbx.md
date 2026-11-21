<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 31099 · **Generated:** 2026-11-21T18:36:18.976Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/44935331289 — dark (conclusion: `cancelled`), 2026-11-21 18:24 UTC
- Dark since: 2026-11-21 18:22 UTC (first run of the current streak)
- Job / step: `frontend-test (2/2)` → `Run frontend test shard`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
 ✓ apps/desktop/src/composables/__tests__/useBackgroundImage.spec.ts (6 tests) 215ms
 ✓ apps/desktop/src/lib/__tests__/table/tableStructureCapabilities.spec.ts (13 tests) 13ms
 ✓ apps/desktop/src/components/editor/__tests__/EditorSettingsDialog.sidebarTablePageSize.integration.spec.ts (2 tests) 811ms
     ✓ re-syncs a non-positive draft after Apply so hasChanges is not sticky  487ms
     ✓ Apply and Close succeeds after a non-positive sidebar page size apply  323ms
 ✓ apps/desktop/src/lib/__tests__/database/NativeJobReferencePicker.component.spec.ts (8 tests) 72ms
 ✓ apps/desktop/src/docs/__tests__/fixtureConformance.spec.ts (15 tests) 78ms
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
