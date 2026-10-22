<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: resolved -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** resolved — lit again (2026-10-22); nothing to file
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15546 · **Generated:** 2026-10-22T12:57:28.437Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Maven Collate Tests", "Integration Tests - PostgreSQL + OpenSearch")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39775600481 — dark (conclusion: `failure`), 2026-10-22 12:05 UTC
- Dark since: 2026-10-22 11:23 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/39775666605

<details><summary>End of the job log</summary>

```
* maven-collate-om-ci (ID 119813845706)
  * Build Collate with Maven
X main OpenMetadata Collate Test open-metadata/openmetadata-collate#2548 · 39775666605
Triggered via workflow_dispatch about 31 minutes ago
JOBS
X maven-collate-om-ci in 22m44s (ID 119813845706)
  X Force workflow fail
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/39775666605
```

</details>

### Integration Tests - PostgreSQL + OpenSearch (`.github/workflows/integration-tests-postgres-opensearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/39771103962 — dark (conclusion: `failure`), 2026-10-22 11:30 UTC
- Dark since: 2026-10-22 11:30 UTC (first run of the current streak)
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
