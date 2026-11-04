<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: resolved -->
# Upstream issue draft: t8y2/dbx

- **Status:** resolved — lit again (2026-11-04); nothing to file
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 28926 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/41698297403 — dark (conclusion: `failure`), 2026-11-03 18:54 UTC
- Dark since: 2026-11-03 18:54 UTC (first run of the current streak)
- Job / step: `agent-rust (duckdb)` → `Native Rust driver tests`
- Likely cause: error: test run failed

<details><summary>End of the job log</summary>

```
        PASS [   1.058s] (68/70) ***-duckdb-driver::duckdb_worker_process worker_process_retries_connect_after_transient_file_lock
        PASS [   3.365s] (69/70) ***-duckdb-driver::duckdb_worker_process worker_query_pages_preserve_one_execution
        PASS [  17.195s] (70/70) ***-duckdb-driver::duckdb_worker_process worker_parquet_exports_preserve_rows_and_project_totals
────────────
     Summary [  21.228s] 70 tests run: 69 passed, 1 failed, 0 skipped
        FAIL [   0.277s] (64/70) ***-duckdb-driver::duckdb_worker_process worker_process_recovers_after_registered_cancel_interrupt
error: test run failed
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
