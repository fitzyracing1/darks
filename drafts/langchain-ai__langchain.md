<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149032 · **Generated:** 2026-11-05T00:53:42.006Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/41834750406 — dark (conclusion: `failure`), 2026-11-04 13:04 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.11: libs/partners/openai` → `🔐 Configure AWS Credentials`
- Likely cause: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.

<details><summary>End of the job log</summary>

```
Retry validateCredentials: attempt 7 of 12 failed: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.. Retrying after 936ms.
Retry validateCredentials: attempt 8 of 12 failed: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.. Retrying after 603ms.
Retry validateCredentials: attempt 9 of 12 failed: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.. Retrying after 6005ms.
Retry validateCredentials: attempt 10 of 12 failed: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.. Retrying after 6021ms.
Retry validateCredentials: attempt 11 of 12 failed: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.. Retrying after 4792ms.
Retry validateCredentials: attempt 12 of 12 failed: Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.. Retrying after 50222ms.
Retry validateCredentials: reached max retries (12); giving up.
##[error]Credentials could not be loaded, please check your action inputs: The security token included in the request is invalid.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
