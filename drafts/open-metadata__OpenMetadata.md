<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15581 · **Generated:** 2026-10-26T07:12:58.531Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish Package to Maven Central Repository", "Populate Playwright CI caches")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Package to Maven Central Repository (`.github/workflows/publish-maven-package.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40281410107 — dark (conclusion: `failure`), 2026-10-26 06:42 UTC
- Dark since: 2026-10-26 06:42 UTC (first run of the current streak)
- Job / step: `publish-maven-packages` → `Publish to Central Repository`
- Likely cause: [ERROR]   mvn <args> -rf :openmetadata-java-client

<details><summary>End of the job log</summary>

```
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException
[ERROR]
[ERROR] After correcting the problems, you can resume the build with the command
[ERROR]   mvn <args> -rf :openmetadata-java-client
##[error]Process completed with exit code 1.
```

</details>

### Populate Playwright CI caches (`.github/workflows/populate-playwright-caches.yml`)

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40282359942 — dark (conclusion: `cancelled`), 2026-10-26 06:52 UTC
- Dark since: 2026-10-26 06:52 UTC (first run of the current streak)
- Job / step: `warm-fixture / gate`
- Likely cause: run cancelled in job "warm-fixture / gate"

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
