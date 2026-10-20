<!-- dark-draft: langgenius/dify -->
<!-- draft-state: ready -->
# Upstream issue draft: langgenius/dify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 158937 · **Generated:** 2026-10-20T01:11:13.117Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Post-Merge Checks" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Post-Merge Checks** workflow (`.github/workflows/post-merge.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/39277572893 — dark (conclusion: `failure`), 2026-10-19 15:23 UTC
- Dark since: 2026-10-19 13:10 UTC (first run of the current streak)
- Job / step: `External Runtime E2E / Web Full-Stack E2E` → `Run prepared and external runtime E2E tests`
- Likely cause: 378 steps (377 passed, 1 failed)

<details><summary>End of the job log</summary>

```
 Container docker-ssrf_proxy-1  Removing
 Container docker-ssrf_proxy-1  Removed
 Container docker-sandbox-1  Removed
 Network docker_default  Removing
 Network docker_ssrf_proxy_network  Removing
 Network docker_ssrf_proxy_network  Removed
 Network docker_default  Removed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
