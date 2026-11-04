<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15677 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Maven Collate Tests", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + OpenSearch", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41821997654 — dark (conclusion: `failure`), 2026-11-04 11:34 UTC
- Dark since: 2026-11-03 21:06 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/41822068392

<details><summary>End of the job log</summary>

```
* maven-collate-om-ci (ID 126547400727)
  * Integration Tests (MySQL + Elasticsearch)
X main OpenMetadata Collate Test open-metadata/openmetadata-collate#2548 · 41822068392
Triggered via workflow_dispatch about 41 minutes ago
JOBS
X maven-collate-om-ci in 35m39s (ID 126547400727)
  X Force workflow fail
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/41822068392
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41829616645 — dark (conclusion: `failure`), 2026-11-04 12:28 UTC
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

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41824857691 — dark (conclusion: `failure`), 2026-11-04 11:55 UTC
- Dark since: 2026-11-04 11:33 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Run Integration Tests (PostgreSQL + OpenSearch)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
##[error]Process completed with exit code 1.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41826012996 — dark (conclusion: `failure`), 2026-11-04 12:03 UTC
- Dark since: 2026-11-04 11:34 UTC (first run of the current streak)
- Job / step: `warm-fixture / prepare-playwright-fixture` → `Prepare seeded environment`
- Likely cause: Final attempt failed. Child_process exited with error code 1

<details><summary>End of the job log</summary>

```
 Container execute_migrate_all  Waiting
 Container openmetadata_opensearch  Waiting
 Container openmetadata_opensearch  Healthy
 Container openmetadata_postgresql  Healthy
 Container execute_migrate_all  service "execute-migrate-all" didn't complete successfully: exit 1
service "execute-migrate-all" didn't complete successfully: exit 1
Failed to start Docker instances!
##[error]Final attempt failed. Child_process exited with error code 1
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41824857800 — dark (conclusion: `failure`), 2026-11-04 11:55 UTC
- Dark since: 2026-11-04 11:39 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (retry-queue)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41824857660 — dark (conclusion: `failure`), 2026-11-04 11:55 UTC
- Dark since: 2026-11-04 11:39 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (multi-node)` → `Run Integration Tests (PostgreSQL + Elasticsearch + Redis)`
- Likely cause: [ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException

<details><summary>End of the job log</summary>

```
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
