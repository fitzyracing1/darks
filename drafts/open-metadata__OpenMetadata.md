<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15861 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- security-scan (`.github/workflows/security-scan.yml`): [issue #38522](https://github.com/open-metadata/OpenMetadata/issues/38522) "security-scan fails on ubuntu-latest (Ubuntu 26.04): E: Package 'wkhtmltopdf' has no installation candidate"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 9 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Integration Tests - PostgreSQL + Elasticsearch + Redis", +6 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45518312403 — dark (conclusion: `failure`), 2026-11-25 00:28 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27615/27893)
Updating files: 100% (27893/27893)
Updating files: 100% (27893/27893), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
03a162fb8797f3735690237b1492f9902eac051d
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517666013 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517666306 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-23 14:51 UTC (first run of the current streak)
- Job / step: `Build Integration Test Runtime` → `Build and Bundle Integration Test Runtime`
- Likely cause: cannot find symbol (openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupTrendSqlTest.java:51)

<details><summary>End of the job log</summary>

```
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/apps/scheduler/OmAppJobListenerTest.java:[50,16] sun.misc.Unsafe is internal proprietary API a…
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/resources/apps/AppResourceRetryQueueTest.java:[49,16] sun.misc.Unsafe is internal proprietary …
[INFO] 16 warnings
[INFO] -------------------------------------------------------------
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
##[error][ERROR] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupQueriesSqlTest.java:[39,37] package org.testcontainers.containers does not exist
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517666072 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
- Job / step: `Build Integration Test Runtime` → `Build and Bundle Integration Test Runtime`
- Likely cause: cannot find symbol (openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupTrendSqlTest.java:51)

<details><summary>End of the job log</summary>

```
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/apps/scheduler/OmAppJobListenerTest.java:[50,16] sun.misc.Unsafe is internal proprietary API a…
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/resources/apps/AppResourceRetryQueueTest.java:[49,16] sun.misc.Unsafe is internal proprietary …
[INFO] 16 warnings
[INFO] -------------------------------------------------------------
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
##[error][ERROR] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupQueriesSqlTest.java:[39,37] package org.testcontainers.containers does not exist
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517666084 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-23 14:59 UTC (first run of the current streak)
- Job / step: `Build Integration Test Runtime` → `Build and Bundle Integration Test Runtime`
- Likely cause: cannot find symbol (openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupTrendSqlTest.java:51)

<details><summary>End of the job log</summary>

```
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/apps/scheduler/OmAppJobListenerTest.java:[50,16] sun.misc.Unsafe is internal proprietary API a…
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/resources/apps/AppResourceRetryQueueTest.java:[49,16] sun.misc.Unsafe is internal proprietary …
[INFO] 16 warnings
[INFO] -------------------------------------------------------------
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
##[error][ERROR] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupQueriesSqlTest.java:[39,37] package org.testcontainers.containers does not exist
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517667049 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-24 10:17 UTC (first run of the current streak)
- Job / step: `warm-fixture / build` → `Build with Maven`
- Likely cause: cannot find symbol (openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupTrendSqlTest.java:51)

<details><summary>End of the job log</summary>

```
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/apps/scheduler/OmAppJobListenerTest.java:[50,16] sun.misc.Unsafe is internal proprietary API a…
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/resources/apps/AppResourceRetryQueueTest.java:[49,16] sun.misc.Unsafe is internal proprietary …
[INFO] 16 warnings
[INFO] -------------------------------------------------------------
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
##[error][ERROR] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupQueriesSqlTest.java:[39,37] package org.testcontainers.containers does not exist
```

</details>

### OpenMetadata Service Unit Tests (`.github/workflows/openmetadata-service-unit-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517666163 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-24 22:56 UTC (first run of the current streak)
- Job / step: `openmetadata-service-unit-tests` → `Run openmetadata-service unit tests`
- Likely cause: cannot find symbol (openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupTrendSqlTest.java:51)

<details><summary>End of the job log</summary>

```
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/apps/scheduler/OmAppJobListenerTest.java:[50,16] sun.misc.Unsafe is internal proprietary API a…
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/resources/apps/AppResourceRetryQueueTest.java:[49,16] sun.misc.Unsafe is internal proprietary …
[INFO] 16 warnings
[INFO] -------------------------------------------------------------
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
##[error][ERROR] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupQueriesSqlTest.java:[39,37] package org.testcontainers.containers does not exist
```

</details>

### Publish Package to Maven Central Repository (`.github/workflows/publish-maven-package.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517665946 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-24 22:56 UTC (first run of the current streak)
- Job / step: `publish-maven-packages` → `Build openmetadata-service`
- Likely cause: cannot find symbol (openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupTrendSqlTest.java:51)

<details><summary>End of the job log</summary>

```
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/apps/scheduler/OmAppJobListenerTest.java:[50,16] sun.misc.Unsafe is internal proprietary API a…
##[warning][WARNING] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/resources/apps/AppResourceRetryQueueTest.java:[49,16] sun.misc.Unsafe is internal proprietary …
[INFO] 16 warnings
[INFO] -------------------------------------------------------------
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
##[error][ERROR] /home/runner/work/OpenMetadata/OpenMetadata/openmetadata-service/src/test/java/org/openmetadata/service/jdbi3/IncidentGroupQueriesSqlTest.java:[39,37] package org.testcontainers.containers does not exist
```

</details>

### Java Checkstyle (`.github/workflows/java-checkstyle.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/45517666156 — dark (conclusion: `failure`), 2026-11-25 00:23 UTC
- Dark since: 2026-11-25 00:23 UTC (first run of the current streak)
- Job / step: `java-checkstyle` → `Java checkstyle failed`
- Likely cause: Run 'mvn spotless:apply' in the repository root and commit the changes. The job summary lists the files.

<details><summary>End of the job log</summary>

```
[INFO] OpenMetadata Java Client ........................... SUCCESS [  0.171 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  02:05 min
[INFO] Finished at: 2026-11-25T00:25:44Z
[INFO] ------------------------------------------------------------------------
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
