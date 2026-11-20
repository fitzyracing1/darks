<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15824 · **Generated:** 2026-11-20T18:40:22.935Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Maven Collate Tests", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44790557323 — dark (conclusion: `failure`), 2026-11-20 18:12 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27269/27544)
Updating files: 100% (27544/27544)
Updating files: 100% (27544/27544), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
552bf314f5e1d9b4c6f01bc58b709dd16a7a7ffc
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44790707644 — dark (conclusion: `failure`), 2026-11-20 18:13 UTC
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

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44769708405 — dark (conclusion: `failure`), 2026-11-20 16:04 UTC
- Dark since: 2026-11-20 09:56 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44769721313

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/44769721313
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/44769721313?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44769721313
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44769708331 — dark (conclusion: `failure`), 2026-11-20 16:04 UTC
- Dark since: 2026-11-20 16:04 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44769708325 — dark (conclusion: `failure`), 2026-11-20 16:04 UTC
- Dark since: 2026-11-20 16:04 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44769708575 — dark (conclusion: `failure`), 2026-11-20 16:04 UTC
- Dark since: 2026-11-20 16:04 UTC (first run of the current streak)
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

### OpenMetadata Service Unit Tests (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44769708478 — dark (conclusion: `failure`), 2026-11-20 16:04 UTC
- Dark since: 2026-11-20 16:04 UTC (first run of the current streak)
- Job / step: `openmetadata-service-unit-tests` → `Run openmetadata-service unit tests`
- Likely cause: injected error inside the read

<details><summary>End of the job log</summary>

```
[INFO] Running org.openmetadata.service.apps.bundles.insights.workflows.WorkflowStatsBatchAggregationTest
[INFO] Tests run: 8, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.137 s -- in org.openmetadata.service.apps.bundles.insights.workflows.WorkflowStatsBatchAggregationTest
[INFO] Running org.openmetadata.service.apps.bundles.insights.DataInsightsAppTest
[INFO] Tests run: 4, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.199 s -- in org.openmetadata.service.apps.bundles.insights.DataInsightsAppTest
[INFO] Running org.openmetadata.service.apps.bundles.rdf.RdfIndexingRunContextTest
[INFO] Tests run: 6, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.010 s -- in org.openmetadata.service.apps.bundles.rdf.RdfIndexingRunContextTest
[INFO] Running org.openmetadata.service.apps.bundles.rdf.sink.RdfBulkSinkTest
##[error]Exception in thread "rdf-sink-writer" java.lang.OutOfMemoryError: simulated: batch too large to write
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
