<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** resolved — lit again (2026-10-29); nothing to file
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10939 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/40632191393 — dark (conclusion: `failure`), 2026-10-28 04:24 UTC
- Dark since: 2026-10-28 04:24 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-render --lib'

<details><summary>End of the job log</summary>

```
---- tests::placed_document::a_ready_bitmap_draws_again_where_its_file_shows stdout ----
thread 'tests::placed_document::a_ready_bitmap_draws_again_where_its_file_shows' (155557) panicked at crates/render/src/tests/placed_document.rs:276:5:
the bitmaps show
failures:
    tests::placed_document::a_ready_bitmap_draws_again_where_its_file_shows
test result: FAILED. 426 passed; 1 failed; 4 ignored; 0 measured; 0 filtered out; finished in 37.12s
error: test failed, to rerun pass `-p vectorcraft-render --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
