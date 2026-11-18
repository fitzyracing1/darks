<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15806 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44252365637 — dark (conclusion: `failure`), 2026-11-18 06:34 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44250256775 — dark (conclusion: `failure`), 2026-11-18 06:17 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27126/27399)
Updating files: 100% (27399/27399)
Updating files: 100% (27399/27399), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
bbc3497485c1503bf3d1f5d248acc96427861589
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44244304506 — dark (conclusion: `failure`), 2026-11-18 05:26 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-18 06:35:39,460] org.openmetadata.service.jdbi3.BulkExecutor: Shutting down BulkExecutor...

<details><summary>End of the job log</summary>

```
INFO  [2026-11-18 06:35:39,391] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully submitted child update in ElasticSearch for index: all
INFO  [2026-11-18 06:35:39,415] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_glossary_term_search_index, docId: adc61b8…
INFO  [2026-11-18 06:35:39,419] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully submitted child update in ElasticSearch for index: all
INFO  [2026-11-18 06:35:39,443] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully deleted entity from ElasticSearch for index: openmetadata_glossary_term_search_index, docId: b46127a…
INFO  [2026-11-18 06:35:39,446] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully submitted child update in ElasticSearch for index: all
INFO  [2026-11-18 06:35:39,456] io.dropwizard.health.HealthCheckManager: delayed shutdown: started (waiting 5 seconds)
INFO  [2026-11-18 06:35:39,460] org.openmetadata.service.jdbi3.BulkExecutor: Shutting down BulkExecutor...
##[error]Process completed with exit code 124.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
