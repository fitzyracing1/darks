<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 78898 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "rust")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/41973490953 — dark (conclusion: `failure`), 2026-11-05 05:21 UTC
- Dark since: 2026-11-05 04:53 UTC (first run of the current streak)
- Job / step: `test (2)` → `Run test shard 2/4`
- Likely cause: = 4 failed, 4412 passed, 374 skipped, 14323 deselected, 1217 warnings in 479.58s (0:07:59) =

<details><summary>End of the job log</summary>

```
Coverage XML written to file coverage-2.xml
=========================== short test summary info ============================
FAILED tests/test_gemini_memory_tail_preserved.py::test_memory_reaches_latest_user_entry_with_function_response - AttributeError: '_FakeRequest' object has no attribute 'stream'
FAILED tests/test_gemini_memory_tail_preserved.py::test_memory_reaches_latest_user_entry_with_inline_image - AttributeError: '_FakeRequest' object has no attribute 'stream'
FAILED tests/test_gemini_memory_tail_preserved.py::test_text_only_latest_entry_is_unchanged - AttributeError: '_FakeRequest' object has no attribute 'stream'
FAILED tests/test_gemini_memory_tail_preserved.py::test_older_preserved_entry_is_not_rewritten_or_logged - AttributeError: '_FakeRequest' object has no attribute 'stream'
= 4 failed, 4412 passed, 374 skipped, 14323 deselected, 1217 warnings in 479.58s (0:07:59) =
##[error]Process completed with exit code 1.
```

</details>

### rust (`.github/workflows/rust.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/41986470912 — dark (conclusion: `failure`), 2026-11-05 07:19 UTC
- Dark since: 2026-11-05 07:19 UTC (first run of the current streak)
- Job / step: `test (ubuntu)` → `cargo test`
- Likely cause: error: test failed, to rerun pass '-p headroom-core --lib'

<details><summary>End of the job log</summary>

```
  left: None
 right: Some("fresh")
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    ccr::backends::in_memory::tests::expired_get_does_not_wipe_concurrent_refresh
test result: FAILED. 1017 passed; 1 failed; 1 ignored; 0 measured; 0 filtered out; finished in 7.24s
error: test failed, to rerun pass `-p headroom-core --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
