<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: resolved -->
# Upstream issue draft: xerj-org/xerj

- **Status:** resolved — lit again (2026-10-22); nothing to file
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 12893 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/39726789251 — dark (conclusion: `failure`), 2026-10-22 05:13 UTC
- Dark since: 2026-10-17 07:26 UTC (first run of the current streak)
- Job / step: `Build + Test` → `Workspace tests (all targets) at default parallelism (contributor's `cargo test`)`
- Likely cause: error: test failed, to rerun pass '-p xerj-engine --lib'

<details><summary>End of the job log</summary>

```
---- index::merge_publication_transaction_tests::a_background_merge_tick_cannot_move_a_hand_driven_fixture_segment_set stdout ----
thread 'index::merge_publication_transaction_tests::a_background_merge_tick_cannot_move_a_hand_driven_fixture_segment_set' (59973) panicked at crates/xerj-engine/src/index.rs:5800:33:
called `Result::unwrap()` on an `Err` value: Common(Internal { reason: "index [tick-guard] flush timed out after 120s waiting for the finalize gate; the memtable was not frozen, so this flush can be retried" })
failures:
    index::merge_publication_transaction_tests::a_background_merge_tick_cannot_move_a_hand_driven_fixture_segment_set
test result: FAILED. 795 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.95s
error: test failed, to rerun pass `-p xerj-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
