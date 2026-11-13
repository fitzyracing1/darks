<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 79566 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Security (`.github/workflows/security.yml`): [issue #4433](https://github.com/headroomlabs-ai/headroom/issues/4433) "BUG security-model.mdx says an unsafe x-headroom-base-url override is "ignored", but the proxy routes answer 400", [issue #4783](https://github.com/headroomlabs-ai/headroom/issues/4783) "BUG Several security-related tests cannot catch the defect they describe (loopback gating, rate-limit key, bypass header, CORS, upstream sweep, trust_remote_code scan, live marker)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "PR Governance" workflow getting cancelled on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **PR Governance** workflow (`.github/workflows/pr-health.yml`) on `main` has been getting cancelled since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/43442791010 — dark (conclusion: `cancelled`), 2026-11-13 14:26 UTC
- Dark since: 2026-11-09 14:26 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/3952
https://github.com/headroomlabs-ai/headroom/pull/3952
https://github.com/headroomlabs-ai/headroom/pull/3952
https://github.com/headroomlabs-ai/headroom/pull/3917
https://github.com/headroomlabs-ai/headroom/pull/3917
https://github.com/headroomlabs-ai/headroom/pull/3917
https://github.com/headroomlabs-ai/headroom/pull/3917
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
