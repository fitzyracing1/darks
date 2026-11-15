<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: resolved -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** resolved — lit again (2026-11-15); nothing to file
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 79675 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-14. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/43637191575 — dark (conclusion: `failure`), 2026-11-14 20:22 UTC
- Dark since: 2026-11-14 05:15 UTC (first run of the current streak)
- Job / step: `test (2)` → `Run test shard 2/4`
- Likely cause: = 2 failed, 4796 passed, 229 skipped, 15033 deselected, 2231 warnings in 457.84s (0:07:37) =

<details><summary>End of the job log</summary>

```
================================ tests coverage ================================
_______________ coverage: platform linux, python 3.12.16-final-0 _______________
Coverage XML written to file coverage-2.xml
=========================== short test summary info ============================
FAILED tests/test_grok_shared_proxy_call_sites.py::test_the_base_url_override_is_resolved_once_per_request[handle_openai_chat] - Failed: DID NOT RAISE HTTPException
FAILED tests/test_grok_shared_proxy_call_sites.py::test_the_base_url_override_is_resolved_once_per_request[handle_openai_responses] - Failed: DID NOT RAISE HTTPException
= 2 failed, 4796 passed, 229 skipped, 15033 deselected, 2231 warnings in 457.84s (0:07:37) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
