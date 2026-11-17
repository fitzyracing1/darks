<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15789 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Maven Collate Tests", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43938534553 — dark (conclusion: `failure`), 2026-11-16 19:21 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43987805573 — dark (conclusion: `failure`), 2026-11-17 00:27 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27049/27322)
Updating files: 100% (27322/27322)
Updating files: 100% (27322/27322), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
d9fb1341521854772fc411d16d0e8341ae3b929e
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43938534461 — dark (conclusion: `failure`), 2026-11-16 19:21 UTC
- Dark since: 2026-11-16 11:24 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43938552027

<details><summary>End of the job log</summary>

```
* maven-collate-om-ci (ID 133549572593)
  * Integration Tests (MySQL + Elasticsearch)
X main OpenMetadata Collate Test open-metadata/openmetadata-collate#2548 · 43938552027
Triggered via workflow_dispatch about 55 minutes ago
JOBS
X maven-collate-om-ci in 55m25s (ID 133549572593)
  X Force workflow fail
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43938552027
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43938534326 — dark (conclusion: `failure`), 2026-11-16 19:21 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-16 20:30:08,792] io.dropwizard.health.HealthCheckManager: delayed shutdown: started (waiting 5 seconds)

<details><summary>End of the job log</summary>

```
+---------+----------------+---------------+---------------+----------------+----------------------------------------------------------------------------------------------------------------------------------------------…
| 2.1.0   | Current        | Current       | Current       | Current        | {tableCount=1547, searchIndexCount=0, teamCount=509, testSuiteCount=637, messagingServiceCount=83, pipelineCount=5, storageContainerCount=3, …
+---------+----------------+---------------+---------------+----------------+----------------------------------------------------------------------------------------------------------------------------------------------…
INFO  [2026-11-16 20:30:08,610] org.openmetadata.service.migration.api.MigrationWorkflow: [MigrationWorkflow] WorkFlow Completed
INFO  [2026-11-16 20:30:08,761] org.openmetadata.it.bootstrap.TestSuiteBootstrap: Configuring K8sPipelineClient for pipeline operations
INFO  [2026-11-16 20:30:08,761] org.openmetadata.it.bootstrap.TestSuiteBootstrap: RDF disabled for this test run
INFO  [2026-11-16 20:30:08,792] io.dropwizard.health.HealthCheckManager: delayed shutdown: started (waiting 5 seconds)
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43938534750 — dark (conclusion: `failure`), 2026-11-16 19:21 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43938534462 — dark (conclusion: `failure`), 2026-11-16 19:21 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
