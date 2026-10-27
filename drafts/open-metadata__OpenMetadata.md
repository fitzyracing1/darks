<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: ready -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15587 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Maven Collate Tests" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Maven Collate Tests** workflow (`.github/workflows/maven-build-collate.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/40402295247 — dark (conclusion: `failure`), 2026-10-26 21:11 UTC
- Dark since: 2026-10-26 19:11 UTC (first run of the current streak)
- Job / step: `maven-collate-ci` → `Trigger Collate build & wait`
- Likely cause: Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/40402361131

<details><summary>End of the job log</summary>

```
maven-collate-om-ci: .github#14
! This method or constructor is empty; @SneakyThrows has been ignored.
maven-collate-om-ci: .github#35
! This method or constructor is empty; @SneakyThrows has been ignored.
maven-collate-om-ci: .github#14
! Not generating isSupportsOwners(): A method with that name already exists
maven-collate-om-ci: .github#594
##[error]Collate run did not succeed: https://github.com/open-metadata/openmetadata-collate/actions/runs/40402361131
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
