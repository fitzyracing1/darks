<!-- dark-draft: langgenius/dify -->
<!-- draft-state: ready -->
# Upstream issue draft: langgenius/dify

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/langgenius/dify/issues/new
- **Stars:** 160343 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build and Push API & Web" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build and Push API & Web** workflow (`.github/workflows/build-push.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/langgenius/dify/actions/runs/41665007015 — dark (conclusion: `failure`), 2026-11-03 15:32 UTC
- Dark since: 2026-11-03 15:32 UTC (first run of the current streak)
- Job / step: `build (build-agent-amd64, DIFY_AGENT_IMAGE_NAME, agent, {{defaultContext}}, dify-agent/Dockerfile...`
- Likely cause: The job was not acquired by Runner of type self-hosted even after multiple attempts

If this is already known or expected, feel free to close. Thanks for maintaining dify!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
