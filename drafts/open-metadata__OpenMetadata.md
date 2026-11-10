<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15732 · **Generated:** 2026-11-10T18:39:11.864Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Merge Queue Dequeue Report", "Integration Tests - MySQL + Elasticsearch", "Integration Tests - PostgreSQL + OpenSearch", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42867958729 — dark (conclusion: `failure`), 2026-11-10 17:44 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42856425844 — dark (conclusion: `failure`), 2026-11-10 16:37 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-10 17:52:34,711] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: DeleteByQuery response From ES - Deleted: 1, Failures: 0

<details><summary>End of the job log</summary>

```
[0:0:0:0:0:0:0:1] - - [10/Nov/2026:17:52:35 +0000] "DELETE /api/v1/ontologies/8ba1e870-cd4f-4589-986f-5d643cf70389?hardDelete=true&recursive=true HTTP/1.1" 200 903 "-" "okhttp/5.5.0" 315
INFO  [2026-11-10 17:52:35,135] org.openmetadata.service.jdbi3.EntityRepository: Created databaseService:815a8806-fad1-4f4f-869b-c2c954eed811:postgresService_5a9871b1__3e7773f929de4eb5aa2a2a428b3480d1__NativeOntologyDat…
INFO  [2026-11-10 17:52:35,148] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully create entity in ElasticSearch for index: openmetadata_database_service_search_index, docId: 815a880…
[0:0:0:0:0:0:0:1] - - [10/Nov/2026:17:52:35 +0000] "POST /api/v1/services/databaseServices HTTP/1.1" 201 550 "-" "okhttp/5.5.0" 15
INFO  [2026-11-10 17:52:35,153] org.openmetadata.service.jdbi3.EntityRepository: Created database:f5a5a0c5-c4d0-4241-9633-24056691b968:postgresService_5a9871b1__3e7773f929de4eb5aa2a2a428b3480d1__NativeOntologyDataGraphC…
INFO  [2026-11-10 17:52:35,168] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully create entity in ElasticSearch for index: openmetadata_database_search_index, docId: f5a5a0c5-c4d0-4…
[0:0:0:0:0:0:0:1] - - [10/Nov/2026:17:52:35 +0000] "POST /api/v1/databases HTTP/1.1" 201 454 "-" "okhttp/5.5.0" 19
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42862807306 — dark (conclusion: `failure`), 2026-11-10 17:14 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42862807296 — dark (conclusion: `failure`), 2026-11-10 17:14 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42872546758 — dark (conclusion: `failure`), 2026-11-10 18:10 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27188/27462)
Updating files: 100% (27462/27462)
Updating files: 100% (27462/27462), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
a4083714fe213b5486d04f6e0bc6f5c7b7046239
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42867958299 — dark (conclusion: `failure`), 2026-11-10 17:44 UTC
- Dark since: 2026-11-10 16:37 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/42867972852

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/42867972852
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/42867972852?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/42867972852
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42871135117 — dark (conclusion: `failure`), 2026-11-10 18:02 UTC
- Dark since: 2026-11-10 17:14 UTC (first run of the current streak)
- Job / step: `warm-fixture / plan-playwright` → `Verify browser helper behavior`
- Likely cause: 1 failed

<details><summary>End of the job log</summary>

```
    ../../../../../../artifacts/test-results/visualData-ontology-librar-54013--non-entity-response-shapes/trace.zip
    Usage:
        npx playwright show-trace ../../../../../../artifacts/test-results/visualData-ontology-librar-54013--non-entity-response-shapes/trace.zip
    ────────────────────────────────────────────────────────────────────────────────────────────────
  1 failed
    playwright/browser-tests/visualData.spec.ts:258:5 › ontology library and publication APIs use their non-entity response shapes
  178 passed (40.3s)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
