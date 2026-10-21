<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148177 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/39427797802 — dark (conclusion: `failure`), 2026-10-20 13:07 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.10: libs/partners/xai` → `🚀 Run Integration Tests`
- Likely cause: == 3 failed, 38 passed, 12 skipped, 1 xfailed, 1 xpassed in 103.70s (0:01:43) ==

<details><summary>End of the job log</summary>

```
16.36s call     tests/integration_tests/test_chat_models_standard.py::TestXAIStandard::test_structured_output_pydantic_2_v1
=========================== short test summary info ============================
FAILED tests/integration_tests/test_chat_models_standard.py::TestXAIStandard::test_batch - langchain_openai.chat_models.base.OpenAIRateLimitError: Error code: 429 - ***'code': 'resource-exhausted', 'error': 'The model i…
FAILED tests/integration_tests/test_chat_models.py::test_reasoning[v1] - KeyError: 'reasoning_content'
FAILED tests/integration_tests/test_chat_models.py::test_reasoning_effort_call_time_kwarg - langchain_openai.chat_models.base.OpenAIRateLimitError: Error code: 429 - ***'code': 'resource-exhausted', 'error': 'The model …
== 3 failed, 38 passed, 12 skipped, 1 xfailed, 1 xpassed in 103.70s (0:01:43) ==
make: *** [Makefile:22: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
