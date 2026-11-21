<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15826 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("monitor-slack-link", "Merge Queue Dequeue Report", "security-scan")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### monitor-slack-link (`.github/workflows/monitor-slack-link.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44843874806 — dark (conclusion: `failure`), 2026-11-21 00:26 UTC
- Dark since: 2026-11-06 22:08 UTC (first run of the current streak)
- Job / step: `monitor-slack-link` → `Set up Python 3.9`
- Likely cause: The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.

<details><summary>End of the job log</summary>

```
Updating files:  99% (27269/27544)
Updating files: 100% (27544/27544)
Updating files: 100% (27544/27544), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
0b8b4e875530e3a6cf20cc5f1638d77bbd72c484
Version 3.9 was not found in the local cache
##[error]The version '3.9' with architecture 'x64' was not found for Ubuntu 26.04.
```

</details>

### Merge Queue Dequeue Report (`.github/workflows/merge-queue-dequeue-report.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44790707644 — dark (conclusion: `failure`), 2026-11-20 18:13 UTC
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

### security-scan (`.github/workflows/security-scan.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/44843531167 — dark (conclusion: `failure`), 2026-11-21 00:23 UTC
- Dark since: 2026-11-21 00:23 UTC (first run of the current streak)
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
