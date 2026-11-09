<!-- dark-draft: langgenius/dify -->
<!-- draft-state: ready -->
# Upstream issue draft: langgenius/dify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 160746 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Run Full VDB Tests" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Run Full VDB Tests** workflow (`.github/workflows/vdb-tests-full.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/42554032538 — dark (conclusion: `failure`), 2026-11-09 03:01 UTC
- Dark since: 2026-11-09 03:01 UTC (first run of the current streak)
- Job / step: `Full VDB Tests (3.13)` → `Test Vector Stores`
- Likely cause: E   ModuleNotFoundError: No module named 'openai'

<details><summary>End of the job log</summary>

```
api/providers/vdb/vdb-tencent/tests/e2e_tests/conftest.py:14: in <module>
    from xinference_client.types import Embedding
api/.venv/lib/python3.13/site-packages/xinference_client/types.py:19: in <module>
    from ._compat import (
api/.venv/lib/python3.13/site-packages/xinference_client/_compat.py:56: in <module>
    from openai.types.chat.chat_completion_named_tool_choice_param import (
E   ModuleNotFoundError: No module named 'openai'
##[error]Process completed with exit code 4.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
