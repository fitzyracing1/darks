<!-- dark-draft: ItsNotRexed/Leonida -->
<!-- draft-state: ready -->
# Upstream issue draft: ItsNotRexed/Leonida

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ItsNotRexed/Leonida/issues/new
- **Stars:** 15066 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Runtime (`.github/workflows/runtime.yml`): [issue #2831](https://github.com/ItsNotRexed/Leonida/issues/2831) "Low disk space: the port runs without the 300 GB assets stage; document a run-only build (check,shaders,runtime)", [issue #1725](https://github.com/ItsNotRexed/Leonida/issues/1725) "Runtime tests d3d12_descriptor, d3d12_copy_xfmt and d3d12_vulkan_device fail on Intel UHD 770 (Xe-LP, 101.7092)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ItsNotRexed/Leonida/actions/runs/45057423436 — dark (conclusion: `failure`), 2026-11-22 18:51 UTC
- Dark since: 2026-11-22 13:02 UTC (first run of the current streak)
- Job / step: `check` → `Tests (standard library only, no game data)`
- Likely cause: FAILED (failures=1)

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "D:\a\Leonida\Leonida\tests\test_report_paths.py", line 110, in test_macos_case_sensitive_volume_keeps_case
    self.assertNotEqual(report_paths.path_key("/tmp/leonida_x/R.json"), report_paths.path_key("/tmp/leonida_x/r.json"))
AssertionError: 'd:\\tmp\\leonida_x\\r.json' == 'd:\\tmp\\leonida_x\\r.json'
----------------------------------------------------------------------
Ran 15 tests in 3.802s
FAILED (failures=1)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Leonida!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
