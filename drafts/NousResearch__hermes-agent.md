<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 257934 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker Build, Test, and Publish" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker Build, Test, and Publish** workflow (`.github/workflows/docker.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/40681314468 — dark (conclusion: `failure`), 2026-10-28 11:36 UTC
- Dark since: 2026-10-28 11:25 UTC (first run of the current streak)
- Job / step: `Build and test image (desktop/arm64)` → `Run docker integration tests`
- Likely cause: tests/docker/test_dashboard.py  (1 test failed)

<details><summary>End of the job log</summary>

```
../../_temp/setup-pm/tools/python-3.14.9+20261021-linux-arm64/lib/python3.14/subprocess.py:1268: TimeoutExpired
=========================== short test summary info ============================
FAILED tests/docker/test_dashboard.py::test_dashboard_insecure_env_var_no_longer_bypasses_gate - subprocess.TimeoutExpired: Command '['docker', 'exec', '-u', 'hermes', 'hermes-test-test_dashboard_insecure_env_var_no_lon…
========================= 1 failed, 2 passed in 26.60s =========================
=== 2 files with test failures ===
  tests/docker/test_stage2_browser_discovery.py  (1 test failed)
  tests/docker/test_dashboard.py  (1 test failed)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
