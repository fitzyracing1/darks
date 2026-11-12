<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: resolved -->
# Upstream issue draft: microsoft/vscode

- **Status:** resolved — lit again (2026-11-12); nothing to file
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 195249 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL", "Code OSS (workspace images)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/43077349432 — dark (conclusion: `cancelled`), 2026-11-11 18:23 UTC
- Dark since: 2026-11-11 12:18 UTC (first run of the current streak)
- Likely cause: run cancelled

### Code OSS (workspace images) (`.github/workflows/pr-workspace-images.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/43042060408 — dark (conclusion: `cancelled`), 2026-11-11 14:48 UTC
- Dark since: 2026-11-11 14:48 UTC (first run of the current streak)
- Job / step: `Linux` → `Install build tools`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
W: Some index files failed to download. They have been ignored, or old ones used instead.
...retry 17
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Hit:6 https://packages.microsoft.com/ubuntu/24.04/prod noble InRelease
Ign:2 http://azure.archive.ubuntu.com/ubuntu noble InRelease
Ign:3 http://azure.archive.ubuntu.com/ubuntu noble-updates InRelease
Ign:4 http://azure.archive.ubuntu.com/ubuntu noble-backports InRelease
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
