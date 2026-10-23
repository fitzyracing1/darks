<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 77631 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Security (`.github/workflows/security.yml`): [issue #4433](https://github.com/headroomlabs-ai/headroom/issues/4433) "BUG security-model.mdx says an unsafe x-headroom-base-url override is "ignored", but the proxy routes answer 400", [issue #4422](https://github.com/headroomlabs-ai/headroom/issues/4422) "DOCS security-model.mdx: network egress table omits two default-on pollers, and some counts and permission notes no longer match the code"

These workflows are left out of the body below.

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
