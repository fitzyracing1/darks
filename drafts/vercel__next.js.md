<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143506 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Trigger Release" workflow failing on canary since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Trigger Release** workflow (`.github/workflows/trigger_release.yml`) on `canary` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/43525886227 — dark (conclusion: `failure`), 2026-11-13 23:16 UTC
- Dark since: 2026-11-13 23:16 UTC (first run of the current streak)
- Job / step: `start` → `Run node ./scripts/start-release.js --release-type "${INPUT_RELEASETYPE}" --semver-type "${INPUT_SEMVERTYPE}"`
- Likely cause: Error: GitHub API POST /repos/vercel/next.js/git/trees failed (422): {"message":"Sorry, your request timed out.  It's likely that your input was too large to process.  Consider building the tree incrementally, or buildi…

<details><summary>End of the job log</summary>

```
    at githubRequest (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:24:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async createTreeFromLocalCommit (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:176:23)
    at async replayLocalCommitsAsSigned (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:282:21)
    at async createGitHubReleaseCommit (/home/runner/work/next.js/next.js/scripts/release-github-api.js:127:38)
    at async main (/home/runner/work/next.js/next.js/scripts/start-release.js:241:42)
Node.js v20.20.2
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
