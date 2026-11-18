<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15802 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44142706454 — dark (conclusion: `failure`), 2026-11-17 17:58 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44208042005 — dark (conclusion: `failure`), 2026-11-18 00:28 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27122/27395)
Updating files: 100% (27395/27395)
Updating files: 100% (27395/27395), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
65a6afbda3062e14fc33d4e1a71e6f9f566f5e83
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44142706357 — dark (conclusion: `failure`), 2026-11-17 17:58 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (parallel)` → `Run Integration Tests (MySQL + Elasticsearch)`
- Likely cause: INFO  [2026-11-17 19:07:15,188] org.openmetadata.service.OpenMetadataApplication: Cache with name Stats CacheStats{hitCount=91480, missCount=126494, loadSuccessCount=0, loadExceptionCount=0, totalLoadTime=0, evictionCou…

<details><summary>End of the job log</summary>

```
INFO  [2026-11-17 19:07:15,609] org.openmetadata.service.OpenMetadataApplication: Stopping the application
INFO  [2026-11-17 19:07:15,610] org.openmetadata.service.security.auth.UserActivityTracker: Shutting down UserActivityTracker...
INFO  [2026-11-17 19:07:15,613] org.openmetadata.service.socket.DbWebSocketRelay: DbWebSocketRelay stopped instance=runnervmccnms:2834:1794938704866
INFO  [2026-11-17 19:07:15,613] org.openmetadata.service.jdbi3.HikariCPDataSourceFactory: Shutting down HikariCP connection pool: database
INFO  [2026-11-17 19:07:15,613] com.zaxxer.hikari.HikariDataSource: database - Shutdown initiated...
INFO  [2026-11-17 19:07:15,619] com.zaxxer.hikari.HikariDataSource: database - Shutdown completed.
INFO  [2026-11-17 19:07:15,620] org.openmetadata.service.rdf.RdfBackgroundScheduler: RDF background scheduler stopped
##[error]Process completed with exit code 124.
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44142706460 — dark (conclusion: `failure`), 2026-11-17 17:58 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44142706227 — dark (conclusion: `failure`), 2026-11-17 17:58 UTC
- Dark since: 2026-11-16 11:25 UTC (first run of the current streak)
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
