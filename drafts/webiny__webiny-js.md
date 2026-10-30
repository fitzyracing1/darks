<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8051 · **Generated:** 2026-10-30T18:36:41.749Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/40978570139 — dark (conclusion: `failure`), 2026-10-30 00:15 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-10-30T00:32:22Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 2fe9d590-f016-41c9-a944-9eedebc5d6ba
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 70651475-cb1c-4101-b505-d8f6503fb7bb
time="2026-10-30T00:32:22Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/41000655498 — dark (conclusion: `failure`), 2026-10-30 04:02 UTC
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
Waiting 10 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
