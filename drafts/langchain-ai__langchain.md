<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148773 · **Generated:** 2026-10-31T18:33:59.606Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/41203800817 — dark (conclusion: `failure`), 2026-10-31 13:03 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/fireworks` → `🚀 Run Integration Tests`
- Likely cause: = 2 failed, 60 passed, 11 skipped, 1 xpassed, 5 warnings, 2 retried in 190.85s (0:03:10) =

<details><summary>End of the job log</summary>

```
=========================== short test summary info ============================
FAILED tests/integration_tests/test_chat_models.py::test_astream - AssertionError: Expected exactly one chunk with token counts or response_metadata. AIMessageChunk aggregation adds / appends counts and metadata. Check …
FAILED tests/integration_tests/test_standard.py::TestFireworksStandard::test_usage_metadata_streaming - AssertionError: Only one chunk should set input_tokens, the rest should be 0 or None
assert (not ***'input_tokens': 85, 'output_tokens': 4, 'total_tokens': 89, 'input_token_details': ***'cache_read': 84*** or not 85)
 +  where ***'input_tokens': 85, 'output_tokens': 4, 'total_tokens': 89, 'input_token_details': ***'cache_read': 84*** = AIMessageChunk(content='', additional_kwargs=***'reasoning_content': 'The'***, response_metadata=*…
= 2 failed, 60 passed, 11 skipped, 1 xpassed, 5 warnings, 2 retried in 190.85s (0:03:10) =
make: *** [Makefile:18: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
