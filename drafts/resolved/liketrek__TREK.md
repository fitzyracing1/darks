<!-- dark-draft: liketrek/TREK -->
<!-- draft-state: resolved -->
# Upstream issue draft: liketrek/TREK

- **Status:** resolved — lit again (2026-11-24); nothing to file
- **Would be filed at:** https://github.com/liketrek/TREK/issues/new
- **Stars:** 15913 · **Generated:** 2026-11-24T06:47:07.198Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Close issues with unchanged bad titles" workflow failing on main since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Close issues with unchanged bad titles** workflow (`.github/workflows/close-stale-invalid-titles.yml`) on `main` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/liketrek/TREK/actions/runs/45338558569 — dark (conclusion: `failure`), 2026-11-24 06:11 UTC
- Dark since: 2026-11-24 06:11 UTC (first run of the current streak)
- Job / step: `close-stale` → `Set up job`
- Likely cause: Failed to download archive 'https://codeload.github.com/actions/github-script/tar.gz/3a2844b7e9c422d3c10d287c895573f7108da1b3' after 3 attempts.

<details><summary>End of the job log</summary>

```
Prepare all required actions
Getting action download info
Download action repository 'actions/github-script@v9' (SHA:3a2844b7e9c422d3c10d287c895573f7108da1b3)
##[warning]Failed to download action 'https://codeload.github.com/actions/github-script/tar.gz/3a2844b7e9c422d3c10d287c895573f7108da1b3'. Error: The request was canceled due to the configured HttpClient.Timeout of 100 s…
##[warning]Back off 27.332 seconds before retry.
##[warning]Failed to download action 'https://codeload.github.com/actions/github-script/tar.gz/3a2844b7e9c422d3c10d287c895573f7108da1b3'. Error: The request was canceled due to the configured HttpClient.Timeout of 100 s…
##[warning]Back off 16.86 seconds before retry.
##[error]Action 'https://codeload.github.com/actions/github-script/tar.gz/3a2844b7e9c422d3c10d287c895573f7108da1b3' download has timed out. Error: The request was canceled due to the configured HttpClient.Timeout of 100…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TREK!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
