<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15742 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Populate Playwright CI caches", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43048827535 — dark (conclusion: `failure`), 2026-11-11 15:29 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43075274108 — dark (conclusion: `failure`), 2026-11-11 18:10 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27212/27486)
Updating files: 100% (27486/27486)
Updating files: 100% (27486/27486), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
b0a7f1237b9e863958ad134972c2eda194115fa1
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43073966863 — dark (conclusion: `failure`), 2026-11-11 18:02 UTC
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
  178 passed (48.4s)
##[error]Process completed with exit code 1.
```

</details>

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43036286166 — dark (conclusion: `failure`), 2026-11-11 14:12 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (global-state)` → `Install Ubuntu dependencies`
- Likely cause: apt-get install gave up: exhausted the 600s apt budget

<details><summary>End of the job log</summary>

```
After this operation, 37.3 MB of additional disk space will be used.
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Ign:2 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 build-essential amd64 12.12ubuntu2.26.04.2
Ign:3 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 comerr-dev amd64 2.1-1.47.2-3ubuntu4
Ign:4 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libgssrpc4t64 amd64 1.22.1-2ubuntu4.1
Ign:5 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libkadm5clnt-mit12 amd64 1.22.1-2ubuntu4.1
##[warning]apt-get install failed or hung (attempt 2/3); retrying in 10s
##[error]apt-get install gave up: exhausted the 600s apt budget
```

</details>

### Integration Tests - PostgreSQL + Elasticsearch + Redis (`.github/workflows/integration-tests-postgres-elasticsearch-redis.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43036286142 — dark (conclusion: `failure`), 2026-11-11 14:12 UTC
- Dark since: 2026-11-11 11:01 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (retry-queue)` → `Install Ubuntu dependencies`
- Likely cause: apt-get install gave up: exhausted the 600s apt budget

<details><summary>End of the job log</summary>

```
After this operation, 37.3 MB of additional disk space will be used.
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Ign:2 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 build-essential amd64 12.12ubuntu2.26.04.2
Ign:3 http://azure.archive.ubuntu.com/ubuntu resolute/main amd64v3 comerr-dev amd64 2.1-1.47.2-3ubuntu4
Ign:4 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libgssrpc4t64 amd64 1.22.1-2ubuntu4.1
Ign:5 http://azure.archive.ubuntu.com/ubuntu resolute-updates/main amd64v3 libkadm5clnt-mit12 amd64 1.22.1-2ubuntu4.1
##[warning]apt-get install failed or hung (attempt 2/3); retrying in 10s
##[error]apt-get install gave up: exhausted the 600s apt budget
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43036286253 — dark (conclusion: `failure`), 2026-11-11 14:12 UTC
- Dark since: 2026-11-11 14:12 UTC (first run of the current streak)
- Job / step: `Integration Test Lane (rdf)` → `Install Ubuntu dependencies`
- Likely cause: E: Unable to fetch some archives, maybe run apt update or try with --fix-missing?

<details><summary>End of the job log</summary>

```
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/libr/librdkafka/librdkafka%2b%2b1_2.13.0-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/c/cyrus-sasl2/libsasl2-dev_2.1.28%2bdfsg1-9ubuntu3_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/libr/librdkafka/librdkafka-dev_2.13.0-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/libf/libffi/libffi-dev_3.5.2-4_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/libt/libtasn1-6/libtasn1-doc_4.21.0-2_all.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/u/unixodbc/unixodbc-dev_2.3.14-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Unable to fetch some archives, maybe run apt update or try with --fix-missing?
##[error]Process completed with exit code 100.
```

</details>

### Publish Package to Maven Central Repository (`.github/workflows/publish-maven-package.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43036286270 — dark (conclusion: `failure`), 2026-11-11 14:12 UTC
- Dark since: 2026-11-11 14:12 UTC (first run of the current streak)
- Job / step: `publish-maven-packages` → `Install Ubuntu dependencies`
- Likely cause: E: Unable to fetch some archives, maybe run apt update or try with --fix-missing?

<details><summary>End of the job log</summary>

```
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/libr/librdkafka/librdkafka1_2.13.0-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/libr/librdkafka/librdkafka%2b%2b1_2.13.0-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/c/cyrus-sasl2/libsasl2-dev_2.1.28%2bdfsg1-9ubuntu3_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/universe/libr/librdkafka/librdkafka-dev_2.13.0-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/libt/libtasn1-6/libtasn1-doc_4.21.0-2_all.deb  Temporary failure resolving 'security.ubuntu.com'
E: Failed to fetch https://security.ubuntu.com/ubuntu/pool/main/u/unixodbc/unixodbc-dev_2.3.14-1_amd64v3.deb  Temporary failure resolving 'security.ubuntu.com'
E: Unable to fetch some archives, maybe run apt update or try with --fix-missing?
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
