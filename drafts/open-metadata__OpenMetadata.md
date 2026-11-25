<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15866 · **Generated:** 2026-11-25T06:46:34.527Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45559586465 — dark (conclusion: `failure`), 2026-11-25 06:18 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27629/27908)
Updating files: 100% (27908/27908)
Updating files: 100% (27908/27908), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
d71829c60d2ca5a755fe9fa1e3dfa638e905e919
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45560571625 — dark (conclusion: `failure`), 2026-11-25 06:26 UTC
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

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45551528419 — dark (conclusion: `failure`), 2026-11-25 05:08 UTC
- Dark since: 2026-11-23 14:51 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: INFO  [2026-11-25 06:18:25,784] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 1, Failures: 0

<details><summary>End of the job log</summary>

```
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:06:18:26 +0000] "GET /api/v1/containers/name/s3Service_2791ff7b__54d787ed531c491e81dc0d9958214771__ContainerResourceIT__test_listChildren_atArbitraryDepth_returnsOnlyDirectChildren.dep…
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:06:18:26 +0000] "GET /api/v1/containers/name/s3Service_2791ff7b__54d787ed531c491e81dc0d9958214771__ContainerResourceIT__test_listChildren_atArbitraryDepth_returnsOnlyDirectChildren.dep…
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:06:18:26 +0000] "GET /api/v1/containers/name/s3Service_2791ff7b__54d787ed531c491e81dc0d9958214771__ContainerResourceIT__test_listChildren_atArbitraryDepth_returnsOnlyDirectChildren.dep…
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:06:18:26 +0000] "DELETE /api/v1/services/storageServices/async/5e684ce4-cf00-44f7-8f08-d3404181e445?hardDelete=true&recursive=true HTTP/1.1" 202 413 "-" "okhttp/5.5.0" 1
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:06:18:26 +0000] "GET /api/v1/services/storageServices/5e684ce4-cf00-44f7-8f08-d3404181e445?include=all HTTP/1.1" 200 377 "-" "okhttp/5.5.0" 1
INFO  [2026-11-25 06:18:26,086] org.openmetadata.service.jdbi3.EntityRepository: Found 5 children for storageService 5e684ce4-cf00-44f7-8f08-d3404181e445 (recursive=true, hardDelete=true)
INFO  [2026-11-25 06:18:26,090] org.openmetadata.service.cache.CachedEntityDao: CACHE: Writing entity to Redis - Key: om:it:1795583813133:e:container:045a9752-207a-407b-9c42-30862ff65164, JSON length: 672
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45551528776 — dark (conclusion: `failure`), 2026-11-25 05:08 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-25 06:17:50,918] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 0, Failures: 0

<details><summary>End of the job log</summary>

```
INFO  [2026-11-25 06:17:50,899] org.openmetadata.service.jdbi3.EntityRepository: Hard deleted teradata_6814005f__40564dc3de86474295852ba2a0b1f5e2__ConnectionSecretsMigrationIT__cleanupDeletesServicesAndHistory
INFO  [2026-11-25 06:17:50,916] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_database_service_search_index, docId: 0356…
INFO  [2026-11-25 06:17:50,917] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 0, Failures: 0
INFO  [2026-11-25 06:17:50,918] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 0, Failures: 0
INFO  [2026-11-25 06:17:50,920] org.openmetadata.service.util.WebsocketNotificationHandler: [AsyncDelete] Delete operation completed successfully - jobId: 63476e55-df90-47a9-bb2f-61292d062f3c, userId:4e45ab46-5c78-456d-…
INFO  [2026-11-25 06:17:51,021] org.openmetadata.service.jdbi3.BulkExecutor: Shutting down BulkExecutor...
INFO  [2026-11-25 06:17:51,022] io.dropwizard.health.HealthCheckManager: delayed shutdown: started (waiting 5 seconds)
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45551528458 — dark (conclusion: `failure`), 2026-11-25 05:08 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
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
