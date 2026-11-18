<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 264226 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Docker Build, Test, and Publish (`.github/workflows/docker.yml`): [issue #155129](https://github.com/NousResearch/hermes-agent/issues/155129) "Docker Build, Test, and Publish on main stuck since Nov 5 — run 42066863849 holds the concurrency group (publish jobs waiting on never-evaluated container-publish deployments)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "auto-fix lint issues & formatting" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **auto-fix lint issues & formatting** workflow (`.github/workflows/js-autofix.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/44206662170 — dark (conclusion: `failure`), 2026-11-18 00:17 UTC
- Dark since: 2026-11-18 00:17 UTC (first run of the current streak)
- Job / step: `Apply patch` → `Apply patch and push to bot branch`
- Likely cause: error: failed to push some refs to 'https://github.com/NousResearch/hermes-agent'

<details><summary>End of the job log</summary>

```
Total of 1 artifact(s) downloaded
Download artifact has finished successfully
[main 4132b11ddde] fmt(js): `pnpm run fix` on merge
 650 files changed, 27392 insertions(+), 10752 deletions(-)
To https://github.com/NousResearch/hermes-agent
 ! [remote rejected]         HEAD -> bot/js-autofix (refusing to allow a GitHub App to create or update workflow `.github/workflows/README.md` without `workflows` permission)
error: failed to push some refs to 'https://github.com/NousResearch/hermes-agent'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
