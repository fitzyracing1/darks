<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143124 · **Generated:** 2026-10-21T18:50:03.780Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Update React" workflow failing on canary since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Update React** workflow (`.github/workflows/update_react.yml`) on `canary` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39638030890 — dark (conclusion: `failure`), 2026-10-21 16:48 UTC
- Dark since: 2026-10-21 16:48 UTC (first run of the current streak)
- Job / step: `create-pull-request` → `Create Pull Request`
- Likely cause: Error: GitHub API POST /repos/vercel/next.js/git/blobs failed (500): {"message": "Something went wrong on our side and we cannot service your request. Sorry about that. Please try resubmitting your request and contact u…

<details><summary>End of the job log</summary>

```
    at async createBlobForFile (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:107:16)
    at async /home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:159:23
    at async Promise.all (index 26)
    at async createTreeFromLocalCommit (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:139:16)
    at async replayLocalCommitsAsSigned (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:282:21)
    at async main (/home/runner/work/next.js/next.js/scripts/sync-react.js:760:41)
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
