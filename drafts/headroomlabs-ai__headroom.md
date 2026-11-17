<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 79879 · **Generated:** 2026-11-17T12:40:23.310Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/44027113710 — dark (conclusion: `failure`), 2026-11-17 05:52 UTC
- Dark since: 2026-11-17 05:26 UTC (first run of the current streak)
- Job / step: `test (3)` → `Run test shard 3/4`
- Likely cause: = 4967 passed, 120 skipped, 15250 deselected, 1173 warnings, 7 errors in 870.45s (0:14:30) =

<details><summary>End of the job log</summary>

```
ERROR tests/test_memory_sync_full_store.py::test_sync_refetch_after_import_does_not_truncate_exports - ImportError: hnswlib is required for HNSWVectorIndex. Install with: pip install hnswlib
Note: hnswlib requires C++ compilation and may not be available on all platforms (crashes with SIGILL on CPUs without AVX support).
ERROR tests/test_memory_sync_full_store.py::test_explicit_existing_snapshot_is_not_requeried - ImportError: hnswlib is required for HNSWVectorIndex. Install with: pip install hnswlib
Note: hnswlib requires C++ compilation and may not be available on all platforms (crashes with SIGILL on CPUs without AVX support).
ERROR tests/test_memory_sync_full_store.py::test_optional_unbounded_query_preserves_the_default_limit - ImportError: hnswlib is required for HNSWVectorIndex. Install with: pip install hnswlib
Note: hnswlib requires C++ compilation and may not be available on all platforms (crashes with SIGILL on CPUs without AVX support).
= 4967 passed, 120 skipped, 15250 deselected, 1173 warnings, 7 errors in 870.45s (0:14:30) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
