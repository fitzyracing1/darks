<!-- dark-draft: storytold/wordcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/wordcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/wordcraft/issues/new
- **Stars:** 14398 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #2069](https://github.com/storytold/wordcraft/issues/2069) "FreeBSD nightly is red: two layout tests depend on the installed fonts"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Printing" workflow failing on main since 2026-10-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Printing** workflow (`.github/workflows/printing.yml`) on `main` has been failing since 2026-10-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/wordcraft/actions/runs/39166614455 — dark (conclusion: `failure`), 2026-10-18 21:10 UTC
- Dark since: 2026-10-18 15:34 UTC (first run of the current streak)
- Job / step: `Print (windows-latest)` → `Native app and UI Clippy`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
error: function `configure_indirect_validation` is never used
  --> apps\wordcraft\src\graphics.rs:23:8
   |
23 | pub fn configure_indirect_validation(options: &mut NativeOptions, skip: bool) {
   |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
error: could not compile `wordcraft` (bin "wordcraft") due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining wordcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
