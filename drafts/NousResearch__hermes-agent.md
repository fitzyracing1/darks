<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 260745 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Deploy Site")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yaml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42024259008 — dark (conclusion: `failure`), 2026-11-05 12:05 UTC
- Dark since: 2026-11-05 05:58 UTC (first run of the current streak)
- Job / step: `Bootstrap installer / install.sh protocol + small fresh-install E2E` → `Current installer to PM worker to published command`
- Likely cause: === 1 file where all tests passed but pytest exited non-zero (warnings-as-errors, hook failures, etc.) ===

<details><summary>End of the job log</summary>

```
    pids = _processes_with_hermes_home_under(roots)
  File "/home/runner/_work/hermes-agent/hermes-agent/tests/conftest.py", line 1114, in _processes_with_hermes_home_under
    import psutil
ModuleNotFoundError: No module named 'psutil'
3 passed in 23.94s
=== 1 file where all tests passed but pytest exited non-zero (warnings-as-errors, hook failures, etc.) ===
  tests/scripts/test_fresh_source_install.py  (3 passed)
##[error]Process completed with exit code 1.
```

</details>

### Deploy Site (`.github/workflows/deploy-site.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/42016667941 — dark (conclusion: `failure`), 2026-11-05 11:09 UTC
- Dark since: 2026-11-05 09:18 UTC (first run of the current streak)
- Job / step: `deploy-docs` → `Deploy to GitHub Pages`
- Likely cause: Timeout reached, aborting!

<details><summary>End of the job log</summary>

```
Current status: syncing_files
Getting Pages deployment status...
Current status: syncing_files
Getting Pages deployment status...
Current status: syncing_files
Getting Pages deployment status...
Current status: syncing_files
##[error]Timeout reached, aborting!
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
