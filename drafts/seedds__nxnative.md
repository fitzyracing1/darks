<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 13650 · **Generated:** 2026-11-08T18:35:29.654Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("fuzz", "lint-c", "tests", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42470778238 — dark (conclusion: `failure`), 2026-11-08 10:17 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
==2487== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 5 ChangeBit-ChangeBinInt-EraseBytes-CrossOver-CMP- DE: "NARC"-; base unit: ab64bd12b0f167a0435ff755b2125e02dc1ab6eb
0x4e,0x41,0x52,0x43,0xc7,
NARC\307
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-b898503eb8d1f4212855f1b6a9ca4825aff09026
Base64: TkFSQ8c=
##[error]shader_split: ==finding== struct.error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42502620107 — dark (conclusion: `failure`), 2026-11-08 16:59 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Dereference of null pointer [clang-analyzer-core.NullDereference] (10 in this file, the baseline has 9) (dm/gfx/nvn/nvn_mtl.m:13455)

<details><summary>End of the job log</summary>

```
[257/261] dm/host/tests/t_vi_history.c: 0 findings
[258/261] dm/host/tests/t_vorbis.c: 0 findings
[259/261] dm/host/tests/t_watch_sample.c: 0 findings
[260/261] dm/host/thread.c: 1 findings
[261/261] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 249 findings in 84 files, 141 file/check pairs
dm/gfx/nvn/nvn_mtl.m: clang-analyzer-core.BitwiseShift: 1 findings, the baseline has 0
##[error]Right operand is negative in left shift [clang-analyzer-core.BitwiseShift] (1 in this file, the baseline has 0)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42508744327 — dark (conclusion: `cancelled`), 2026-11-08 18:11 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42508744231 — dark (conclusion: `failure`), 2026-11-08 18:11 UTC
- Dark since: 2026-11-08 18:11 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Operator "<" not supported for types "int" and "Unknown | None" Operator "<" not supported for types "int" and "None" (dm/tools/ue_cvar.py:65)

<details><summary>End of the job log</summary>

```
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
[notice] A new release of pip is available: 26.2.2 -> 26.3
[notice] To update, run: pip install --upgrade pip
##[error]Operator "<" not supported for types "int" and "Unknown | None" Operator "<" not supported for types "int" and "None"
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
