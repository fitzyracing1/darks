<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 79287 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("tools-hash-refresh", "PR Governance")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### tools-hash-refresh (`.github/workflows/tools-hash-refresh.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/42572893895 — dark (conclusion: `failure`), 2026-11-09 06:25 UTC
- Dark since: 2026-11-09 06:25 UTC (first run of the current streak)
- Job / step: `verify-pins` → `Verify tool SHA-256 pins`
- Likely cause: urllib.error.HTTPError: HTTP Error 504: Gateway Time-out

<details><summary>End of the job log</summary>

```
           ^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/hostedtoolcache/Python/3.12.16/x64/lib/python3.12/urllib/request.py", line 492, in _call_chain
    result = func(*args)
             ^^^^^^^^^^^
  File "/opt/hostedtoolcache/Python/3.12.16/x64/lib/python3.12/urllib/request.py", line 639, in http_error_default
    raise HTTPError(req.full_url, code, msg, hdrs, fp)
urllib.error.HTTPError: HTTP Error 504: Gateway Time-out
##[error]Process completed with exit code 1.
```

</details>

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/42634775392 — dark (conclusion: `cancelled`), 2026-11-09 14:26 UTC
- Dark since: 2026-11-09 14:26 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/3639
https://github.com/headroomlabs-ai/headroom/pull/3637
https://github.com/headroomlabs-ai/headroom/pull/3637
https://github.com/headroomlabs-ai/headroom/pull/3637
https://github.com/headroomlabs-ai/headroom/pull/3610
https://github.com/headroomlabs-ai/headroom/pull/3610
https://github.com/headroomlabs-ai/headroom/pull/3610
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
