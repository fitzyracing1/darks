<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15817 · **Generated:** 2026-11-19T06:47:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44472203646 — dark (conclusion: `failure`), 2026-11-19 06:26 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44471167043 — dark (conclusion: `failure`), 2026-11-19 06:18 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27169/27443)
Updating files: 100% (27443/27443)
Updating files: 100% (27443/27443), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
21377e76cf3494a5da9575c4e6e3ac3d1578c452
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44406949850 — dark (conclusion: `failure`), 2026-11-18 21:58 UTC
- Dark since: 2026-11-18 21:58 UTC (first run of the current streak)
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

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44428762920 — dark (conclusion: `failure`), 2026-11-19 00:24 UTC
- Dark since: 2026-11-19 00:24 UTC (first run of the current streak)
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

### py-tests (`.github/workflows/py-tests.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44434274742 — dark (conclusion: `failure`), 2026-11-19 01:05 UTC
- Dark since: 2026-11-19 01:05 UTC (first run of the current streak)
- Job / step: `python / Integration Tests (postgres, shard-3, 3.11)` → `Run Integration Tests`
- Likely cause: nox > Session integration-tests failed.

<details><summary>End of the job log</summary>

```
202.93s setup    tests/integration/airflow/test_airflow_lineage.py::test_pipeline_created
181.65s call     tests/integration/trino/test_profiler_sampling.py::test_profiler_dynamic_threshold_sampling
=========================== short test summary info ============================
ERROR tests/integration/mongodb/test_metadata.py::test_ingest_metadata[test_table-] - requests.exceptions.ReadTimeout: UnixHTTPConnectionPool(host='localhost', port=None): Read timed out. (read timeout=60)
= 854 passed, 31 skipped, 7 xfailed, 179 warnings, 1 error in 3579.66s (0:59:39) =
nox > Command /home/runner/work/OpenMetadata/OpenMetadata/env/bin/pytest -c pyproject.toml -o testpaths=tests/integration/ --cov=metadata --cov-branch --cov-config=pyproject.toml --junitxml=junit/test-results-integratio…
nox > Session integration-tests failed.
##[error]Process completed with exit code 1.
```

</details>

### Postgresql PR Playwright E2E Tests (`.github/workflows/playwright-postgresql-e2e.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44445461359 — dark (conclusion: `failure`), 2026-11-19 02:35 UTC
- Dark since: 2026-11-19 02:35 UTC (first run of the current streak)
- Job / step: `playwright / playwright-ci (chromium-05, chromium-05.json, 3, chromium, false)` → `Run Playwright tests`
- Likely cause: 4 timed out

<details><summary>End of the job log</summary>

```
    ────────────────────────────────────────────────────────────────────────────────────────────────
  4 failed
    [chromium] › playwright/e2e/Features/MetricAssets.spec.ts:138:9 › Metric Assets › *** links assets from the header and sees them on the Assets tab @Features @Governance
    [chromium] › playwright/e2e/Features/MetricAssets.spec.ts:217:9 › Metric Assets › *** searches the linked assets and previews one @Features @Governance
    [chromium] › playwright/e2e/Features/MetricAssets.spec.ts:242:9 › Metric Assets › *** unlinks assets one at a time and in bulk @Features @Governance
    [chromium] › playwright/e2e/Features/MetricAssets.spec.ts:297:9 › Metric Assets › data consumer sees linked assets but cannot change them @Features @Governance
  144 passed (21.9m)
##[error]4 timed out
```

</details>

### SonarCloud UI Nightly (`.github/workflows/ui-sonarcloud-nightly.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44448730432 — dark (conclusion: `failure`), 2026-11-19 03:03 UTC
- Dark since: 2026-11-19 03:03 UTC (first run of the current streak)
- Job / step: `Coverage + Sonar` → `Retry 'SonarCloud Branch Scan'`
- Likely cause: [ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1

<details><summary>End of the job log</summary>

```
Caused by: io.grpc.StatusRuntimeException: UNAVAILABLE: HTTP/2 error code: NO_ERROR
Received Goaway
	at io.grpc.Status.asRuntimeException(Status.java:532)
	at io.grpc.stub.ClientCalls$BlockingResponseStream.hasNext(ClientCalls.java:731)
	at org.sonar.plugins.javascript.bridge.BridgeServerImpl.analyzeProject(BridgeServerImpl.java:492)
	... 20 common frames omitted
[ERROR] Bootstrapper: An error occurred: Error: Scanner engine failed with code 1
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
