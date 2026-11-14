<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15773 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43561714859 — dark (conclusion: `failure`), 2026-11-14 05:28 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43565420238 — dark (conclusion: `failure`), 2026-11-14 06:15 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27370/27646)
Updating files: 100% (27646/27646)
Updating files: 100% (27646/27646), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
92e71072073f14127832e276c03cce19d0cf7f5b
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43519081681 — dark (conclusion: `failure`), 2026-11-13 22:24 UTC
- Dark since: 2026-11-13 04:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-13 23:36:08,348] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_glossary_term_search_index, docId: 8dd9435…

<details><summary>End of the job log</summary>

```
127.0.0.1 - - [13/Nov/2026:23:36:08 +0000] "GET /api/v1/rdf/glossary/graph?limit=500&glossaryId=fdaac8dc-dbb9-463e-9ff9-d06773b802a0 HTTP/1.1" 200 1302 "-" "Java-http-client/21.0.13" 23
[0:0:0:0:0:0:0:1] - - [13/Nov/2026:23:36:08 +0000] "DELETE /api/v1/glossaries/async/fdaac8dc-dbb9-463e-9ff9-d06773b802a0?hardDelete=true&recursive=true HTTP/1.1" 202 369 "-" "okhttp/5.5.0" 1
[0:0:0:0:0:0:0:1] - - [13/Nov/2026:23:36:08 +0000] "GET /api/v1/glossaries/fdaac8dc-dbb9-463e-9ff9-d06773b802a0?include=all HTTP/1.1" 200 330 "-" "okhttp/5.5.0" 1
INFO  [2026-11-13 23:36:08,252] org.openmetadata.service.jdbi3.EntityRepository: Found 2 children for glossary fdaac8dc-dbb9-463e-9ff9-d06773b802a0 (recursive=true, hardDelete=true)
INFO  [2026-11-13 23:36:08,314] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_glossary_term_search_index, docId: 1c5276b…
INFO  [2026-11-13 23:36:08,315] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully submitted child update in ElasticSearch for index: all
INFO  [2026-11-13 23:36:08,348] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_glossary_term_search_index, docId: 8dd9435…
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43561714834 — dark (conclusion: `failure`), 2026-11-14 05:28 UTC
- Dark since: 2026-11-13 04:11 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43519081588 — dark (conclusion: `failure`), 2026-11-13 22:24 UTC
- Dark since: 2026-11-13 04:11 UTC (first run of the current streak)
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

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43547153622 — dark (conclusion: `failure`), 2026-11-14 02:35 UTC
- Dark since: 2026-11-14 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (visual-07, visual-07.json, 3, visual, false)` → `Run Playwright tests`
- Likely cause: 2 failed

<details><summary>End of the job log</summary>

```
    Usage:
        npx playwright show-trace playwright/output/test-results/VisualRegression-staticPages-glossary-matches-baseline-visual-regression-retry1/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  2 failed
    [visual-regression] › playwright/e2e/VisualRegression/glossaryInteractions.spec.ts:24:9 › Glossary interactions light › glossary-late-activity-count @Platform
    [visual-regression] › playwright/e2e/VisualRegression/staticPages.spec.ts:64:7 › glossary matches baseline
  312 passed (11.4m)
##[error]2 failed
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43549596925 — dark (conclusion: `failure`), 2026-11-14 03:03 UTC
- Dark since: 2026-11-14 03:03 UTC (first run of the current streak)
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

### OpenMetadata Service Unit Tests (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43561714818 — dark (conclusion: `failure`), 2026-11-14 05:28 UTC
- Dark since: 2026-11-14 05:28 UTC (first run of the current streak)
- Job / step: `openmetadata-service-unit-tests` → `Run openmetadata-service unit tests`
- Likely cause: batch too large to write

<details><summary>End of the job log</summary>

```
! at org.junit.platform.engine.support.hierarchical.NodeTestTask.execute(NodeTestTask.java:100)
! at org.junit.platform.engine.support.hierarchical.ForkJoinPoolHierarchicalTestExecutorService$ExclusiveTask.exec(ForkJoinPoolHierarchicalTestExecutorService.java:274)
! at java.base/java.util.concurrent.ForkJoinTask.doExec(ForkJoinTask.java:387)
! at java.base/java.util.concurrent.ForkJoinPool$WorkQueue.topLevelExec(ForkJoinPool.java:1312)
! at java.base/java.util.concurrent.ForkJoinPool.scan(ForkJoinPool.java:1843)
! at java.base/java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1808)
! at java.base/java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:188)
##[error]Exception in thread "om-credential-read-90" java.lang.StackOverflowError: injected overflow in the decrypt of bob
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
