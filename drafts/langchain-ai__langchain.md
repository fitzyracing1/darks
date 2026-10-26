<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148500 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("⏰ Integration Tests", "⚡ CodSpeed")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### ⏰ Integration Tests (`.github/workflows/integration_tests.yml`)

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/40341828134 — dark (conclusion: `failure`), 2026-10-26 14:40 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.10: libs/partners/mistralai` → `🚀 Run Integration Tests`
- Likely cause: == 2 failed, 56 passed, 11 skipped, 1 xpassed, 3 retried in 205.59s (0:03:25) ==

<details><summary>End of the job log</summary>

```
24.01s call     tests/integration_tests/test_chat_models.py::test_stop_sequence
18.42s call     tests/integration_tests/test_standard.py::TestMistralStandard::test_agent_loop[model1]
=========================== short test summary info ============================
FAILED tests/integration_tests/test_chat_models.py::test_reasoning - assert 0 > 0
FAILED tests/integration_tests/test_chat_models.py::test_reasoning_v1 - assert 0 > 0
== 2 failed, 56 passed, 11 skipped, 1 xpassed, 3 retried in 205.59s (0:03:25) ==
make: *** [Makefile:24: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

### ⚡ CodSpeed (`.github/workflows/codspeed.yml`)

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/40359654853 — dark (conclusion: `failure`), 2026-10-26 16:29 UTC
- Dark since: 2026-10-26 16:29 UTC (first run of the current streak)
- Job / step: `⚡ CodSpeed Benchmarks (libs/core, 3.13, walltime)` → `⚡ Run Benchmarks: libs/core`
- Likely cause: Error: Failed to retrieve upload data: 500 Internal Server Error

<details><summary>End of the job log</summary>

```
6.16s call     tests/benchmarks/test_imports.py::test_import_time[InMemoryVectorStore]
6.08s call     tests/benchmarks/test_imports.py::test_import_time[LangChainTracer]
5.89s call     tests/benchmarks/test_imports.py::test_import_time[ChatPromptTemplate]
5.84s call     tests/benchmarks/test_imports.py::test_import_time[tool]
5.60s call     tests/benchmarks/test_imports.py::test_import_time[BaseChatModel]
======================== 15 passed in 78.43s (0:01:18) =========================
Linked repository: langchain-ai/langchain
##[error]Error: Failed to retrieve upload data: 500 Internal Server Error
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
