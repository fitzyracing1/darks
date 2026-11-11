<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 149347 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/42821180525 — dark (conclusion: `failure`), 2026-11-10 13:04 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.14: libs/partners/google-genai` → `🚀 Run Integration Tests`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
plugins: syrupy-5.4.0, retry-1.7.0, codspeed-4.3.0, mock-3.16.0, socket-0.8.1, langsmith-0.14.17, benchmark-5.2.3, recording-0.13.4, xdist-3.8.0, asyncio-1.4.0, anyio-4.14.2, timeout-2.4.0
asyncio: mode=Mode.AUTO, debug=False, asyncio_default_fixture_loop_scope=None, asyncio_default_test_loop_scope=function
created: 4/4 workers
4 workers [234 items]
X............ss.....................................................sss. [ 30%]
....................x.s....R..................ssss...................ss. [ 61%]
....s................x......ssss....................s....s.............. [ 92%]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
