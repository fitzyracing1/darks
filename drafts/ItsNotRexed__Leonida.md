<!-- dark-draft: ItsNotRexed/Leonida -->
<!-- draft-state: ready -->
# Upstream issue draft: ItsNotRexed/Leonida

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ItsNotRexed/Leonida/issues/new
- **Stars:** 16970 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Runtime (`.github/workflows/runtime.yml`): [issue #4420](https://github.com/ItsNotRexed/Leonida/issues/4420) "NVIDIA GTX 1060 (Pascal, 582.78): three runtime GPU tests fail on clean main", [issue #2831](https://github.com/ItsNotRexed/Leonida/issues/2831) "Low disk space: the port runs without the 300 GB assets stage; document a run-only build (check,shaders,runtime)", [issue #1725](https://github.com/ItsNotRexed/Leonida/issues/1725) "Runtime tests d3d12_descriptor, d3d12_copy_xfmt and d3d12_vulkan_device fail on Intel UHD 770 (Xe-LP, 101.7092)", [issue #4810](https://github.com/ItsNotRexed/Leonida/issues/4810) "d3d12_vulkan_device_test: 8 invalid-argument cases where the layer accepts what an older NVIDIA runtime refuses (per-vendor divergence, needs a ruling)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ItsNotRexed/Leonida/actions/runs/45076072668 — dark (conclusion: `failure`), 2026-11-22 22:09 UTC
- Dark since: 2026-11-22 13:02 UTC (first run of the current streak)
- Job / step: `semantic-tests (ubuntu-latest)` → `Translator semantic tests`
- Likely cause: FAILED (failures=7, errors=2, expected failures=1)

<details><summary>End of the job log</summary>

```
    apply_mutation(path, old, new)
  File "/home/runner/work/Leonida/Leonida/tests/semantic/test_mutations.py", line 120, in apply_mutation
    raise AssertionError(f"mutation anchor must occur exactly once: {old!r}")
AssertionError: mutation anchor must occur exactly once: '        elif op == "v_mul_legacy_f32":\n            # Legacy multiply treats 0 * anything (inf/NaN included) as 0.\n            x, y = self.src_f(a[1]), self.src…
----------------------------------------------------------------------
Ran 7456 tests in 447.043s
FAILED (failures=7, errors=2, expected failures=1)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Leonida!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
