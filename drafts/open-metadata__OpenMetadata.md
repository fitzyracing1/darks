<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15869 · **Generated:** 2026-11-25T12:42:48.491Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45612088060 — dark (conclusion: `failure`), 2026-11-25 12:15 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27690/27969)
Updating files: 100% (27969/27969)
Updating files: 100% (27969/27969), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
fb5e8e5163654c0b388cf208ce47227bbabb2239
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45614807442 — dark (conclusion: `failure`), 2026-11-25 12:32 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45602291858 — dark (conclusion: `failure`), 2026-11-25 11:12 UTC
- Dark since: 2026-11-23 14:51 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45602291844 — dark (conclusion: `failure`), 2026-11-25 11:12 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-25 12:22:06,032] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 1, Failures: 0

<details><summary>End of the job log</summary>

```
INFO  [2026-11-25 12:22:06,023] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_storage_service_search_index, docId: 93bdc…
INFO  [2026-11-25 12:22:06,032] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 1, Failures: 0
INFO  [2026-11-25 12:22:06,034] org.openmetadata.service.util.WebsocketNotificationHandler: [AsyncDelete] Delete operation completed successfully - jobId: 1f521e1b-d38a-4054-a50c-46fb5e715e80, userId:f09822ed-261a-4fb0-…
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:12:22:06 +0000] "GET /api/v1/services/storageServices/93bdc565-6799-434e-927f-b7a94d271ea8?include=all HTTP/1.1" 404 99 "-" "okhttp/5.5.0" 1
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:12:22:06 +0000] "DELETE /api/v1/services/storageServices/async/31647a81-5d51-4bdc-b79e-9a31a135d1b0?hardDelete=true&recursive=true HTTP/1.1" 202 345 "-" "okhttp/5.5.0" 1
[0:0:0:0:0:0:0:1] - - [25/Nov/2026:12:22:06 +0000] "GET /api/v1/services/storageServices/31647a81-5d51-4bdc-b79e-9a31a135d1b0?include=all HTTP/1.1" 200 360 "-" "okhttp/5.5.0" 1
INFO  [2026-11-25 12:22:06,158] org.openmetadata.service.jdbi3.EntityRepository: Found 1 children for storageService 31647a81-5d51-4bdc-b79e-9a31a135d1b0 (recursive=true, hardDelete=true)
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45602291910 — dark (conclusion: `failure`), 2026-11-25 11:12 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (rdf)`
- Likely cause: The hosted runner lost communication with the server. Anything in your workflow that terminates the runner process, starves it for CPU/Memory, or blocks its network access can cause this error.

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
