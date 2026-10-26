<!-- dark-draft: google-gemini/gemini-cli -->
<!-- draft-state: ready -->
# Upstream issue draft: google-gemini/gemini-cli

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/google-gemini/gemini-cli/issues/new
- **Stars:** 108548 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Label Workstream Rollup", "Gemini Scheduled PR Triage 🚀")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### 📋 Gemini Scheduled Issue Triage (`.github/workflows/gemini-scheduled-issue-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40376488581 — dark (conclusion: `failure`), 2026-10-26 18:17 UTC
- Dark since: 2026-10-26 17:10 UTC (first run of the current streak)
- Job / step: `triage-issues` → `Sync Issue Types`
- Likely cause: Failed to sync issue types: <!DOCTYPE html>

<details><summary>End of the job log</summary>

```
Service restarts being deferred:
 systemctl restart hosted-compute-agent.service
No containers need to be restarted.
No user sessions are running outdated binaries.
No VM guests are running outdated hypervisor (qemu) binaries on this host.
🚀 Current CLI Version: 0.67.0
Inputs 'owner' and 'repositories' are not set. Creating token for this repository (google-gemini/gemini-cli).
##[error]Failed to sync issue types: <!DOCTYPE html>
```

</details>

### Label Workstream Rollup (`.github/workflows/label-workstream-rollup.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40377396341 — dark (conclusion: `failure`), 2026-10-26 18:24 UTC
- Dark since: 2026-10-26 18:24 UTC (first run of the current streak)
- Job / step: `labeler` → `Check for Parent Workstream and Apply Label`
- Likely cause: Workflow failed: <!DOCTYPE html>

<details><summary>End of the job log</summary>

```
    request: {
      agent: [Agent],
      fetch: [Function: proxyFetch],
      hook: [Function: bound bound register]
    }
  }
}
##[error]Workflow failed: <!DOCTYPE html>
```

</details>

### Gemini Scheduled PR Triage 🚀 (`.github/workflows/gemini-scheduled-pr-triage.yml`)

- Latest run on `main`: https://github.com/google-gemini/gemini-cli/actions/runs/40377898757 — dark (conclusion: `failure`), 2026-10-26 18:27 UTC
- Dark since: 2026-10-26 18:27 UTC (first run of the current streak)
- Job / step: `audit-prs` → `Run PR Triage Script`
- Likely cause: ❌ Failed to fetch PR list

<details><summary>End of the job log</summary>

```
 * [new ref]         a2e7ef025792619b450fab177b2c71f4e8efaa87 -> origin/main
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
a2e7ef025792619b450fab177b2c71f4e8efaa87
Inputs 'owner' and 'repositories' are not set. Creating token for this repository (google-gemini/gemini-cli).
📥 Getting all open pull requests...
❌ Failed to fetch PR list
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gemini-cli!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
