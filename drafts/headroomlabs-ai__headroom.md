<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 78158 · **Generated:** 2026-10-29T01:00:37.542Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "PR Governance" workflow getting cancelled on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PR Governance** workflow (`.github/workflows/pr-health.yml`) on `main` has been getting cancelled since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/40706275305 — dark (conclusion: `cancelled`), 2026-10-28 14:28 UTC
- Dark since: 2026-10-26 15:15 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4318
https://github.com/headroomlabs-ai/headroom/pull/4317
https://github.com/headroomlabs-ai/headroom/pull/4317
https://github.com/headroomlabs-ai/headroom/pull/4317
https://github.com/headroomlabs-ai/headroom/pull/4316
https://github.com/headroomlabs-ai/headroom/pull/4316
https://github.com/headroomlabs-ai/headroom/pull/4316
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
