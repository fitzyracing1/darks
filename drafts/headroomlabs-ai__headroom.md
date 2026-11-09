<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 79204 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "tools-hash-refresh" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **tools-hash-refresh** workflow (`.github/workflows/tools-hash-refresh.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
