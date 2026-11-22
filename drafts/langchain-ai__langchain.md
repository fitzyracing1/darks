<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149982 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/45025465696 — dark (conclusion: `failure`), 2026-11-22 13:03 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/fireworks` → `🚀 Run Integration Tests`
- Likely cause: = 58 failed, 4 passed, 11 skipped, 1 xfailed, 5 warnings, 58 retried in 455.69s (0:07:35) =

<details><summary>End of the job log</summary>

```
FAILED tests/integration_tests/test_standard.py::TestFireworksStandard::test_json_mode - langchain_fireworks.chat_models.FireworksModelNotFoundError: Error code: 404 - ***'error': ***'message': 'Model not found, inacces…
FAILED tests/integration_tests/test_standard.py::TestFireworksStandard::test_message_with_name - langchain_fireworks.chat_models.FireworksModelNotFoundError: Error code: 404 - ***'error': ***'message': 'Model not found,…
FAILED tests/integration_tests/test_standard.py::TestFireworksStandard::test_agent_loop[model0] - langchain_fireworks.chat_models.FireworksModelNotFoundError: Error code: 404 - ***'error': ***'message': 'Model not found…
FAILED tests/integration_tests/test_standard.py::TestFireworksStandard::test_unicode_tool_call_integration - langchain_fireworks.chat_models.FireworksModelNotFoundError: Error code: 404 - ***'error': ***'message': 'Mode…
FAILED tests/integration_tests/test_standard.py::TestFireworksStandard::test_agent_loop[model1] - langchain_fireworks.chat_models.FireworksModelNotFoundError: Error code: 404 - ***'error': ***'message': 'Model not found…
= 58 failed, 4 passed, 11 skipped, 1 xfailed, 5 warnings, 58 retried in 455.69s (0:07:35) =
make: *** [Makefile:18: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
