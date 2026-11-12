<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20439 · **Generated:** 2026-11-12T06:44:18.567Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Nightly macOS" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Nightly macOS** workflow (`.github/workflows/nightly-macos.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/43143235183 — dark (conclusion: `failure`), 2026-11-12 02:42 UTC
- Dark since: 2026-11-12 02:42 UTC (first run of the current streak)
- Job / step: `gate / gate (macos-latest)` → `Gate`
- Likely cause: test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

<details><summary>End of the job log</summary>

```
running 0 tests
error: 4 targets failed:
    `-p pdfcraft-automation --test it`
test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    `-p pdfcraft-platform --lib`
    `-p pdfcraft-ui-egui --lib`
    `-p pdfcraft-ui-egui --test it`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
