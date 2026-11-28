<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8060 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on next ("Rebuild Global Cache ("dev" branch)", "Record E2E replay steps", "Push")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/45937571737 — dark (conclusion: `failure`), 2026-11-27 04:02 UTC
- Dark since: 2026-10-10 04:04 UTC (first run of the current streak)
- Job / step: `Cache dependencies and packages` → `Run actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09`
- Likely cause: The process '/usr/bin/git' failed with exit code 1

<details><summary>End of the job log</summary>

```
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/webiny-js/webiny-js/dev/.git/
The process '/usr/bin/git' failed with exit code 1
Waiting 11 seconds before trying again
The process '/usr/bin/git' failed with exit code 1
Waiting 13 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Record E2E replay steps (`.github/workflows/recordReplayCache.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/45925872694 — dark (conclusion: `failure`), 2026-11-27 02:01 UTC
- Dark since: 2026-11-04 02:01 UTC (first run of the current streak)
- Job / step: `Open the replay recordings PR` → `Commit recordings and open the PR`
- Likely cause: GraphQL: Your token has not been granted the required scopes to execute this query. The 'login' field requires one of the following scopes: ['read:org'], but your token has only been granted the: ['repo'] scopes. Please…

<details><summary>End of the job log</summary>

```
From https://github.com/webiny/webiny-js
 * [new branch]        next       -> origin/next
  origin/next
Switched to a new branch 'next'
branch 'next' set up to track 'origin/next'.
a06e3c3ff0444c79960d4d403e417e5c153fd446
GraphQL: Your token has not been granted the required scopes to execute this query. The 'login' field requires one of the following scopes: ['read:org'], but your token has only been granted the: ['repo'] scopes. Please…
##[error]Process completed with exit code 1.
```

</details>

### Push (`.github/workflows/push.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/46020087202 — dark (conclusion: `failure`), 2026-11-27 14:54 UTC
- Dark since: 2026-11-20 14:34 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
