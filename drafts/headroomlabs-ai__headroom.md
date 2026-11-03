<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 78722 · **Generated:** 2026-11-03T18:36:41.394Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("PR Governance", "Init E2E")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/41653745421 — dark (conclusion: `cancelled`), 2026-11-03 14:26 UTC
- Dark since: 2026-10-29 14:29 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4511
https://github.com/headroomlabs-ai/headroom/pull/4511
https://github.com/headroomlabs-ai/headroom/pull/4511
https://github.com/headroomlabs-ai/headroom/pull/4510
https://github.com/headroomlabs-ai/headroom/pull/4510
https://github.com/headroomlabs-ai/headroom/pull/4510
https://github.com/headroomlabs-ai/headroom/pull/4510
##[error]The operation was canceled.
```

</details>

### Init E2E (`.github/workflows/init-e2e.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/41656818573 — dark (conclusion: `cancelled`), 2026-11-03 14:45 UTC
- Dark since: 2026-11-03 14:45 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
