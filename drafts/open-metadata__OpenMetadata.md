<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15745 · **Generated:** 2026-11-12T06:44:18.567Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 9 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +6 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43168784057 — dark (conclusion: `failure`), 2026-11-12 06:31 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43167152494 — dark (conclusion: `failure`), 2026-11-12 06:17 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27256/27531)
Updating files: 100% (27531/27531)
Updating files: 100% (27531/27531), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
6242d51a61cc3a3bcb5dbf3fe845098ae26e8450
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43135360934 — dark (conclusion: `failure`), 2026-11-12 01:33 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (MySQL + Elasticsearch)`
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

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43135360995 — dark (conclusion: `failure`), 2026-11-12 01:33 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
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

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43135361016 — dark (conclusion: `failure`), 2026-11-12 01:33 UTC
- Dark since: 2026-11-11 14:12 UTC (first run of the current streak)
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

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43142494812 — dark (conclusion: `failure`), 2026-11-12 02:35 UTC
- Dark since: 2026-11-12 02:35 UTC (first run of the current streak)
- Job / step: `playwright / plan-playwright` → `Verify browser helper behavior`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    ../../../../../../artifacts/test-results/visualData-ontology-librar-54013--non-entity-response-shapes/trace.zip
    Usage:
        npx playwright show-trace ../../../../../../artifacts/test-results/visualData-ontology-librar-54013--non-entity-response-shapes/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    playwright/browser-tests/visualData.spec.ts:258:5 › ontology library and publication APIs use their non-entity response shapes
  178 passed (39.9s)
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43145587300 — dark (conclusion: `failure`), 2026-11-12 03:03 UTC
- Dark since: 2026-11-12 03:03 UTC (first run of the current streak)
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

### Workflows and Data Access Request E2E tests (`.github/workflows/data-access-request-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43161382428 — dark (conclusion: `failure`), 2026-11-12 05:26 UTC
- Dark since: 2026-11-12 05:26 UTC (first run of the current streak)
- Job / step: `data-access-request-e2e` → `Trigger Collate Playwright run & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43161457853

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: data-access-request-e2e
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/43161457853
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/43161457853?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43161457853
```

</details>

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43161648497 — dark (conclusion: `failure`), 2026-11-12 05:28 UTC
- Dark since: 2026-11-12 05:28 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43161656641

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/43161656641
failed to get jobs: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/43161656641/jobs?per_page=100)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43161656641
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
