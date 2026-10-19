<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8047 · **Generated:** 2026-10-19T12:57:18.356Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)", "Push")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/39180428638 — dark (conclusion: `failure`), 2026-10-19 00:21 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-10-19T00:24:30Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: bfd3613c-ceb6-4b83-8d85-c7d404e5fa3b
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: dc1b745e-870d-4719-a110-294f9f2b3610
time="2026-10-19T00:24:30Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/39197594698 — dark (conclusion: `failure`), 2026-10-19 04:03 UTC
- Dark since: 2026-10-10 04:04 UTC (first run of the current streak)
- Job / step: `Cache dependencies and packages` → `Run actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09`
- Likely cause: The process '/usr/bin/git' failed with exit code 1

<details><summary>End of the job log</summary>

```
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/webiny-js/webiny-js/dev/.git/
The process '/usr/bin/git' failed with exit code 1
Waiting 14 seconds before trying again
The process '/usr/bin/git' failed with exit code 1
Waiting 15 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Push (`.github/workflows/push.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/39247590695 — dark (conclusion: `failure`), 2026-10-19 11:50 UTC
- Dark since: 2026-10-14 08:22 UTC (first run of the current streak)
- Job / step: `[DDB] webhooks` → `Run tests`
- Likely cause: AssertionError: expected 999 to be greater than or equal to 1000 (v6/packages/webhooks/__tests__/WebhookDeliver.test.ts:92)

<details><summary>End of the job log</summary>

```
     93|     });
     94|
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 23 passed (24)
      Tests  1 failed | 138 passed (139)
   Start at  11:56:30
   Duration  57.85s (transform 3.74s, setup 30.05s, import 3.90s, tests 22.07s, environment 1ms)
##[error]AssertionError: expected 999 to be greater than or equal to 1000
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
