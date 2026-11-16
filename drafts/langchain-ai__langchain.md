<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149672 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/43873831422 — dark (conclusion: `failure`), 2026-11-16 13:14 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.11: libs/partners/xai` → `🚀 Run Integration Tests`
- Likely cause: ======== 3 failed, 39 passed, 12 skipped, 1 xpassed in 69.17s (0:01:09) ========

<details><summary>End of the job log</summary>

```
10.04s call     tests/integration_tests/test_chat_models_standard.py::TestXAIStandard::test_structured_output_async[json_schema]
=========================== short test summary info ============================
FAILED tests/integration_tests/test_chat_models.py::test_reasoning[] - KeyError: 'reasoning_content'
FAILED tests/integration_tests/test_chat_models.py::test_reasoning[v1] - KeyError: 'reasoning_content'
FAILED tests/integration_tests/test_chat_models_standard.py::TestXAIStandard::test_tool_calling[model1] - [XPASS(strict)] xAI v1 streaming aggregate does not surface tool_call content block; tool calls are only availabl…
======== 3 failed, 39 passed, 12 skipped, 1 xpassed in 69.17s (0:01:09) ========
make: *** [Makefile:22: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
