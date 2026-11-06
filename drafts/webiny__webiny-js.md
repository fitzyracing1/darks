<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8049 · **Generated:** 2026-11-06T12:41:11.038Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)", "Record E2E replay steps")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42135207362 — dark (conclusion: `failure`), 2026-11-06 00:13 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-11-06T00:32:34Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: c2bf381f-e4f0-4577-814b-eaf4fff39344
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 50f72273-0d76-4ff8-ab8a-7d6845d8c365
time="2026-11-06T00:32:34Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42160073285 — dark (conclusion: `failure`), 2026-11-06 04:02 UTC
- Dark since: 2026-10-10 04:04 UTC (first run of the current streak)
- Job / step: `Cache dependencies and packages` → `Run actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09`
- Likely cause: The process '/usr/bin/git' failed with exit code 1

<details><summary>End of the job log</summary>

```
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/webiny-js/webiny-js/dev/.git/
The process '/usr/bin/git' failed with exit code 1
Waiting 19 seconds before trying again
The process '/usr/bin/git' failed with exit code 1
Waiting 12 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Record E2E replay steps (`.github/workflows/recordReplayCache.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42147674400 — dark (conclusion: `failure`), 2026-11-06 02:01 UTC
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
b73f920f0d4a2d1d67750267ea7e4740013c3dd7
GraphQL: Your token has not been granted the required scopes to execute this query. The 'login' field requires one of the following scopes: ['read:org'], but your token has only been granted the: ['repo'] scopes. Please…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
