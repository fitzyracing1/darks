<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15762 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43378949395 — dark (conclusion: `failure`), 2026-11-13 06:28 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43377652419 — dark (conclusion: `failure`), 2026-11-13 06:17 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27319/27594)
Updating files: 100% (27594/27594)
Updating files: 100% (27594/27594), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
90f2bc5c3d70981ff119d816c6f8b958175afbe6
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43370799869 — dark (conclusion: `failure`), 2026-11-13 05:15 UTC
- Dark since: 2026-11-13 04:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (MySQL + Elasticsearch)`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43370799806 — dark (conclusion: `failure`), 2026-11-13 05:15 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43370799814 — dark (conclusion: `failure`), 2026-11-13 05:15 UTC
- Dark since: 2026-11-13 04:11 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: ! at io.dropwizard.jetty.ZipExceptionHandlingGzipHandler.handle(ZipExceptionHandlingGzipHandler.java:21)

<details><summary>End of the job log</summary>

```
INFO  [2026-11-13 06:26:59,374] org.openmetadata.service.jdbi3.EntityDAO: Updating FQN for glossary_term_entity from 532aef6f05c30b2d__532aef6f6f6f4fa8bb09e6188966ab72__OntologyImpactIT__movingChildrenRequiresEditAllOnE…
INFO  [2026-11-13 06:26:59,380] org.openmetadata.service.jdbi3.EntityRepository: storeUpdate: versionChanged=true, entityChanged=true, entityType=glossaryTerm, id=90a5114c-638d-4ca9-b4de-60a9561d2983
INFO  [2026-11-13 06:26:59,381] org.openmetadata.service.jdbi3.EntityRepository: Updated glossaryTerm:90a5114c-638d-4ca9-b4de-60a9561d2983:532aef6f05c30b2d__532aef6f6f6f4fa8bb09e6188966ab72__OntologyImpactIT__movingChil…
INFO  [2026-11-13 06:26:59,384] org.openmetadata.service.jdbi3.EntityRepository: [fqn-change] repointed workflow instances 532aef6f05c30b2d__532aef6f6f6f4fa8bb09e6188966ab72__OntologyImpactIT__movingChildrenRequiresEdit…
INFO  [2026-11-13 06:26:59,416] org.openmetadata.service.cache.CachedEntityDao: CACHE: Writing entity to Redis - Key: om:it:1794547551219:e:glossaryTerm:0cb59f6e-58be-437c-9ee3-151d35b1ba8a, JSON length: 1466
INFO  [2026-11-13 06:26:59,422] org.openmetadata.service.cache.CachedEntityDao: CACHE: Successfully wrote entity to Redis - Type: glossaryTerm -> ID: 0cb59f6e-58be-437c-9ee3-151d35b1ba8a
INFO  [2026-11-13 06:26:59,422] org.openmetadata.service.governance.workflows.WorkflowEventConsumer: WorkflowEventConsumer - Triggering with signal: glossaryTerm-entityUpdated
##[error]Process completed with exit code 124.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
