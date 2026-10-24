<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: resolved -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** resolved — lit again (2026-10-24); nothing to file
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 77688 · **Generated:** 2026-10-24T12:48:18.474Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "PR Governance" workflow getting cancelled on main since 2026-10-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PR Governance** workflow (`.github/workflows/pr-health.yml`) on `main` has been getting cancelled since 2026-10-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/39971049012 — dark (conclusion: `cancelled`), 2026-10-23 14:36 UTC
- Dark since: 2026-10-12 14:43 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4301
https://github.com/headroomlabs-ai/headroom/pull/4301
https://github.com/headroomlabs-ai/headroom/pull/4300
https://github.com/headroomlabs-ai/headroom/pull/4300
https://github.com/headroomlabs-ai/headroom/pull/4300
https://github.com/headroomlabs-ai/headroom/pull/4300
https://github.com/headroomlabs-ai/headroom/pull/4298
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
