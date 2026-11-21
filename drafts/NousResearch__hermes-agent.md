<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 264989 · **Generated:** 2026-11-21T00:52:59.041Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Docker Build, Test, and Publish (`.github/workflows/docker.yml`): [issue #155129](https://github.com/NousResearch/hermes-agent/issues/155129) "Docker Build, Test, and Publish on main stuck since Nov 5 — run 42066863849 holds the concurrency group (publish jobs waiting on never-evaluated container-publish deployments)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Site" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Site** workflow (`.github/workflows/deploy-site.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/44840950877 — dark (conclusion: `failure`), 2026-11-21 00:01 UTC
- Dark since: 2026-11-20 17:28 UTC (first run of the current streak)
- Job / step: `deploy-docs` → `Deploy to GitHub Pages`
- Likely cause: Error: No artifacts named "github-pages" were found for this workflow run. Ensure artifacts are uploaded with actions/upload-artifact@v4 or later.

<details><summary>End of the job log</summary>

```
Artifact github-pages has been successfully uploaded! Final size is 135889097 bytes. Artifact ID is 14680542559
Artifact download URL: https://github.com/NousResearch/hermes-agent/actions/runs/44840950877/artifacts/14680542559
##[end-action id=__actions_upload-pages-artifact.upload-artifact;outcome=success;conclusion=success;duration_ms=6001]
(node:4390) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Fetching artifact metadata for "github-pages" in this workflow run
Found 0 artifact(s)
##[error]Fetching artifact metadata failed. Is githubstatus.com reporting issues with API requests, Pages, or Actions? Please re-run the deployment at a later time.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
