<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15838 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 10 workflows dark on main ("monitor-slack-link", "py-tests", "Postgresql PR Playwright E2E Tests", +7 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45089175636 — dark (conclusion: `failure`), 2026-11-23 00:30 UTC
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
5af6f6ab7a271eba9f48322be42db574b9bbf8bd
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

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45047214843 — dark (conclusion: `failure`), 2026-11-22 17:02 UTC
- Dark since: 2026-11-22 17:02 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45047214914 — dark (conclusion: `failure`), 2026-11-22 17:03 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-22 18:14:15,014] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Startup recovery completed: 0 locks cleaned, 0 orphaned jobs processed (0 recovered, 0 marked failed)

<details><summary>End of the job log</summary>

```
INFO  [2026-11-22 18:14:14,487] org.openmetadata.mcp.server.auth.repository.OAuthAuthorizationCodeRepository: Deleted expired authorization codes
INFO  [2026-11-22 18:14:14,488] org.openmetadata.mcp.server.auth.repository.McpPendingAuthRequestRepository: Deleted expired pending auth requests
INFO  [2026-11-22 18:14:14,488] org.openmetadata.mcp.server.auth.jobs.OAuthTokenCleanupJob: OAuth token cleanup completed successfully
INFO  [2026-11-22 18:14:14,700] org.openmetadata.service.resources.settings.SettingsCache: Loaded Setting searchSettings
INFO  [2026-11-22 18:14:15,011] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Performing startup recovery for distributed indexing jobs...
INFO  [2026-11-22 18:14:15,014] org.openmetadata.service.apps.bundles.searchIndex.distributed.JobRecoveryManager: Startup recovery completed: 0 locks cleaned, 0 orphaned jobs processed (0 recovered, 0 marked failed)
INFO  [2026-11-22 18:14:21,226] org.openmetadata.service.security.auth.UserActivityTracker: Flushing 718 user activities to database
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45047215055 — dark (conclusion: `failure`), 2026-11-22 17:03 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + OpenSearch)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
##[error]Process completed with exit code 1.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45047215063 — dark (conclusion: `failure`), 2026-11-22 17:03 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
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

### OpenMetadata Service Unit Tests (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45047214919 — dark (conclusion: `failure`), 2026-11-22 17:03 UTC
- Dark since: 2026-11-22 17:03 UTC (first run of the current streak)
- Job / step: `openmetadata-service-unit-tests` → `Run openmetadata-service unit tests`
- Likely cause: injected error inside the read

<details><summary>End of the job log</summary>

```
[INFO] Running org.openmetadata.service.apps.bundles.insights.workflows.WorkflowStatsBatchAggregationTest
[INFO] Tests run: 8, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.177 s -- in org.openmetadata.service.apps.bundles.insights.workflows.WorkflowStatsBatchAggregationTest
[INFO] Running org.openmetadata.service.apps.bundles.insights.DataInsightsAppTest
[INFO] Tests run: 4, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.256 s -- in org.openmetadata.service.apps.bundles.insights.DataInsightsAppTest
[INFO] Running org.openmetadata.service.apps.bundles.rdf.RdfIndexingRunContextTest
[INFO] Tests run: 6, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.009 s -- in org.openmetadata.service.apps.bundles.rdf.RdfIndexingRunContextTest
[INFO] Running org.openmetadata.service.apps.bundles.rdf.sink.RdfBulkSinkTest
##[error]Exception in thread "rdf-sink-writer" java.lang.OutOfMemoryError: simulated: batch too large to write
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45088777425 — dark (conclusion: `failure`), 2026-11-23 00:26 UTC
- Dark since: 2026-11-23 00:26 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
