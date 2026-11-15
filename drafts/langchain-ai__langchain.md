<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149531 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/43597798931 — dark (conclusion: `failure`), 2026-11-14 13:03 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/groq` → `🚀 Run Integration Tests`
- Likely cause: = 71 failed, 2 passed, 11 skipped, 5 xfailed, 4 warnings, 71 retried in 296.31s (0:04:56) =

<details><summary>End of the job log</summary>

```
FAILED tests/integration_tests/test_standard.py::TestGroq::test_unicode_tool_call_integration - groq.InternalServerError: Error code: 501 - ***'error': 'path not allow-listed by gateway', 'provider': 'groq', 'path': '/g…
FAILED tests/integration_tests/test_standard.py::TestGroq::test_agent_loop[model0] - groq.InternalServerError: Error code: 501 - ***'error': 'path not allow-listed by gateway', 'provider': 'groq', 'path': '/groq/openai/…
FAILED tests/integration_tests/test_standard.py::test_json_schema[pydantic] - groq.InternalServerError: Error code: 501 - ***'error': 'path not allow-listed by gateway', 'provider': 'groq', 'path': '/groq/openai/v1/chat…
FAILED tests/integration_tests/test_standard.py::test_json_schema[json_schema] - groq.InternalServerError: Error code: 501 - ***'error': 'path not allow-listed by gateway', 'provider': 'groq', 'path': '/groq/openai/v1/c…
FAILED tests/integration_tests/test_standard.py::test_json_schema[typeddict] - groq.InternalServerError: Error code: 501 - ***'error': 'path not allow-listed by gateway', 'provider': 'groq', 'path': '/groq/openai/v1/cha…
= 71 failed, 2 passed, 11 skipped, 5 xfailed, 4 warnings, 71 retried in 296.31s (0:04:56) =
make: *** [Makefile:19: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
