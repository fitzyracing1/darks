<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 79614 · **Generated:** 2026-11-14T06:41:55.262Z
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

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/43560783121 — dark (conclusion: `failure`), 2026-11-14 05:17 UTC
- Dark since: 2026-11-14 05:15 UTC (first run of the current streak)
- Job / step: `test (3)` → `Run test shard 3/4`
- Likely cause: = 2 failed, 4915 passed, 101 skipped, 15006 deselected, 3624 warnings in 651.85s (0:10:51) =

<details><summary>End of the job log</summary>

```
  Left contains one more item: 'delete'
  Full diff: (-: missing in left side, +: extra in left side)
  - []
  + [
  +     'delete',
  + ]
= 2 failed, 4915 passed, 101 skipped, 15006 deselected, 3624 warnings in 651.85s (0:10:51) =
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
