<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 15108 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/41119510704 — dark (conclusion: `failure`), 2026-10-30 19:58 UTC
- Dark since: 2026-10-30 13:02 UTC (first run of the current streak)
- Job / step: `sonarcloud / Tests 5/8` → `Run actions/download-artifact@9000827ccba6bdab643e8b6fd33ac0654aef8333`
- Likely cause: Unable to download artifact(s): Unable to download and extract artifact: Artifact download failed after 5 retries.

<details><summary>End of the job log</summary>

```
##[start-action display=Run Set-StrictMode -Version Latest;id=__taiki-e_install-action.__run_2]
##[end-action id=__taiki-e_install-action.__run_2;outcome=skipped;conclusion=skipped;duration_ms=0]
Downloading single artifact
Preparing to download the following artifacts:
- nextest-archive (ID: 13007353675, Size: 694289096, Expected Digest: sha256:351dc27cc1971611d204eef9bd355a08d4fabba89ebaf7253a728046064f7595)
Redirecting to blob download url: https://productionresultssa4.blob.core.windows.net/actions-results/fb92a22e-1693-844f-a617-1f5c853095c6/workflow-job-run-0eb5797a-18c3-545f-b359-b4128a0e540a/artifacts/4b5b8a5fdfcb62a86…
Starting download of artifact to: /home/runner/work/lightcraft/lightcraft/archive
##[error]Unable to download artifact(s): Unable to download and extract artifact: Artifact download failed after 5 retries.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
