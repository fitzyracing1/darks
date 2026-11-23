<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91073 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Umami Storage Monitor" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Umami Storage Monitor** workflow (`.github/workflows/umami-storage-monitor.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45090615736 — dark (conclusion: `failure`), 2026-11-23 00:45 UTC
- Dark since: 2026-11-22 17:46 UTC (first run of the current streak)
- Job / step: `monitor` → `Check the retention runner is retiring rows`
- Likely cause: HISTORY_WINDOW_SATURATED: none of the 1000 records read reached a running state (1000 were SKIPPED refusals) and the read filled its 1000-record window, so the deployment that decides health is older than the window rather than absent — wid

<details><summary>End of the job log</summary>

```
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is 70d6e1688e30b7f5af75ca6897ae44609c287269f6437641dac67a196a7ef92d
Finalizing artifact upload
Artifact umami-storage-state.zip successfully finalized. Artifact ID 14780649737
Artifact umami-storage-state has been successfully uploaded! Final size is 2712 bytes. Artifact ID is 14780649737
Artifact download URL: https://github.com/koala73/worldmonitor/actions/runs/45090615736/artifacts/14780649737
Umami retention runner HISTORY_WINDOW_SATURATED: none of the 1000 records read reached a running state (1000 were SKIPPED refusals) and the read filled its 1000-record window, so the deployment that decides health is ol…
##[error]HISTORY_WINDOW_SATURATED: none of the 1000 records read reached a running state (1000 were SKIPPED refusals) and the read filled its 1000-record window, so the deployment that decides health is older than the w…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
