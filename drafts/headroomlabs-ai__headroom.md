<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 78883 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
