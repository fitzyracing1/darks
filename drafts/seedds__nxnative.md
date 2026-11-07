<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 12949 · **Generated:** 2026-11-07T00:51:57.642Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "lint-c", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42205662806 — dark (conclusion: `failure`), 2026-11-06 10:50 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== cra.Error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2567== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 5 CrossOver-CMP-EraseBytes-ChangeBinInt-CMP- DE: "_\007\000\000\000\000\000\000"-"NARC"-; base unit: 799f83c831f20357afdfb3b7f8cacbcd4010165b
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-907602530e2dee6a1213b35b74f757c1e5f442a5
##[error]shader_split: ==finding== cra.Error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42264410010 — dark (conclusion: `failure`), 2026-11-06 17:44 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (2 in this file, the baseline has 1) (dm/gfx/tests/t_pso_stall.m:44)

<details><summary>End of the job log</summary>

```
[239/243] dm/host/tests/t_vi_history.c: 0 findings
[240/243] dm/host/tests/t_vorbis.c: 0 findings
[241/243] dm/host/tests/t_watch_sample.c: 0 findings
[242/243] dm/host/thread.c: 1 findings
[243/243] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 233 findings in 75 files, 128 file/check pairs
dm/gfx/nvn/nvn_mtl.m: clang-analyzer-core.BitwiseShift: 1 findings, the baseline has 0
##[error]Right operand is negative in left shift [clang-analyzer-core.BitwiseShift] (1 in this file, the baseline has 0)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42264409944 — dark (conclusion: `cancelled`), 2026-11-06 17:44 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
