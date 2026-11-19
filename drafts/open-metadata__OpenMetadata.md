<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15816 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Maven Collate Tests", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44561848611 — dark (conclusion: `failure`), 2026-11-19 16:03 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44585341696 — dark (conclusion: `failure`), 2026-11-19 18:12 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27246/27521)
Updating files: 100% (27521/27521)
Updating files: 100% (27521/27521), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
2cc8c5525582f44dd70ed861b2aef44ea0e0be1e
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44561848487 — dark (conclusion: `failure`), 2026-11-19 16:03 UTC
- Dark since: 2026-11-19 15:54 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44561868860

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/44561868860
failed to get jobs: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/44561868860/jobs?per_page=100)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44561868860
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44561848636 — dark (conclusion: `failure`), 2026-11-19 16:03 UTC
- Dark since: 2026-11-19 15:54 UTC (first run of the current streak)
- Job / step: `Build Integration Test Runtime` → `Build and Bundle Integration Test Runtime`
- Likely cause: [ERROR]   mvn <args> -rf :openmetadata-service

<details><summary>End of the job log</summary>

```
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/DependencyResolutionException
[ERROR]
[ERROR] After correcting the problems, you can resume the build with the command
[ERROR]   mvn <args> -rf :openmetadata-service
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44561848520 — dark (conclusion: `failure`), 2026-11-19 16:03 UTC
- Dark since: 2026-11-19 15:54 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: INFO  [2026-11-19 17:15:28,789] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 0, Failures: 0

<details><summary>End of the job log</summary>

```
INFO  [2026-11-19 17:15:28,945] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully create entity in ElasticSearch for index: openmetadata_database_service_search_index, docId: dadc22c…
[0:0:0:0:0:0:0:1] - - [19/Nov/2026:17:15:28 +0000] "POST /api/v1/services/databaseServices HTTP/1.1" 201 451 "-" "okhttp/5.5.0" 13
INFO  [2026-11-19 17:15:29,217] org.openmetadata.service.cache.CachedEntityDao: CACHE: Writing entity to Redis - Key: om:it:1795104849353:e:databaseService:dadc22cb-f7e4-421f-8b73-a076f5c57a7f, JSON length: 986
INFO  [2026-11-19 17:15:29,217] org.openmetadata.service.cache.CachedEntityDao: CACHE: Successfully wrote entity to Redis - Type: databaseService -> ID: dadc22cb-f7e4-421f-8b73-a076f5c57a7f
INFO  [2026-11-19 17:15:29,218] org.openmetadata.service.governance.workflows.WorkflowEventConsumer: WorkflowEventConsumer - Triggering with signal: databaseService-entityCreated
INFO  [2026-11-19 17:15:30,252] org.openmetadata.service.audit.AuditLogRepository: eventType=entityDeleted user=admin actorType=USER entityType=mlmodelService entityFQN=mlflow_bcb7afe0__a769b0cfcb944c61b1b98d2f068132e6_…
INFO  [2026-11-19 17:15:30,253] org.openmetadata.service.audit.AuditLogRepository: eventType=entityCreated user=admin actorType=USER entityType=databaseService entityFQN=teradata_0390a674__a769b0cfcb944c61b1b98d2f068132…
##[error]Process completed with exit code 124.
```

</details>

### Workflows and Data Access Request E2E tests (`.github/workflows/data-access-request-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44560118956 — dark (conclusion: `failure`), 2026-11-19 15:54 UTC
- Dark since: 2026-11-19 15:54 UTC (first run of the current streak)
- Job / step: `data-access-request-e2e` → `Trigger Collate Playwright run & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44560246856

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: data-access-request-e2e
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/44560246856
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/44560246856?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44560246856
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44561848446 — dark (conclusion: `failure`), 2026-11-19 16:03 UTC
- Dark since: 2026-11-19 16:03 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
