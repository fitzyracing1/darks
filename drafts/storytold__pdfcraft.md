<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20571 · **Generated:** 2026-11-13T12:41:39.120Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Nightly macOS", "CI", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly macOS (`.github/workflows/nightly-macos.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43354042554 — dark (conclusion: `failure`), 2026-11-13 02:42 UTC
- Dark since: 2026-11-12 02:42 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-latest)` → `Gate`
- Likely cause: error: 4 targets failed:

<details><summary>End of the job log</summary>

```
running 0 tests
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
error: 4 targets failed:
    `-p pdfcraft-automation --test it`
    `-p pdfcraft-platform --lib`
    `-p pdfcraft-ui-egui --lib`
    `-p pdfcraft-ui-egui --test it`
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43416758147 — dark (conclusion: `failure`), 2026-11-13 11:24 UTC
- Dark since: 2026-11-12 19:30 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: xtask ci: error: ci failed at 'test'

<details><summary>End of the job log</summary>

```
        PASS [   1.369s] (10107/10107) pdfcraft-xfdf tests_format::the_export_loop_writes_no_more_appearance_than_import_reads
────────────
     Summary [ 206.647s] 10107 tests run: 10106 passed, 1 failed, 22 skipped
        FAIL [   0.217s] ( 9296/10107) pdfcraft-ui-egui::it ui::home_recent_context_menu_reveals_the_target_without_opening_or_removing_it
error: test run failed
CI: 3 passed, FAILED at `test`: cargo nextest run --no-fail-fast --workspace --lib --bins --tests: exited with exit status: 100
xtask ci: error: ci failed at `test`
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43416758199 — dark (conclusion: `failure`), 2026-11-13 11:24 UTC
- Dark since: 2026-11-13 01:19 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 4 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
12:10:39.785 INFO  ------------- Upload SCA dependency files
12:10:40.765 INFO  Successfully sent architecture data
12:10:41.974 INFO  Sensor cache published successfully
12:10:43.308 INFO  Analysis total time: 2:57.785 min
12:10:43.310 INFO  SonarScanner Engine completed successfully
12:10:43.491 INFO  EXECUTION SUCCESS
12:10:43.492 INFO  Total time: 3:04.681s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
