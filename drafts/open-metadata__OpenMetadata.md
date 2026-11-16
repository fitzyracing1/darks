<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15787 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Maven Collate Tests", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43917946364 — dark (conclusion: `failure`), 2026-11-16 17:23 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43926347261 — dark (conclusion: `failure`), 2026-11-16 18:12 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27041/27314)
Updating files: 100% (27314/27314)
Updating files: 100% (27314/27314), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
951ed35828bfe91542dd3b8c971c9889092ec1b9
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43917946194 — dark (conclusion: `failure`), 2026-11-16 17:23 UTC
- Dark since: 2026-11-16 11:24 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43917963920

<details><summary>End of the job log</summary>

```
* maven-collate-om-ci (ID 133477163330)
  * Integration Tests (MySQL + Elasticsearch)
X main OpenMetadata Collate Test open-metadata/openmetadata-collate#2548 · 43917963920
Triggered via workflow_dispatch about 53 minutes ago
JOBS
X maven-collate-om-ci in 51m40s (ID 133477163330)
  X Force workflow fail
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43917963920
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43913555804 — dark (conclusion: `failure`), 2026-11-16 16:59 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-16 18:07:58,330] org.openmetadata.service.audit.AuditLogRepository: eventType=entityDeleted user=admin actorType=USER entityType=databaseService entityFQN=postgresService_d6dcd8e7__41e56703d31440cfbf6e8e1…

<details><summary>End of the job log</summary>

```
[0:0:0:0:0:0:0:1] - - [16/Nov/2026:18:07:57 +0000] "GET /api/v1/dataQuality/testCases/testCaseIncidentStatus/search/list?limit=1&testCaseFQN=shared_mysql.legacy_testsuites_db_1794852475483.legacy_testsuites_schema_17948…
INFO  [2026-11-16 18:07:58,330] org.openmetadata.service.audit.AuditLogRepository: eventType=entityDeleted user=admin actorType=USER entityType=databaseService entityFQN=postgresService_d6dcd8e7__41e56703d31440cfbf6e8e1…
INFO  [2026-11-16 18:07:58,333] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=database entityFQN=shared_mysql.legacy_testsuites_db_1794852475483 entityId…
INFO  [2026-11-16 18:07:58,336] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=databaseSchema entityFQN=shared_mysql.legacy_testsuites_db_1794852475483.le…
INFO  [2026-11-16 18:07:58,339] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=table entityFQN=shared_mysql.legacy_testsuites_db_1794852475483.legacy_test…
INFO  [2026-11-16 18:07:58,340] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=testCase entityFQN=shared_mysql.legacy_testsuites_db_1794852475483.legacy_t…
[0:0:0:0:0:0:0:1] - - [16/Nov/2026:18:07:59 +0000] "GET /api/v1/dataQuality/testCases/testCaseIncidentStatus/search/list?limit=15&testCaseFQN=shared_mysql.legacy_testsuites_db_1794852475483.legacy_testsuites_schema_1794…
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43913556081 — dark (conclusion: `failure`), 2026-11-16 16:59 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43913555930 — dark (conclusion: `failure`), 2026-11-16 16:59 UTC
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
