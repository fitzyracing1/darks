<!-- dark-draft: Niko1221/Strata -->
<!-- draft-state: ready -->
# Upstream issue draft: Niko1221/Strata

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Niko1221/Strata/issues/new
- **Stars:** 46887 · **Generated:** 2026-11-22T18:35:55.565Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Checks (`.github/workflows/check.yml`): [issue #6629](https://github.com/Niko1221/Strata/issues/6629) "Docs settings-register: 41 HIP knobs land without a status in 0.2.19 — the pristine tag fails tools/test_settings_register.py"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Minimal serving runtime" workflow failing on main since 2026-11-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Minimal serving runtime** workflow (`.github/workflows/terminal-minimal-server.yml`) on `main` has been failing since 2026-11-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Niko1221/Strata/actions/runs/45016591436 — dark (conclusion: `failure`), 2026-11-22 11:17 UTC
- Dark since: 2026-11-21 16:45 UTC (first run of the current streak)
- Job / step: `Linux / runtime requirements only` → `Run full server suite without terminal packages`
- Likely cause: FAILED (errors=6, skipped=27)

<details><summary>End of the job log</summary>

```
  File "/home/runner/work/Strata/Strata/terminal/serve/server.py", line 2480, in generate
    f"GEN {int(max_new)}{self.sampling_keys(sampling or {}, hy4=getattr(self, 'hy4_engine', False), inkling=getattr(self, 'inkling_engine', False))}"
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: engine.<locals>.<lambda>() got an unexpected keyword argument 'hy4'
----------------------------------------------------------------------
Ran 2134 tests in 788.160s
FAILED (errors=6, skipped=27)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Strata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
