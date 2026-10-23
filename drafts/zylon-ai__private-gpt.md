<!-- dark-draft: zylon-ai/private-gpt -->
<!-- draft-state: ready -->
# Upstream issue draft: zylon-ai/private-gpt

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/zylon-ai/private-gpt/issues/new
- **Stars:** 57607 · **Generated:** 2026-10-23T12:52:35.417Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("update-claude-specs", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### update-claude-specs (`.github/workflows/update-claude-specs.yml`)

- Latest run on `main`: https://github.com/zylon-ai/private-gpt/actions/runs/39194095706 — dark (conclusion: `failure`), 2026-10-19 03:18 UTC
- Dark since: 2026-09-14 03:19 UTC (first run of the current streak)
- Job / step: `update` → `Update Claude specs and lock file`
- Likely cause: RuntimeError: openapi_spec_url not found in https://raw.githubusercontent.com/anthropics/anthropic-sdk-typescript/main/.stats.yml

<details><summary>End of the job log</summary>

```
    main()
  File "/home/runner/work/private-gpt/private-gpt/scripts/update_claude_specs.py", line 85, in main
    latest_url = fetch_openapi_spec_url()
                 ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/runner/work/private-gpt/private-gpt/scripts/update_claude_specs.py", line 26, in fetch_openapi_spec_url
    raise RuntimeError(f"openapi_spec_url not found in {ANTHROPIC_STATS_URL}")
RuntimeError: openapi_spec_url not found in https://raw.githubusercontent.com/anthropics/anthropic-sdk-typescript/main/.stats.yml
##[error]Process completed with exit code 1.
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/zylon-ai/private-gpt/actions/runs/39927947558 — dark (conclusion: `failure`), 2026-10-23 08:54 UTC
- Dark since: 2026-10-23 08:54 UTC (first run of the current streak)
- Job / step: `test` → `Run affected tests`
- Likely cause: ==== 1 failed, 2756 passed, 1 skipped, 79828 warnings in 605.40s (0:10:05) =====

<details><summary>End of the job log</summary>

```
    class CustomModel(DynamicBaseModel):  # type: ignore
-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
- generated xml file: /home/runner/work/private-gpt/private-gpt/tests-results.xml -
=========================== short test summary info ============================
FAILED tests/observability/test_no_blocking.py::test_hanging_backend_does_not_lag_the_event_loop - assert 0.6599335030000002 < 0.05
==== 1 failed, 2756 passed, 1 skipped, 79828 warnings in 605.40s (0:10:05) =====
make: *** [Makefile:23: test] Error 1
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining private-gpt!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
