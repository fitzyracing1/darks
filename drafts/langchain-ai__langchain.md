<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148764 · **Generated:** 2026-10-31T12:37:42.482Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/41060256971 — dark (conclusion: `failure`), 2026-10-30 13:04 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.10: libs/partners/aws` → `🚀 Run Integration Tests`
- Likely cause: = 283 failed, 233 passed, 198 skipped, 13 xfailed, 5 xpassed, 4 warnings in 197.96s (0:03:17) =

<details><summary>End of the job log</summary>

```
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_accumulating_chunks_into_full_message - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_reasoning_content_chunks - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_reasoning_with_different_effort_levels - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_chunk_content_structure - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_empty_chunks_handling - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_with_string_tool_names - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
= 283 failed, 233 passed, 198 skipped, 13 xfailed, 5 xpassed, 4 warnings in 197.96s (0:03:17) =
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
