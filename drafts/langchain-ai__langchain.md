<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148449 · **Generated:** 2026-10-26T01:16:48.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/40196020963 — dark (conclusion: `failure`), 2026-10-25 13:05 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.10: libs/partners/mistralai` → `🚀 Run Integration Tests`
- Likely cause: == 2 failed, 56 passed, 11 skipped, 1 xpassed, 2 retried in 202.37s (0:03:22) ==

<details><summary>End of the job log</summary>

```
23.51s call     tests/integration_tests/test_chat_models.py::test_stop_sequence
16.85s call     tests/integration_tests/test_standard.py::TestMistralStandard::test_structured_output[json_schema]
=========================== short test summary info ============================
FAILED tests/integration_tests/test_chat_models.py::test_reasoning - assert 0 > 0
FAILED tests/integration_tests/test_chat_models.py::test_reasoning_v1 - assert 0 > 0
== 2 failed, 56 passed, 11 skipped, 1 xpassed, 2 retried in 202.37s (0:03:22) ==
make: *** [Makefile:24: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
