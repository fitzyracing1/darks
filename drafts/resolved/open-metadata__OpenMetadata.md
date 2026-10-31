<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: resolved -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** resolved — lit again (2026-10-31); nothing to file
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15637 · **Generated:** 2026-10-31T12:37:42.482Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Integration Tests - MySQL + Elasticsearch", "Populate Playwright CI caches")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Integration Tests - MySQL + Elasticsearch (`.github/workflows/integration-tests-mysql-elasticsearch.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41188587799 — dark (conclusion: `failure`), 2026-10-31 09:24 UTC
- Dark since: 2026-10-30 20:04 UTC (first run of the current streak)
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

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41200366231 — dark (conclusion: `cancelled`), 2026-10-31 12:16 UTC
- Dark since: 2026-10-31 12:16 UTC (first run of the current streak)
- Job / step: `warm-fixture / gate`
- Likely cause: run cancelled in job "warm-fixture / gate"

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
