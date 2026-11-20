<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15823 · **Generated:** 2026-11-20T12:41:20.099Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "Maven Collate Tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44734190156 — dark (conclusion: `failure`), 2026-11-20 12:14 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27257/27532)
Updating files: 100% (27532/27532)
Updating files: 100% (27532/27532), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
e19a162637fb2db86707f5c163191859d982e7d3
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44731925241 — dark (conclusion: `failure`), 2026-11-20 11:58 UTC
- Dark since: 2026-11-20 04:54 UTC (first run of the current streak)
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

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44714981886 — dark (conclusion: `failure`), 2026-11-20 09:56 UTC
- Dark since: 2026-11-20 09:56 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44714993517

<details><summary>End of the job log</summary>

```
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: maven-collate-ci
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/44714993517
failed to get run: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/44714993517?exclude_pull_requests=true)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/44714993517
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
