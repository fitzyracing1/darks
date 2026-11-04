<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15675 · **Generated:** 2026-11-04T06:44:24.955Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Maven Collate Tests", "Merge Queue Dequeue Report")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Maven Collate Tests (`.github/workflows/maven-build-collate.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41785793706 — dark (conclusion: `failure`), 2026-11-04 06:28 UTC
- Dark since: 2026-11-03 21:06 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/41785830745

<details><summary>End of the job log</summary>

```
/home/runner/work/_temp/git-credentials-35c72e62-35fd-404b-8ff6-42e7e811b5cb.config
/home/runner/work/_temp/git-credentials-35c72e62-35fd-404b-8ff6-42e7e811b5cb.config
/github/runner_temp/git-credentials-35c72e62-35fd-404b-8ff6-42e7e811b5cb.config
/github/runner_temp/git-credentials-35c72e62-35fd-404b-8ff6-42e7e811b5cb.config
Removing credentials config '/home/runner/work/_temp/git-credentials-35c72e62-35fd-404b-8ff6-42e7e811b5cb.config'
Collate run: https://github.com/open-metadata/openmetadata-collate/actions/runs/41785830745
failed to get jobs: HTTP 404: Not Found (https://api.github.com/repos/open-metadata/openmetadata-collate/actions/runs/41785830745/jobs?per_page=100)
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/41785830745
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41785793539 — dark (conclusion: `failure`), 2026-11-04 06:28 UTC
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

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
