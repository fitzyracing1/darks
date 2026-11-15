<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: resolved -->
# Upstream issue draft: t8y2/dbx

- **Status:** resolved — lit again (2026-11-15); nothing to file
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 30367 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-15
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-15. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/43695820475 — dark (conclusion: `failure`), 2026-11-15 08:43 UTC
- Dark since: 2026-11-15 08:37 UTC (first run of the current streak)
- Job / step: `agent-rust (duckdb)` → `Native Rust driver tests`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
        PASS [   1.043s] (68/70) ***-duckdb-driver::duckdb_worker_process worker_process_retries_connect_after_transient_file_lock
        PASS [   3.238s] (69/70) ***-duckdb-driver::duckdb_worker_process worker_query_pages_preserve_one_execution
        PASS [  14.820s] (70/70) ***-duckdb-driver::duckdb_worker_process worker_parquet_exports_preserve_rows_and_project_totals
────────────
     Summary [  18.946s] 70 tests run: 69 passed, 1 failed, 0 skipped
        FAIL [   0.394s] (64/70) ***-duckdb-driver::duckdb_worker_process worker_process_recovers_after_registered_cancel_interrupt
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
