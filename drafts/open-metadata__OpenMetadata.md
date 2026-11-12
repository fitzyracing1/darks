<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15749 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43213715539 — dark (conclusion: `failure`), 2026-11-12 11:58 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43216235902 — dark (conclusion: `failure`), 2026-11-12 12:15 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27309/27584)
Updating files: 100% (27584/27584)
Updating files: 100% (27584/27584), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
4fed0e844dc9cb4be3e9f5795baf979083b6ee2f
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43201588132 — dark (conclusion: `failure`), 2026-11-12 10:34 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-12 11:43:09,822] org.openmetadata.service.security.policyevaluator.SubjectCache: Invalidating all user policy caches

<details><summary>End of the job log</summary>

```
INFO  [2026-11-12 11:43:09,961] org.openmetadata.service.search.SearchRepository: Search index update without propagation - entity: 74cc90e7-e5ea-44e1-b9ff-ec72903ec821, type: glossaryTerm, update: 9ms
[0:0:0:0:0:0:0:1] - - [12/Nov/2026:11:43:09 +0000] "POST /api/v1/glossaryTerms HTTP/1.1" 201 572 "-" "okhttp/5.5.0" 50
INFO  [2026-11-12 11:43:10,003] org.openmetadata.service.jdbi3.EntityRepository: Created glossaryTerm:0951f6d9-731b-406c-a993-8a86f88687b8:fe6359820c4e7a45__fe635982d2504134ae49bcd6c7282c38__OntologyImpactIT__descendant…
INFO  [2026-11-12 11:43:10,015] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully create entity in ElasticSearch for index: openmetadata_glossary_term_search_index, docId: 0951f6d9-7…
INFO  [2026-11-12 11:43:10,035] org.openmetadata.service.search.elasticsearch.ElasticSearchEntityManager: Successfully updated entity in ElasticSearch for index: openmetadata_glossary_term_search_index, docId: 74cc90e7-…
INFO  [2026-11-12 11:43:10,035] org.openmetadata.service.search.SearchRepository: Search index update without propagation - entity: 74cc90e7-e5ea-44e1-b9ff-ec72903ec821, type: glossaryTerm, update: 9ms
INFO  [2026-11-12 11:43:10,041] org.openmetadata.service.jdbi3.BulkExecutor: Shutting down BulkExecutor...
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43201587743 — dark (conclusion: `failure`), 2026-11-12 10:34 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
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

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43201587647 — dark (conclusion: `failure`), 2026-11-12 10:34 UTC
- Dark since: 2026-11-11 14:12 UTC (first run of the current streak)
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

### OpenMetadata Service Unit Tests (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43213715557 — dark (conclusion: `failure`), 2026-11-12 11:58 UTC
- Dark since: 2026-11-12 11:48 UTC (first run of the current streak)
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
