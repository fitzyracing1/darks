<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16369 · **Generated:** 2026-11-21T12:38:51.607Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("tests", "lint-c", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44896678813 — dark (conclusion: `failure`), 2026-11-21 10:56 UTC
- Dark since: 2026-11-21 01:29 UTC (first run of the current streak)
- Job / step: `Tool tests` → `Run the test files`
- Likely cause: dm/tools/tests/test_shader_toolchain_cache.py failed

<details><summary>End of the job log</summary>

```
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0 : quoted in the docs but read nowhere (check that each mention says it was removed): DM_FRAME_WG DM_NVN_BLIT_ORDER DM_NVN_COPY_ABSORB DM_NVN_CUT_FIRST DM_NVN_DISPATCH_OWN DM_NVN_RT_RECLAIM DM_NVN_…
docs/env_switches.tsv does not list the switches the code reads: run dm/tools/env_switches.py, then write the new rows' meanings
switches without a meaning or a class (one of player, path, switch, diagnostic, test): DM_RESOURCE_AOC_CHECKSUM DM_SPLIT_REGISTERED_MAP
----------------------------------------------------------------------
Ran 1 test in 5.975s
FAILED (failures=1)
##[error]dm/tools/tests/test_env_switches.py failed
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44885412665 — dark (conclusion: `failure`), 2026-11-21 08:33 UTC
- Dark since: 2026-11-21 01:29 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: The left operand of '==' is a garbage value [clang-analyzer-core.UndefinedBinaryOperatorResult] (1 in this file, the baseline has 0) (dm/host/tests/t_audio_device.c:328)

<details><summary>End of the job log</summary>

```
[368/372] dm/host/tests/t_vorbis.c: 0 findings
[369/372] dm/host/tests/t_watch_sample.c: 0 findings
[370/372] dm/host/tests/t_web_stack.c: 0 findings
[371/372] dm/host/thread.c: 1 findings
[372/372] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 185 findings in 64 files, 106 file/check pairs
dm/host/hle_audio.c: clang-analyzer-security.ArrayBound: 1 findings, the baseline has 0
##[error]Out of bound access to memory after the end of 'samples' [clang-analyzer-security.ArrayBound] (1 in this file, the baseline has 0)
```

</details>

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44896678809 — dark (conclusion: `failure`), 2026-11-21 10:56 UTC
- Dark since: 2026-11-21 08:33 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Cannot assign to attribute "store" for class "SourceOutputs" Attribute "store" is unknown (dm/gfx/tools/dmsh_build.py:1144)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]Cannot access attribute "fill" for class "SourceOutputs" Attribute "fill" is unknown
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
