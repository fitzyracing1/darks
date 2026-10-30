<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11015 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41002738325 — dark (conclusion: `failure`), 2026-10-30 04:24 UTC
- Dark since: 2026-10-30 04:24 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
  left: Some(Preview("Biaxtest Sans", None))
 right: Some(Preview("BIZ UDPGothic", None))
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    font_menu::tests::recent_section_rebuilds_and_arrows_skip_its_headings
test result: FAILED. 2406 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 53.77s
error: test failed, to rerun pass `-p vectorcraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
