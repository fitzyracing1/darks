<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15826 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - MySQL + Elasticsearch", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44902796600 — dark (conclusion: `failure`), 2026-11-21 12:13 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27271/27546)
Updating files: 100% (27546/27546)
Updating files: 100% (27546/27546), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
78e4716b17be950e79e3634c49f0b52323d6732a
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44870880797 — dark (conclusion: `failure`), 2026-11-21 05:26 UTC
- Dark since: 2026-11-20 04:54 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44870880829 — dark (conclusion: `failure`), 2026-11-21 05:26 UTC
- Dark since: 2026-11-21 05:26 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-21 06:36:49,346] org.openmetadata.service.jdbi3.BulkExecutor: Shutting down BulkExecutor...

<details><summary>End of the job log</summary>

```
INFO  [2026-11-21 06:36:49,181] org.openmetadata.service.rdf.RdfRepository: RDF Repository initialized with FUSEKI storage
INFO  [2026-11-21 06:36:49,191] org.openmetadata.service.rdf.storage.JenaFusekiStorage: ASK query result: true
INFO  [2026-11-21 06:36:49,191] org.openmetadata.service.rdf.RdfRepository: OpenMetadata ontologies already loaded
INFO  [2026-11-21 06:36:49,193] org.openmetadata.service.rdf.maintenance.RdfStorageMaintenanceService: RDF storage maintenance compacts the serving dataset every 24 h
INFO  [2026-11-21 06:36:49,193] org.openmetadata.service.rdf.RdfUpdater: RDF updater initialized with durable, ordered live writes
INFO  [2026-11-21 06:36:49,345] io.dropwizard.health.HealthCheckManager: delayed shutdown: started (waiting 5 seconds)
INFO  [2026-11-21 06:36:49,346] org.openmetadata.service.jdbi3.BulkExecutor: Shutting down BulkExecutor...
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44870880851 — dark (conclusion: `failure`), 2026-11-21 05:26 UTC
- Dark since: 2026-11-21 05:26 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44870880775 — dark (conclusion: `failure`), 2026-11-21 05:26 UTC
- Dark since: 2026-11-21 05:26 UTC (first run of the current streak)
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

### Workflows and Data Access Request E2E tests (`.github/workflows/data-access-request-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44870880895 — dark (conclusion: `failure`), 2026-11-21 05:26 UTC
- Dark since: 2026-11-21 05:26 UTC (first run of the current streak)
- Job / step: `data-access-request-e2e` → `Trigger Collate Playwright run & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44870924147

<details><summary>End of the job log</summary>

```
* Run Governance Workflow & Data Access Request Playwright (ID 136745044652)
  * Run Governance Workflow & Data Access Request Playwright tests
X main Workflows and Data Access Request E2E tests (from OpenMetadata PR) open-metadata/openmetadata-collate#2548 · 44870924147
Triggered via workflow_dispatch about 49 minutes ago
JOBS
X Run Governance Workflow & Data Access Request Playwright in 47m46s (ID 136745044652)
  X Run Governance Workflow & Data Access Request Playwright tests
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44870924147
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
