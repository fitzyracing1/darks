<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15777 · **Generated:** 2026-11-14T18:37:03.336Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Maven Collate Tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43617741453 — dark (conclusion: `failure`), 2026-11-14 16:49 UTC
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

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43625108506 — dark (conclusion: `failure`), 2026-11-14 18:10 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27379/27655)
Updating files: 100% (27655/27655)
Updating files: 100% (27655/27655), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
b03472028fbf28fbd1f8616875617c263aae08dc
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/43617741588 — dark (conclusion: `failure`), 2026-11-14 16:49 UTC
- Dark since: 2026-11-14 16:49 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43617747496

<details><summary>End of the job log</summary>

```
* maven-collate-om-ci (ID 132516428483)
  * Integration Tests (MySQL + Elasticsearch)
X main OpenMetadata Collate Test open-metadata/openmetadata-collate#2548 · 43617747496
Triggered via workflow_dispatch about 49 minutes ago
JOBS
X maven-collate-om-ci in 47m31s (ID 132516428483)
  X Force workflow fail
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/43617747496
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
