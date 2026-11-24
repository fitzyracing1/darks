<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149940 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("⏰ Integration Tests", "OpenWiki Update")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### ⏰ Integration Tests (`.github/workflows/integration_tests.yml`)

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

### OpenWiki Update (`.github/workflows/openwiki-update.yml`)

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/45137538206 — dark (conclusion: `failure`), 2026-11-23 08:18 UTC
- Dark since: 2026-11-23 08:18 UTC (first run of the current streak)
- Job / step: `update` → `Propagate OpenWiki failure`
- Likely cause: Failed to Failed to send multipart request. Received status [403]: Forbidden. Message: {"error":"Forbidden"}

<details><summary>End of the job log</summary>

```
Failed to Failed to send multipart request. Received status [403]: Forbidden. Message: {"error":"Forbidden"}
Context: trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4,id=01a2077d-5f45-73bd-9c66-f2c3030e6f45; trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4,id=01a2077d-66e0-7391-a1ec-6962f9dc849a; trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4…
Failed to Failed to send multipart request. Received status [403]: Forbidden. Message: {"error":"Forbidden"}
Context: trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4,id=01a2077d-66ec-759b-89f1-75c7f464ecef; trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4,id=01a2077d-d54e-7379-8682-04dc5101f1c3; trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4…
This OpenWiki run already has a different persisted plan.
Failed to Failed to send multipart request. Received status [403]: Forbidden. Message: {"error":"Forbidden"}
Context: trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4,id=01a2077d-d560-763c-a817-8469bfc51911; trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4,id=01a2077e-4c4b-762f-9615-a999db474cb0; trace=01a2077c-d921-74bd-a9b8-4590a5ccaef4…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
