<!-- dark-draft: langchain-ai/langchain -->
<!-- draft-state: ready -->
# Upstream issue draft: langchain-ai/langchain

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langchain-ai/langchain/issues/new
- **Stars:** 148107 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **⏰ Integration Tests** workflow (`.github/workflows/integration_tests.yml`) on `master` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `master`: https://github.com/langchain-ai/langchain/actions/runs/39257743098 — dark (conclusion: `failure`), 2026-10-19 13:09 UTC
- Dark since: 2026-10-09 13:10 UTC (first run of the current streak)
- Job / step: `🐍 Python 3.10: libs/partners/google-genai` → `🚀 Run Integration Tests`
- Likely cause: Event loop is closed

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/_temp/uv-python-dir/cpython-3.10-linux-x86_64-gnu/lib/python3.10/asyncio/selector_events.py", line 725, in _fatal_error
    self._force_close(exc)
  File "/home/runner/work/_temp/uv-python-dir/cpython-3.10-linux-x86_64-gnu/lib/python3.10/asyncio/selector_events.py", line 737, in _force_close
    self._loop.call_soon(self._call_connection_lost, exc)
  File "/home/runner/work/_temp/uv-python-dir/cpython-3.10-linux-x86_64-gnu/lib/python3.10/asyncio/base_events.py", line 753, in call_soon
    self._check_closed()
  File "/home/runner/work/_temp/uv-python-dir/cpython-3.10-linux-x86_64-gnu/lib/python3.10/asyncio/base_events.py", line 515, in _check_closed
##[error]    raise RuntimeError('Event loop is closed')
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining langchain!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
