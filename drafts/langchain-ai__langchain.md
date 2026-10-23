<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148308 · **Generated:** 2026-10-23T06:59:11.689Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/39784210629 — dark (conclusion: `failure`), 2026-10-22 13:08 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/google-genai` → `🚀 Run Integration Tests`
- Likely cause: = 2 failed, 211 passed, 19 skipped, 1 xfailed, 1 xpassed, 34 warnings, 4 retried in 514.97s (0:08:34) =

<details><summary>End of the job log</summary>

```
	langchain_google_genai.chat_models.GoogleAPIError: 503 UNAVAILABLE. ***'error': ***'code': 503, 'message': 'This model is currently experiencing high demand. Spikes in demand are usually temporary. Please try again lat…
=========================== end of test retry report ===========================
=========================== short test summary info ============================
FAILED tests/integration_tests/test_chat_models.py::test_agentic_video_understanding_youtube[google_ai] - langchain_google_genai.chat_models.GoogleInvalidRequestError: Error calling model 'gemini-3.7-flash' (INVALID_ARG…
FAILED tests/integration_tests/test_chat_models.py::test_computer_use_tool[google_ai] - langchain_google_genai.chat_models.GoogleAPIError: 503 UNAVAILABLE. ***'error': ***'code': 503, 'message': 'This model is currently…
= 2 failed, 211 passed, 19 skipped, 1 xfailed, 1 xpassed, 34 warnings, 4 retried in 514.97s (0:08:34) =
make: *** [Makefile:18: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
