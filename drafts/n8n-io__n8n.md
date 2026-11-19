<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 211379 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "CI: Master (Build, Test, Lint)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44522255073 — dark (conclusion: `skipped`), 2026-11-19 12:15 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/44518490145 — dark (conclusion: `failure`), 2026-11-19 11:51 UTC
- Dark since: 2026-11-19 11:36 UTC (first run of the current streak)
- Job / step: `Unit tests (26.13.0) / Nodes Unit Tests` → `Test Nodes`
- Likely cause: command (/home/runner/_work/n8n/n8n/packages/nodes-base) /home/runner/setup-pnpm/pnpm run test --maxWorkers=100% exited (1)

<details><summary>End of the job log</summary>

```
     ✓ describes the simplified messages by default 1ms
     ✓ describes the full messages when Simplify is off 0ms
     ✓ does not describe parsed text fields, because the body stays encoded 0ms
     ✓ get.json (2)
       ✓ describes a message at the root, because the default returns one message for each item 0ms
       ✓ describes the thread envelope for Return Only Messages off 0ms
     ✓ get.simple-false.json (2)
##[error]command (/home/runner/_work/n8n/n8n/packages/nodes-base) /home/runner/setup-pnpm/pnpm run test --maxWorkers=100% exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
