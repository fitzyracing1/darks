<!-- dark-draft: ItsNotRexed/Leonida -->
<!-- draft-state: ready -->
# Upstream issue draft: ItsNotRexed/Leonida

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ItsNotRexed/Leonida/issues/new
- **Stars:** 19336 · **Generated:** 2026-11-23T12:44:06.505Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Runtime (`.github/workflows/runtime.yml`): [issue #4420](https://github.com/ItsNotRexed/Leonida/issues/4420) "NVIDIA GTX 1060 (Pascal, 582.78): three runtime GPU tests fail on clean main", [issue #1725](https://github.com/ItsNotRexed/Leonida/issues/1725) "Runtime tests d3d12_descriptor, d3d12_copy_xfmt and d3d12_vulkan_device fail on Intel UHD 770 (Xe-LP, 101.7092)", [issue #4810](https://github.com/ItsNotRexed/Leonida/issues/4810) "d3d12_vulkan_device_test: 8 invalid-argument cases where the layer accepts what an older NVIDIA runtime refuses (per-vendor divergence, needs a ruling)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ItsNotRexed/Leonida/actions/runs/45089467016 — dark (conclusion: `failure`), 2026-11-23 00:33 UTC
- Dark since: 2026-11-22 13:02 UTC (first run of the current streak)
- Job / step: `translator-tests` → `Translator tests`
- Likely cause: 1 failed, 1637 passed, 11 skipped, 99 subtests passed in 48.68s

<details><summary>End of the job log</summary>

```
tests/test_u16_high_half.py:83: AssertionError
=========================== short test summary info ============================
FAILED tests/test_u16_high_half.py::test_d16_buffer_store_no_redundant_extract_after_shr16 - AssertionError: error: line 153: Operand '135[%135]' requires a previous definition
    %_arr_uint_135 = OpTypeArray %uint %135
assert 1 == 0
 +  where 1 = CompletedProcess(args=['spirv-val', '--target-env', 'vulkan1.2', '/tmp/pytest-of-runner/pytest-0/test_d16_buffer_store...r="error: line 153: Operand '135[%135]' requires a previous definition\n  %_arr_uint…
1 failed, 1637 passed, 11 skipped, 99 subtests passed in 48.68s
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Leonida!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
