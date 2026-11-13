<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20537 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- SonarCloud (`.github/workflows/sonarcloud.yml`): [issue #7175](https://github.com/storytold/pdfcraft/issues/7175) "CI: investigate three recurring coverage-test failures on main"

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

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43346926538 — dark (conclusion: `failure`), 2026-11-13 01:42 UTC
- Dark since: 2026-11-12 19:30 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Gate`
- Likely cause: Error: Path Validation Error: Path(s) specified in the action for caching do(es) not exist, hence no cache is being saved.

<details><summary>End of the job log</summary>

```
    | |_____^ help: you can reduce it to: `!(!program.is_absolute() || !program.is_file())`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/rust-1.100.0/index.html#needless_bool
    = note: `-D clippy::needless-bool` implied by `-D warnings`
    = help: to override `-D warnings` add `#[allow(clippy::needless_bool)]`
error: could not compile `pdfcraft-ocr` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
