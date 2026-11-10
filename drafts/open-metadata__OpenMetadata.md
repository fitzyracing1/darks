<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15729 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Merge Queue Dequeue Report", "Integration Tests - MySQL + Elasticsearch", "Integration Tests - PostgreSQL + OpenSearch", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42723790140 — dark (conclusion: `failure`), 2026-11-09 23:51 UTC
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

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42701111917 — dark (conclusion: `failure`), 2026-11-09 21:17 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42701111819 — dark (conclusion: `failure`), 2026-11-09 21:17 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (PostgreSQL + OpenSearch)`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42701111836 — dark (conclusion: `failure`), 2026-11-09 21:17 UTC
- Dark since: 2026-11-06 10:36 UTC (first run of the current streak)
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

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42767478033 — dark (conclusion: `failure`), 2026-11-10 06:17 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27098/27371)
Updating files: 100% (27371/27371)
Updating files: 100% (27371/27371), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
2975344bc3d5b04b65bb2572c275ca0193b038af
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### SonarCloud Ingestion Nightly (`.github/workflows/py-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42740610304 — dark (conclusion: `failure`), 2026-11-10 02:08 UTC
- Dark since: 2026-11-10 02:08 UTC (first run of the current streak)
- Job / step: `Unit Tests` → `Run Unit Tests`
- Likely cause: The operation was canceled.

<details><summary>End of the job log</summary>

```
........................................................................ [  1%]
........................................................................ [  2%]
........................................................................ [  2%]
........................................................................ [  3%]
........................................................................ [  3%]
........................................................................ [  4%]
........................................................................ [  4%]
##[error]The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42743759700 — dark (conclusion: `failure`), 2026-11-10 02:34 UTC
- Dark since: 2026-11-10 02:34 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-16, chromium-16.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 1 timed out

<details><summary>End of the job log</summary>

```
    playwright/output/test-results/Pages-DataContracts-Data-C-cdbe5-ract-and-validate-for-Topic-chromium-retry1/trace.zip
    Usage:
        npx playwright show-trace playwright/output/test-results/Pages-DataContracts-Data-C-cdbe5-ract-and-validate-for-Topic-chromium-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    [chromium] › playwright/e2e/Pages/DataContracts.spec.ts:162:9 › Data Contracts › Create Data Contract and validate for Topic
  150 passed (37.2m)
##[error]1 timed out
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42746895038 — dark (conclusion: `failure`), 2026-11-10 03:03 UTC
- Dark since: 2026-11-10 03:03 UTC (first run of the current streak)
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
