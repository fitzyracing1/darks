<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27603 · **Generated:** 2026-10-23T06:59:11.689Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Deploy Docs", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Deploy Docs (`.github/workflows/docs.yml`)

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39913451848 — dark (conclusion: `failure`), 2026-10-23 06:45 UTC
- Dark since: 2026-10-23 04:08 UTC (first run of the current streak)
- Job / step: `build` → `Run cd docs && pnpm install --frozen-lockfile && pnpm build`
- Likely cause: Error: SEO verification failed:

<details><summary>End of the job log</summary>

```
if (errors.length) throw new Error(`SEO verification failed:\n${errors.join("\n")}`);
                         ^
Error: SEO verification failed:
/en/plugins/io.github.caichangqing1120.xxljob: duplicate title in the same language
    at file:///home/runner/work/dbx/dbx/docs/scripts/verify-seo.mjs:43:26
Node.js v22.23.3
 ELIFECYCLE  Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39909869429 — dark (conclusion: `cancelled`), 2026-10-23 06:10 UTC
- Dark since: 2026-10-23 06:09 UTC (first run of the current streak)
- Job / step: `rust-test (workspace)` → `Nextest`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
        PASS [   0.006s] ( 5858/10176) ***-driver-postgres postgres::tests::postgres_table_objects_sql_excludes_views_before_pagination
        PASS [   0.006s] ( 5859/10176) ***-driver-postgres postgres::tests::postgres_table_partition_relation_sql_flags_inherits_parent
        PASS [   0.006s] ( 5860/10176) ***-driver-postgres postgres::tests::postgres_table_partition_sql_tracks_parents_bounds_and_local_objects
        PASS [   0.007s] ( 5861/10176) ***-driver-postgres postgres::tests::postgres_tables_sql_contains_expected_columns
        PASS [   0.006s] ( 5862/10176) ***-driver-postgres postgres::tests::postgres_tables_sql_uses_literal_pagination_without_escape_clause
        PASS [   0.006s] ( 5863/10176) ***-driver-postgres postgres::tests::postgres_temporal_text_array_fallback_preserves_values_and_nulls
        PASS [   0.008s] ( 5864/10176) ***-driver-postgres postgres::tests::postgres_temporal_text_fallback_keeps_session_wall_time_and_normalizes_offset
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
