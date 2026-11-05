<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 260666 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yaml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/41977321792 — dark (conclusion: `failure`), 2026-11-05 05:58 UTC
- Dark since: 2026-11-05 05:58 UTC (first run of the current streak)
- Job / step: `Python tests / Run tests (1/3)` → `Run tests`
- Likely cause: tests/tools/test_approval_pipe_shell.py  (1 test failed)

<details><summary>End of the job log</summary>

```
FAILED tests/tools/test_approval_pipe_shell.py::TestPipeRemoteToShellPattern::test_many_fetch_pipes_scan_in_linear_time - assert (389.876592881 - 386.689013586) < 3
 +  where 389.876592881 = <built-in function perf_counter>()
 +    where <built-in function perf_counter> = time.perf_counter
========================= 1 failed, 7 passed in 6.05s ==========================
=== 2 files with test failures ===
  tests/tui_gateway/test_multi_client_fanout.py  (1 test failed)
  tests/tools/test_approval_pipe_shell.py  (1 test failed)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
