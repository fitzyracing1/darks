<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15832 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("monitor-slack-link", "py-tests", "Postgresql PR Playwright E2E Tests", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45021130671 — dark (conclusion: `failure`), 2026-11-22 12:13 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27271/27546)
Updating files: 100% (27546/27546)
Updating files: 100% (27546/27546), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
78e4716b17be950e79e3634c49f0b52323d6732a
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### py-tests (`.github/workflows/py-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44969821787 — dark (conclusion: `failure`), 2026-11-22 01:05 UTC
- Dark since: 2026-11-22 01:05 UTC (first run of the current streak)
- Job / step: `python / Unit Tests (3.11)` → `Run Unit Tests`
- Likely cause: nox > Session unit-tests failed.

<details><summary>End of the job log</summary>

```
15.22s call     tests/unit/test_python_tooling.py::test_make_unit_commands_use_the_complete_selection[unit_ingestion-.]
=========================== short test summary info ============================
FAILED tests/unit/test_import_cost.py::test_import_metadata_peak_rss_under_ceiling - AssertionError: `import metadata` peaked at 403 MB, ceiling 400 MB. Make the new import lazy, or check whether defer_build is still en…
assert 402.65625 < 400
= 1 failed, 17196 passed, 7 skipped, 1 xfailed, 1845 warnings in 970.84s (0:16:10) =
nox > Command /home/runner/work/OpenMetadata/OpenMetadata/env/bin/pytest -c pyproject.toml -o testpaths=tests/unit/ --cov=metadata --cov-branch --cov-config=pyproject.toml --junitxml=junit/test-results-unit.xml -n 4 --d…
nox > Session unit-tests failed.
##[error]Process completed with exit code 1.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44976793294 — dark (conclusion: `failure`), 2026-11-22 02:35 UTC
- Dark since: 2026-11-22 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-13, chromium-13.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 2 failed

<details><summary>End of the job log</summary>

```
    Usage:
        npx playwright show-trace playwright/output/test-results/Features-AIMode-InboxTaskM-d4b9b-s-through-the-reason-dialog-chromium-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  2 failed
    [chromium] › playwright/e2e/Features/AIMode/InboxTaskMatrix.spec.ts:581:5 › Inbox task matrix › an incident is acknowledged, then resolved with a reason @Features @Governance
    [chromium] › playwright/e2e/Features/AIMode/InboxTaskMatrix.spec.ts:623:5 › Inbox task matrix › a test case incident resolves through the reason dialog @Features @Governance
  207 passed (17.6m)
##[error]2 failed
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44978867294 — dark (conclusion: `failure`), 2026-11-22 03:03 UTC
- Dark since: 2026-11-22 03:03 UTC (first run of the current streak)
- Job / step: `Coverage + Sonar` → `Retry 'SonarCloud Branch Scan'`
- Likely cause: [ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1

<details><summary>End of the job log</summary>

```
Caused by: io.grpc.StatusRuntimeException: UNAVAILABLE: HTTP/2 error code: NO_ERROR
Received Goaway
	at io.grpc.Status.asRuntimeException(Status.java:532)
	at io.grpc.stub.ClientCalls$BlockingResponseStream.hasNext(ClientCalls.java:731)
	at org.sonar.plugins.javascript.bridge.BridgeServerImpl.analyzeProject(BridgeServerImpl.java:492)
	... 20 common frames omitted
[ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
