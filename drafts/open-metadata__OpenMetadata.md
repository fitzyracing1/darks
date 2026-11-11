<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15742 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Populate Playwright CI caches", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43020003479 — dark (conclusion: `failure`), 2026-11-11 12:24 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43018776715 — dark (conclusion: `failure`), 2026-11-11 12:15 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27206/27480)
Updating files: 100% (27480/27480)
Updating files: 100% (27480/27480), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
91e80ff84e5802dd5b307de780bf9a544c51db75
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43020003718 — dark (conclusion: `failure`), 2026-11-11 12:24 UTC
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
  178 passed (40.6s)
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43008406112 — dark (conclusion: `failure`), 2026-11-11 11:01 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
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

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43008406167 — dark (conclusion: `failure`), 2026-11-11 11:01 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
