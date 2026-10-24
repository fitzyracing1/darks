<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 31187 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Minimal serving runtime" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Minimal serving runtime** workflow (`.github/workflows/terminal-minimal-server.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/39957478505 — dark (conclusion: `failure`), 2026-10-23 12:58 UTC
- Dark since: 2026-10-23 07:14 UTC (first run of the current streak)
- Job / step: `Linux / runtime requirements only` → `Run full server suite without terminal packages`
- Likely cause: FAILED (failures=1, skipped=14)

<details><summary>End of the job log</summary>

```
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/runner/work/Strata/Strata/serve/test_lifeline.py", line 98, in _killed_parent_takes_the_child
    self.assertTrue(self.wait_gone(info["child"]), f"the child outlived a killed server ({info['mechanism']})")
AssertionError: False is not true : the child outlived a killed server (watcher)
----------------------------------------------------------------------
Ran 974 tests in 343.862s
FAILED (failures=1, skipped=14)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
