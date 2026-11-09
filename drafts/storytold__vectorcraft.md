<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11533 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42561566612 — dark (conclusion: `failure`), 2026-11-09 04:23 UTC
- Dark since: 2026-11-09 04:23 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-ui-egui --lib'

<details><summary>End of the job log</summary>

```
  left: 1
 right: 3
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    panels::layers::thumbs::tests::the_shown_documents_thumbnails_are_made_before_the_queued_ones_of_another
test result: FAILED. 3674 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 107.70s
error: test failed, to rerun pass `-p vectorcraft-ui-egui --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
