<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 463137 · **Generated:** 2026-11-16T12:52:35.150Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43859497477 — dark (conclusion: `failure`), 2026-11-16 11:38 UTC
- Dark since: 2026-11-14 23:57 UTC (first run of the current streak)
- Job / step: `Python producer tests` → `Run npm run test:python`
- Likely cause: FAILED (errors=1)

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/home/runner/work/rea/rea/tests/support/analysis-efficiency/test_catalog_eval.py", line 225, in test_built_catalog_keeps_transport_bytes_separate_from_client_selection
    one = catalog.catalog_receipt(root, 'compact', ['one'])
TypeError: catalog_receipt() takes 2 positional arguments but 3 were given
----------------------------------------------------------------------
Ran 78 tests in 4.777s
FAILED (errors=1)
##[error]Process completed with exit code 1.
```

</details>

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/43806853788 — dark (conclusion: `cancelled`), 2026-11-16 04:54 UTC
- Dark since: 2026-11-16 04:54 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 96% (elapsed: ~56m, remaining: ~2m) 977/1025 tested (157 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~2m) 979/1025 tested (158 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 980/1025 tested (159 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 982/1025 tested (161 survived, 2 timed out)
Mutation testing 97% (elapsed: ~56m, remaining: ~1m) 984/1025 tested (162 survived, 2 timed out)
Mutation testing 97% (elapsed: ~57m, remaining: ~1m) 986/1025 tested (163 survived, 2 timed out)
Mutation testing 97% (elapsed: ~57m, remaining: ~1m) 990/1025 tested (164 survived, 2 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
