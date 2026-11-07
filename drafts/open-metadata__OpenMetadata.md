<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15701 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 8 workflows dark on main ("Merge Queue Dequeue Report", "Integration Tests - MySQL + Elasticsearch", "Integration Tests - PostgreSQL + OpenSearch", +5 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202656 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
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

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202457 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202774 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
- Dark since: 2026-11-05 11:11 UTC (first run of the current streak)
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202660 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
- Dark since: 2026-11-06 10:36 UTC (first run of the current streak)
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

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42298202759 — dark (conclusion: `failure`), 2026-11-06 21:37 UTC
- Dark since: 2026-11-06 21:37 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/42298260168

<details><summary>End of the job log</summary>

```
/home/runner/work/_temp/git-credentials-89b06398-6ce1-4073-a79c-a5f7a3924f47.config
/home/runner/work/_temp/git-credentials-89b06398-6ce1-4073-a79c-a5f7a3924f47.config
/github/runner_temp/git-credentials-89b06398-6ce1-4073-a79c-a5f7a3924f47.config
/github/runner_temp/git-credentials-89b06398-6ce1-4073-a79c-a5f7a3924f47.config
Removing credentials config '/home/runner/work/_temp/git-credentials-89b06398-6ce1-4073-a79c-a5f7a3924f47.config'
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/42298260168
failed to get jobs: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/42298260168/jobs?per_page=100)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/42298260168
```

</details>

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42318149809 — dark (conclusion: `failure`), 2026-11-07 00:25 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (26998/27270)
Updating files: 100% (27270/27270)
Updating files: 100% (27270/27270), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
ef95276e73eb9326830266bd0a9f55e6e05ec44c
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42316035888 — dark (conclusion: `failure`), 2026-11-07 00:05 UTC
- Dark since: 2026-11-07 00:05 UTC (first run of the current streak)
- Job / step: `populate` → `Report warm failures`
- Likely cause: cache warmers failed: browser — downstream runs stay on the previous main-scoped copies (or the resilient miss path) until the next populate

<details><summary>End of the job log</summary>

```
Received 257441067 of 257441067 (100.0%), 114.3 MBs/sec
Cache Size: ~246 MB (257441067 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/cf78ecf0-8288-4e93-bb96-8c8482a17f8c/cache.tzst -P -C /home/runner/work/OpenMetadata/OpenMetadata --use-compress-program unzstd
Cache restored successfully
Cache restored from key: Linux-playwright-f610a2dca1c82dfa7e9b43390b7cb2f6aac1388645c9d65f21d0f27da55923d4
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
##[error]Process completed with exit code 1.
```

</details>

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/42317831122 — dark (conclusion: `failure`), 2026-11-07 00:22 UTC
- Dark since: 2026-11-07 00:22 UTC (first run of the current streak)
- Job / step: `security-scan` → `Install Ubuntu dependencies`
- Likely cause: E: Package 'wkhtmltopdf' has no installation candidate

<details><summary>End of the job log</summary>

```
Reading package lists...
Building dependency tree...
Reading state information...
Package wkhtmltopdf is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source
E: Package 'wkhtmltopdf' has no installation candidate
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
