<!-- dark-draft: webiny/webiny-js -->
<!-- draft-state: ready -->
# Upstream issue draft: webiny/webiny-js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webiny/webiny-js/issues/new
- **Stars:** 8056 · **Generated:** 2026-11-24T18:40:09.799Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on next ("Rebuild Global Cache ("dev" branch)", "Record E2E replay steps", "Push")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `next` have been dark recently. Details below, in case they're useful:

### Rebuild Global Cache ("dev" branch) (`.github/workflows/rebuildGlobalCacheDev.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/45323559072 — dark (conclusion: `failure`), 2026-11-24 04:02 UTC
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
Waiting 11 seconds before trying again
##[error]The process '/usr/bin/git' failed with exit code 1
```

</details>

### Record E2E replay steps (`.github/workflows/recordReplayCache.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/45309306968 — dark (conclusion: `failure`), 2026-11-24 02:01 UTC
- Dark since: 2026-11-04 02:01 UTC (first run of the current streak)
- Job / step: `Record - Standalone (Postgres, WCP)` → `AI E2E - run tests`
- Likely cause: ASSERTION_FAILED: expect.toBeDisabled failed

<details><summary>End of the job log</summary>

```
               trace .e2e/results/publishguard-a-draft-under-a-workflow-is-not-807723b78dc6eb49/trace.md
             ×  admin  tests/workflows/rejectAndCancel.e2e.ts:145 > a review is rejected or cancelled in the entry form > the author sees the rejection and cannot request again
               ASSERTION_FAILED: expect.toBeDisabled failed
               trace .e2e/results/rejectandcancel-a-review-is-rejected-or-c5387d9d9a33c059/trace.md
             ×  admin  tests/workflows/reviewLifecycle.e2e.ts:96 > a review runs from request to publish > the author requests a review in the entry form
               LOCATOR_NOT_FOUND: locator matched no nodes within locator("[data-role=\"review-bar\"]") >> getByRole("button", name: "Request review")
               trace .e2e/results/reviewlifecycle-a-review-runs-from-request-to-7217232a3f9a69a4/trace.md
##[error]Process completed with exit code 1.
```

</details>

### Push (`.github/workflows/push.yml`)

- Latest run on `next`: https://github.com/webiny/webiny-js/actions/runs/45401366967 — dark (conclusion: `failure`), 2026-11-24 13:14 UTC
- Dark since: 2026-11-20 14:34 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining webiny-js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
