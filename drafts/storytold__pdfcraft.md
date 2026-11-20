<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 21331 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/44782679811 — dark (conclusion: `failure`), 2026-11-20 17:22 UTC
- Dark since: 2026-11-20 14:03 UTC (first run of the current streak)
- Job / step: `gate / gate (windows-latest)` → `Gate`
- Likely cause: error: test failed, to rerun pass '-p pdfcraft-engine --lib'

<details><summary>End of the job log</summary>

```
   6: core::ops::function::FnOnce::call_once
             at /rustc/0ef1bc386059596dada8fb65b50425aab2ea637a/library/core\src\ops\function.rs:250
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
failures:
    rename::tests::names_windows_or_other_systems_refuse_are_refused
test result: FAILED. 794 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 10.47s
error: test failed, to rerun pass `-p pdfcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
