<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20604 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7225](https://github.com/storytold/pdfcraft/issues/7225) "SonarCloud coverage runs without the gate's craft-fonts, so glyph tests fail there"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Nightly macOS", "CI")
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

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43463529927 — dark (conclusion: `failure`), 2026-11-13 16:31 UTC
- Dark since: 2026-11-12 19:30 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Gate`
- Likely cause: Error: Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.

<details><summary>End of the job log</summary>

```
   5: core::ops::function::FnOnce::call_once
             at /rustc/0ef1bc386059596dada8fb65b50425aab2ea637a/library/core\src\ops\function.rs:250
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    ui::home_recent_context_menu_reveals_the_target_without_opening_or_removing_it
test result: FAILED. 1896 passed; 1 failed; 4 ignored; 0 measured; 0 filtered out; finished in 118.14s
error: test failed, to rerun pass `-p pdfcraft-ui-egui --test it`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
