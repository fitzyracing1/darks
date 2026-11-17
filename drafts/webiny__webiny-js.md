<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8053 · **Generated:** 2026-11-17T01:01:47.497Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)", "Record E2E replay steps", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/43985785612 — dark (conclusion: `failure`), 2026-11-17 00:12 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-11-17T00:29:15Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 10ac18a9-9584-4174-b201-004f89438322
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: c8c4d2ac-c63a-4a9b-8656-ba080959681d
time="2026-11-17T00:29:15Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/43801640820 — dark (conclusion: `failure`), 2026-11-16 04:02 UTC
- Dark since: 2026-10-10 04:04 UTC (first run of the current streak)
- Job / step: `Cache dependencies and packages` → `Run actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09`
- Likely cause: The process '/usr/bin/git' failed with exit code 1

<details><summary>End of the job log</summary>

```
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/webiny-js/webiny-js/dev/.git/
The process '/usr/bin/git' failed with exit code 1
Waiting 20 seconds before trying again
The process '/usr/bin/git' failed with exit code 1
Waiting 20 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Record E2E replay steps (`.github/workflows/recordReplayCache.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/43789640940 — dark (conclusion: `failure`), 2026-11-16 02:01 UTC
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
3cb652c199348a24a257fd03994f0843056cd56b
GraphQL: Your token has not been granted the required scopes to execute this query. The 'login' field requires one of the following scopes: ['read:org'], but your token has only been granted the: ['repo'] scopes. Please…
##[error]Process completed with exit code 1.
```

</details>

### Push (`.github/workflows/push.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/43972554087 — dark (conclusion: `failure`), 2026-11-16 22:42 UTC
- Dark since: 2026-11-12 21:06 UTC (first run of the current streak)
- Job / step: `E2E (DDB+OS) - Project setup` → `Deploy API`
- Likely cause: 5 errored

<details><summary>End of the job log</summary>

```
  aws:lambdaweb:Function (wby-graphql-web):
    error: [ERROR] operation error CloudControl: CreateResource, https response error StatusCode: 400, RequestID: 4f1367b1-fa29-4d3c-85e3-1ac4cffc8859, api error AccessDeniedException: User: arn:aws:sts::726952677045:as…
    error: operation error CloudControl:: operation error CloudControl: CreateResource, https response error StatusCode: 400, RequestID: 4f1367b1-fa29-4d3c-85e3-1ac4cffc8859, api error AccessDeniedException: User: arn:a…
Resources:
    + 12 created
    5 errored
Duration: 10s
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
