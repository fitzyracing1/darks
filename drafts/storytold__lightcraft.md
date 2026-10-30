<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15094 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41059950908 — dark (conclusion: `failure`), 2026-10-30 13:02 UTC
- Dark since: 2026-10-30 13:02 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Download shard profiles and archive`
- Likely cause: Unable to download artifact(s): Unable to download and extract artifact: Artifact download failed after 5 retries.

<details><summary>End of the job log</summary>

```
Artifact download completed successfully.
SHA256 digest of downloaded artifact is 54b84ae30788138b2a69c43f9c82667a81f4b98cdace1ab5eabf769fe9d00e50
Artifact download completed successfully.
SHA256 digest of downloaded artifact is b0c308354cb471a19da7adfbf6c06912ca76cc3536d2fef287054f8a0921bc0c
Artifact download completed successfully.
SHA256 digest of downloaded artifact is 76bdbf1fca46b329065022611be22ef3cb73af419c35977193d4d7ee7d90d7b6
Artifact download completed successfully.
##[error]Unable to download artifact(s): Unable to download and extract artifact: Artifact download failed after 5 retries.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
