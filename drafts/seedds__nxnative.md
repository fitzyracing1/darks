<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 13365 · **Generated:** 2026-11-08T00:55:40.555Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "lint-c", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42362304896 — dark (conclusion: `failure`), 2026-11-07 10:03 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== cra.Error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2349== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 2 PersAutoDict-CMP- DE: "yV4\022"-"NARC"-; base unit: e0994a6d8b1a39e9e02449dff468c8d8e916748a
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-0ce1ed79030abafdbb1bd010031c8eb3c8895c08
##[error]shader_split: ==finding== cra.Error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42397724011 — dark (conclusion: `failure`), 2026-11-07 17:43 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Dereference of null pointer [clang-analyzer-core.NullDereference] (10 in this file, the baseline has 9) (dm/gfx/nvn/nvn_mtl.m:13095)

<details><summary>End of the job log</summary>

```
[249/253] dm/host/tests/t_vi_history.c: 0 findings
[250/253] dm/host/tests/t_vorbis.c: 0 findings
[251/253] dm/host/tests/t_watch_sample.c: 0 findings
[252/253] dm/host/thread.c: 1 findings
[253/253] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 239 findings in 78 files, 133 file/check pairs
dm/gfx/nvn/nvn_mtl.m: clang-analyzer-core.BitwiseShift: 1 findings, the baseline has 0
##[error]Right operand is negative in left shift [clang-analyzer-core.BitwiseShift] (1 in this file, the baseline has 0)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42397724075 — dark (conclusion: `failure`), 2026-11-07 17:43 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Job / step: `Tool tests` → `Run the test files`
- Likely cause: dm/ios/tests/test_xcode_workflow.py failed

<details><summary>End of the job log</summary>

```
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0 : quoted in the docs but read nowhere (check that each mention says it was removed): DM_NVN_CUT_FIRST DM_NVN_RT_RECLAIM DM_NVN_VC_WAYS
docs/env_switches.tsv does not list the switches the code reads: run dm/tools/env_switches.py, then write the new rows' meanings
switches without a meaning or a class (one of player, path, switch, diagnostic, test): DM_NVN_BC_ALIAS
----------------------------------------------------------------------
Ran 1 test in 1.604s
FAILED (failures=1)
##[error]dm/tools/tests/test_env_switches.py failed
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
