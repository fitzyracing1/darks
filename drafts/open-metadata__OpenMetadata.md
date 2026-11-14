<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15772 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43519081643 — dark (conclusion: `failure`), 2026-11-13 22:24 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43534233555 — dark (conclusion: `failure`), 2026-11-14 00:26 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27368/27644)
Updating files: 100% (27644/27644)
Updating files: 100% (27644/27644), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
d47d0c5f208bdb9ff6f8d73603b6747169b0e4ee
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43519081928 — dark (conclusion: `failure`), 2026-11-13 22:24 UTC
- Dark since: 2026-11-13 04:11 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
