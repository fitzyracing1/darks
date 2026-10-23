<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8048 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/39877537695 — dark (conclusion: `failure`), 2026-10-23 00:20 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-10-23T00:39:38Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 08576fdd-908c-4117-8da4-063eb27d22a9
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 7c093327-9ec6-4915-be06-d1ad556d9912
time="2026-10-23T00:39:38Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/39720219264 — dark (conclusion: `failure`), 2026-10-22 04:03 UTC
- Dark since: 2026-10-10 04:04 UTC (first run of the current streak)
- Job / step: `Cache dependencies and packages` → `Run actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09`
- Likely cause: The process '/usr/bin/git' failed with exit code 1

<details><summary>End of the job log</summary>

```
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/webiny-js/webiny-js/dev/.git/
The process '/usr/bin/git' failed with exit code 1
Waiting 18 seconds before trying again
The process '/usr/bin/git' failed with exit code 1
Waiting 15 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
