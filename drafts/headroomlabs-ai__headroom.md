<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 80884 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("PR Governance", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/45634247270 — dark (conclusion: `cancelled`), 2026-11-25 14:27 UTC
- Dark since: 2026-11-25 14:27 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4913
https://github.com/headroomlabs-ai/headroom/pull/4908
https://github.com/headroomlabs-ai/headroom/pull/4908
https://github.com/headroomlabs-ai/headroom/pull/4908
https://github.com/headroomlabs-ai/headroom/pull/4908
https://github.com/headroomlabs-ai/headroom/pull/4906
https://github.com/headroomlabs-ai/headroom/pull/4906
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/45765973250 — dark (conclusion: `cancelled`), 2026-11-26 06:07 UTC
- Dark since: 2026-11-26 06:01 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
