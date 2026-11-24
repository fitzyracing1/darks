<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149936 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/45180333766 — dark (conclusion: `failure`), 2026-11-23 13:04 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/openai` → `🚀 Run Integration Tests`
- Likely cause: = 3 failed, 447 passed, 138 skipped, 2 xpassed, 28 warnings in 305.34s (0:05:05) =

<details><summary>End of the job log</summary>

```
No match for the request (<Request (GET) https://openaipublic.blob.core.windows.net/encodings/cl100k_base.tiktoken>) was found.
No similar requests, that have not been played, found.
FAILED tests/integration_tests/embeddings/test_azure.py::test_azure_openai_embedding_async_query - vcr.errors.CannotOverwriteExistingCassetteException: Can't overwrite existing cassette ('tests/cassettes/test_tool_searc…
No match for the request (<Request (GET) https://openaipublic.blob.core.windows.net/encodings/cl100k_base.tiktoken>) was found.
No similar requests, that have not been played, found.
= 3 failed, 447 passed, 138 skipped, 2 xpassed, 28 warnings in 305.34s (0:05:05) =
make: *** [Makefile:38: integration_tests] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
