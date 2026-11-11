<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8051 · **Generated:** 2026-11-11T06:45:44.706Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)", "Record E2E replay steps", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Cloud infrastructure Cleanup (`.github/workflows/cleanup.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42929583314 — dark (conclusion: `failure`), 2026-11-11 00:13 UTC
- Dark since: 2026-10-10 00:23 UTC (first run of the current streak)
- Job / step: `aws-nuke` → `Run AWS Nuke`
- Likely cause: time="2026-11-11T00:32:38Z" level=fatal msg=failed

<details><summary>End of the job log</summary>

```
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectExtra", CreateDate: "2024-11-08T04:19:21Z", Name: "DeployWebinyProjectExtra", P…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 3b26dcd1-efa6-43d1-b9fe-a11c1abece90
global - IAMPolicy - arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3 - [ARN: "arn:aws:iam::726952677045:policy/DeployWebinyProjectGroup3", CreateDate: "2024-11-28T06:06:51Z", Name: "DeployWebinyProjectGroup3"…
DeleteConflict: Cannot delete a policy attached to entities.
	status code: 409, request id: 3207679d-1741-48aa-947d-36336ca32c98
time="2026-11-11T00:32:38Z" level=fatal msg=failed
##[error]Process completed with exit code 1.
```

</details>

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42956582593 — dark (conclusion: `failure`), 2026-11-11 04:02 UTC
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
Waiting 17 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Record E2E replay steps (`.github/workflows/recordReplayCache.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42943095890 — dark (conclusion: `failure`), 2026-11-11 02:01 UTC
- Dark since: 2026-11-04 02:01 UTC (first run of the current streak)
- Job / step: `Record - Standalone (Postgres, WCP)` → `Build API and Admin`
- Likely cause: error: Rspack build failed.

<details><summary>End of the job log</summary>

```
c.mjs                                                  133.5 kB
1.mjs                                                  151.1 kB
3h.mjs                                                 195.0 kB
s7.mjs                                                1029.8 kB
handler.mjs                                           3158.5 kB
Total:                                                4787.5 kB
error: Rspack build failed.
##[error]Process completed with exit code 1.
```

</details>

### Push (`.github/workflows/push.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/42852349027 — dark (conclusion: `failure`), 2026-11-10 16:13 UTC
- Dark since: 2026-11-10 11:42 UTC (first run of the current streak)
- Job / step: `[DDB-OS,DDB] api-audit-logs` → `Install dependencies`
- Likely cause: ➤ YN0000: · Failed with errors in 37s 273ms

<details><summary>End of the job log</summary>

```
gyp ERR! node -v v24.22.2
gyp ERR! node-gyp -v v13.1.0
gyp ERR! $npm_package_name better-sqlite3
gyp ERR! $npm_package_version 13.0.3
gyp ERR! not ok
➤ YN0000: └ Completed in 35s 218ms
➤ YN0000: · Failed with errors in 37s 273ms
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
