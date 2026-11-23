<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16526 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("lint-c", "tests", "lint-python", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45120038202 — dark (conclusion: `failure`), 2026-11-23 05:48 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Out of bound access to memory preceding the heap area [clang-analyzer-security.ArrayBound] (2 in this file, the baseline has 1) (dm/gfx/nvn/hle_nvn.c:1131)

<details><summary>End of the job log</summary>

```
[379/383] dm/host/tests/t_vorbis.c: 0 findings
[380/383] dm/host/tests/t_watch_sample.c: 0 findings
[381/383] dm/host/tests/t_web_stack.c: 0 findings
[382/383] dm/host/thread.c: 1 findings
[383/383] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 190 findings in 64 files, 104 file/check pairs
dm/gfx/nvn/hle_nvn.c: bugprone-suspicious-realloc-usage: 9 findings, the baseline has 6
##[error]'g_reback' may be set to null if 'realloc' fails, which may result in a leak of the original buffer [bugprone-suspicious-realloc-usage] (9 in this file, the baseline has 6)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45120404579 — dark (conclusion: `cancelled`), 2026-11-23 05:51 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45121079171 — dark (conclusion: `failure`), 2026-11-23 05:58 UTC
- Dark since: 2026-11-23 01:59 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Cannot assign to attribute "screen_shape" for class "ModuleType" Attribute "screen_shape" is unknown (dm/tools/tests/test_frame_ratio_stub.py:54)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]Argument of type "ModuleSpec | None" cannot be assigned to parameter "spec" of type "ModuleSpec" in function "module_from_spec" Type "ModuleSpec | None" is not assignable to type "ModuleSpec" "None" is not assi…
```

</details>

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45105713130 — dark (conclusion: `failure`), 2026-11-23 03:23 UTC
- Dark since: 2026-11-23 03:23 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== block.LZ4BlockError@shader_split.py:pacx4_parts>pacx4_unchunk

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2381== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 2 ChangeBit-ChangeBinInt-; base unit: d53cce959b06e14bd38b4710e08182ae2a4b9146
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-8e9a0250ea1a1134b926dbe6f4c304161ee7d186
##[error]shader_split: ==finding== block.LZ4BlockError@shader_split.py:pacx4_parts>pacx4_unchunk
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
