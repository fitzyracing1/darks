<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149408 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/43223793977 — dark (conclusion: `failure`), 2026-11-12 13:04 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/aws` → `🚀 Run Integration Tests`
- Likely cause: = 248 failed, 255 passed, 269 skipped, 12 xfailed, 5 xpassed, 69 warnings in 171.25s (0:02:51) =

<details><summary>End of the job log</summary>

```
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_with_both_system_tools - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaReasoning::test_effort_low - botocore.exceptions.ClientError: An error occurred (501) when calling the Converse operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_reasoning_with_different_effort_levels - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_with_string_tool_names - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_empty_chunks_handling - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
FAILED tests/integration_tests/tools/test_nova.py::TestNovaStreaming::test_chunk_content_structure - botocore.exceptions.ClientError: An error occurred (501) when calling the ConverseStream operation:
= 248 failed, 255 passed, 269 skipped, 12 xfailed, 5 xpassed, 69 warnings in 171.25s (0:02:51) =
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
