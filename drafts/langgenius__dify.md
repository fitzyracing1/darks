<!-- dark-draft: langgenius/dify -->
<!-- draft-state: ready -->
# Upstream issue draft: langgenius/dify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 159827 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build and Push API & Web" workflow getting cancelled on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build and Push API & Web** workflow (`.github/workflows/build-push.yml`) on `main` has been getting cancelled since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/40726898288 — dark (conclusion: `cancelled`), 2026-10-28 16:32 UTC
- Dark since: 2026-10-28 16:32 UTC (first run of the current streak)
- Job / step: `create-manifest (merge-web-images, DIFY_WEB_IMAGE_NAME, web)` → `Set up job`
- Likely cause: Step canceled by GitHub (see: https://depot.dev/docs/github-actions/troubleshooting#error-step-canceled-by-github)

<details><summary>End of the job log</summary>

```
Statuses: write
VulnerabilityAlerts: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Getting action download info
##[error]Step canceled by GitHub (see: https://depot.dev/docs/github-actions/troubleshooting#error-step-canceled-by-github)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
