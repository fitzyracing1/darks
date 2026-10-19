<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143099 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Update React" workflow failing on canary since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Update React** workflow (`.github/workflows/update_react.yml`) on `canary` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/39288531682 — dark (conclusion: `failure`), 2026-10-19 16:48 UTC
- Dark since: 2026-10-19 16:48 UTC (first run of the current streak)
- Job / step: `create-pull-request` → `Create Pull Request`
- Likely cause: Error: GitHub API PATCH /repos/vercel/next.js/git/refs/heads/update/react/19.3.0-canary-ba39b32a-20261019 failed (422): {"message":"Update is not a fast forward","documentation_url":"https://docs.github.com/rest/git/ref…

<details><summary>End of the job log</summary>

```
[16:49:46] Finished ncc in 41.07s
Error: GitHub API PATCH /repos/vercel/next.js/git/refs/heads/update/react/19.3.0-canary-ba39b32a-20261019 failed (422): {"message":"Update is not a fast forward","documentation_url":"https://docs.github.com/rest/git/ref…
    at githubRequest (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:24:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async upsertBranchRef (/home/runner/work/next.js/next.js/scripts/github-utils/signed-commit.js:339:5)
    at async main (/home/runner/work/next.js/next.js/scripts/sync-react.js:771:5)
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
