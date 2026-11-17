<!-- dark-draft: PrefectHQ/fastmcp -->
<!-- draft-state: ready -->
# Upstream issue draft: PrefectHQ/fastmcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/PrefectHQ/fastmcp/issues/new
- **Stars:** 28600 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Upgrade checks" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Upgrade checks** workflow (`.github/workflows/run-upgrade-checks.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/PrefectHQ/fastmcp/actions/runs/44000072231 — dark (conclusion: `failure`), 2026-11-17 02:02 UTC
- Dark since: 2026-11-11 02:02 UTC (first run of the current streak)
- Job / step: `Integration tests` → `Run integration tests`
- Likely cause: ============= 27 passed, 6 skipped, 6 warnings, 4 errors in 35.83s =============

<details><summary>End of the job log</summary>

```
../../_temp/uv-python-dir/cpython-3.11.18-linux-x86_64-gnu/lib/python3.11/importlib/__init__.py:126: in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
tests/server/auth/test_oauth_consent_flow.py:21: in <module>
    import httpx
E   ModuleNotFoundError: No module named 'httpx'
============= 27 passed, 6 skipped, 6 warnings, 4 errors in 35.83s =============
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining fastmcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
