<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15778 · **Generated:** 2026-11-15T06:42:54.918Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "security-scan", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43637167817 — dark (conclusion: `failure`), 2026-11-14 20:22 UTC
- Dark since: 2026-11-03 21:06 UTC (first run of the current streak)
- Job / step: `evict-main-conflicts` → `Remove queue entries that conflict with main`
- Likely cause: cannot iterate over: null

<details><summary>End of the job log</summary>

```
PullRequests: write
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: evict-main-conflicts
cannot iterate over: null
##[error]Process completed with exit code 1.
```

</details>

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43684693490 — dark (conclusion: `failure`), 2026-11-15 06:16 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27379/27655)
Updating files: 100% (27655/27655)
Updating files: 100% (27655/27655), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
d4c91910b1ad0c91fb23e2b9cf020d43d677f4c1
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43658160260 — dark (conclusion: `failure`), 2026-11-15 00:26 UTC
- Dark since: 2026-11-15 00:26 UTC (first run of the current streak)
- Job / step: `security-scan` → `Install Ubuntu dependencies`
- Likely cause: E: Package 'wkhtmltopdf' has no installation candidate

<details><summary>End of the job log</summary>

```
Reading package lists...
Building dependency tree...
Reading state information...
Package wkhtmltopdf is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source
E: Package 'wkhtmltopdf' has no installation candidate
##[error]Process completed with exit code 100.
```

</details>

### py-tests (`.github/workflows/py-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43661464212 — dark (conclusion: `failure`), 2026-11-15 01:06 UTC
- Dark since: 2026-11-15 01:06 UTC (first run of the current streak)
- Job / step: `python / Integration Tests (mysql, shard-3, 3.11)` → `Run Integration Tests`
- Likely cause: nox > Session integration-tests failed.

<details><summary>End of the job log</summary>

```
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-default-column] - TypeError: run() got an unexpected keyword argument 'dia…
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-default-table] - TypeError: run() got an unexpected keyword argument 'dial…
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-reporting-column] - TypeError: run() got an unexpected keyword argument 'd…
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-reporting-table] - TypeError: run() got an unexpected keyword argument 'di…
= 805 passed, 30 skipped, 4 xfailed, 3 xpassed, 245 warnings, 36 errors in 2369.16s (0:39:29) =
nox > Command /home/runner/work/OpenMetadata/OpenMetadata/env/bin/pytest -c pyproject.toml -o testpaths=tests/integration/ --cov=metadata --cov-branch --cov-config=pyproject.toml --junitxml=junit/test-results-integratio…
nox > Session integration-tests failed.
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud Ingestion Nightly (`.github/workflows/py-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43666336865 — dark (conclusion: `failure`), 2026-11-15 02:08 UTC
- Dark since: 2026-11-15 02:08 UTC (first run of the current streak)
- Job / step: `Integration Tests (shard-2)` → `Run Integration Tests`
- Likely cause: nox > Session integration-tests failed.

<details><summary>End of the job log</summary>

```
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-default-column] - TypeError: run() got an unexpected keyword argument 'dia…
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-default-table] - TypeError: run() got an unexpected keyword argument 'dial…
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-reporting-column] - TypeError: run() got an unexpected keyword argument 'd…
ERROR tests/integration/rule_library/test_physical_table_expression.py::test_rule_and_denominator_read_the_same_source[mysql-0-True-rate%:amount-reporting-table] - TypeError: run() got an unexpected keyword argument 'di…
= 587 passed, 35 skipped, 7 xfailed, 1402 warnings, 36 errors in 3318.74s (0:55:18) =
nox > Command /home/runner/work/OpenMetadata/OpenMetadata/env/bin/pytest -c pyproject.toml -o testpaths=tests/integration/ --cov=metadata --cov-branch --cov-config=pyproject.toml --junitxml=junit/test-results-integratio…
nox > Session integration-tests failed.
##[error]Process completed with exit code 1.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43668471513 — dark (conclusion: `failure`), 2026-11-15 02:35 UTC
- Dark since: 2026-11-15 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-08, chromium-08.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    Usage:
        npx playwright show-trace playwright/output/test-results/dataInsightApp.ts-Run-Data-4c57d-tion-and-wait-until-success-data-insight-application/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [data-insight-application] › playwright/e2e/dataInsightApp.ts:28:6 › Run Data Insight application and wait until success
  4 did not run
  188 passed (17.1m)
##[error]1 failed
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43670601533 — dark (conclusion: `failure`), 2026-11-15 03:03 UTC
- Dark since: 2026-11-15 03:03 UTC (first run of the current streak)
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
