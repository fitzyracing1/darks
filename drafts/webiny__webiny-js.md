<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8049 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)", "Record E2E replay steps", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42726493100 — dark (conclusion: `failure`), 2026-11-10 00:12 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-11-10T00:28:55Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 8e84b3d6-afcb-44b2-9fe5-35dde6cb85e8
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 8685c2e4-27bf-4701-ae50-ee44c3880193
time="2026-11-10T00:28:55Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42753240967 — dark (conclusion: `failure`), 2026-11-10 04:02 UTC
- Dark since: 2026-10-10 04:04 UTC (first run of the current streak)
- Job / step: `Cache dependencies and packages` → `Run actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09`
- Likely cause: The process '/usr/bin/git' failed with exit code 1

<details><summary>End of the job log</summary>

```
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/webiny-js/webiny-js/dev/.git/
The process '/usr/bin/git' failed with exit code 1
Waiting 17 seconds before trying again
The process '/usr/bin/git' failed with exit code 1
Waiting 18 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Record E2E replay steps (`.github/workflows/recordReplayCache.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42739844677 — dark (conclusion: `failure`), 2026-11-10 02:01 UTC
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
60e6f1eda5bfa9c2615f57a4e0cd85c7551c97c1
GraphQL: Your token has not been granted the required scopes to execute this query. The 'login' field requires one of the following scopes: ['read:org'], but your token has only been granted the: ['repo'] scopes. Please…
##[error]Process completed with exit code 1.
```

</details>

### Push (`.github/workflows/push.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42809622482 — dark (conclusion: `failure`), 2026-11-10 11:42 UTC
- Dark since: 2026-11-10 11:42 UTC (first run of the current streak)
- Job / step: `E2E (DDB+OS) - Project setup` → `E2E - run tests`
- Likely cause: Tests  1 failed | 2 passed | 1 skipped (4)

<details><summary>End of the job log</summary>

```
 Test Files  1 failed | 2 passed (3)
      Tests  1 failed | 2 passed | 1 skipped (4)
   Start at  11:57:53
   Duration  83.19s (1m 23s)
     Traces  .e2e/results/ (2 pages, trace.md in each test's directory)
      JUnit  .e2e/junit.xml
   Markdown  .e2e/summary.md
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
