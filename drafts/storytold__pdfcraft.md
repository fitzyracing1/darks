<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21937 · **Generated:** 2026-11-27T18:37:03.333Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Nightly macOS", "FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Nightly macOS (`.github/workflows/nightly-macos.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45929832851 — dark (conclusion: `failure`), 2026-11-27 02:41 UTC
- Dark since: 2026-11-23 02:42 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-latest)` → `Gate`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   |
34 | egui_extras = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `egui_extras`
warning: `pdfcraft-ui-egui` (manifest) generated 1 warning
##[error]Process completed with exit code 101.
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/45934692416 — dark (conclusion: `failure`), 2026-11-27 03:31 UTC
- Dark since: 2026-11-23 19:45 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
833 |     assert!(h.state().views[0].crop_drag.is_none(), "the Crop tool must not receive a wheel drag");
    |                                ^^^^^^^^^ unknown field
    |
    = note: available fields are: `id`, `from_attachment`, `view`, `session`, `textures` ... and 23 others
For more information about this error, try `rustc --explain E0609`.
error: could not compile `pdfcraft-ui-egui` (test "it") due to 1 previous error
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/46000404092 — dark (conclusion: `failure`), 2026-11-27 12:39 UTC
- Dark since: 2026-11-23 20:01 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Gate`
- Likely cause: error: test failed, to rerun pass '-p pdfcraft-ui-egui --test it'

<details><summary>End of the job log</summary>

```
             at /rustc/0ef1bc386059596dada8fb65b50425aab2ea637a/library/core\src\ops\function.rs:250
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    editing::the_last_session_reopens_its_files_pages_and_active_tab
    pickers::attachment_save_preserves_bytes_metadata_and_selected_destination
test result: FAILED. 1561 passed; 2 failed; 10 ignored; 0 measured; 0 filtered out; finished in 357.18s
error: test failed, to rerun pass `-p pdfcraft-ui-egui --test it`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
