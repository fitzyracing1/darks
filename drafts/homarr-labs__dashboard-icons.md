<!-- dark-draft: homarr-labs/dashboard-icons -->
<!-- draft-state: ready -->
# Upstream issue draft: homarr-labs/dashboard-icons

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/homarr-labs/dashboard-icons/issues/new
- **Stars:** 9179 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Main CI" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Main CI** workflow (`.github/workflows/docker.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/homarr-labs/dashboard-icons/actions/runs/45614185609 — dark (conclusion: `failure`), 2026-11-25 12:29 UTC
- Dark since: 2026-11-25 12:24 UTC (first run of the current streak)
- Job / step: `build-and-push` → `Deploy PocketBase and wait for migrations`
- Likely cause: Deployment incomplete. Check backend startup/schema verification before retrying the frontend rollout.

<details><summary>End of the job log</summary>

```
file:///home/runner/work/dashboard-icons/dashboard-icons/web/scripts/deploy-pocketbase.mjs:96
			if (consecutiveFailures >= 3) throw new Error("Deployment status could not be confirmed after 3 consecutive failures; inspect Dokploy")
			                                    ^
Error: Deployment status could not be confirmed after 3 consecutive failures; inspect Dokploy
    at file:///home/runner/work/dashboard-icons/dashboard-icons/web/scripts/deploy-pocketbase.mjs:96:40
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
Node.js v24.22.3
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dashboard-icons!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
