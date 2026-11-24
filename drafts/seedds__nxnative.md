<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16578 · **Generated:** 2026-11-24T00:51:11.893Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("lint-c", "tests", "fuzz")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45287777917 — dark (conclusion: `failure`), 2026-11-23 23:19 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Out of bound access to memory preceding the heap area [clang-analyzer-security.ArrayBound] (2 in this file, the baseline has 1) (dm/gfx/nvn/hle_nvn.c:1149)

<details><summary>End of the job log</summary>

```
[394/398] dm/host/tests/t_vorbis.c: 0 findings
[395/398] dm/host/tests/t_watch_sample.c: 0 findings
[396/398] dm/host/tests/t_web_stack.c: 0 findings
[397/398] dm/host/thread.c: 1 findings
[398/398] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 190 findings in 64 files, 104 file/check pairs
dm/gfx/nvn/hle_nvn.c: bugprone-suspicious-realloc-usage: 9 findings, the baseline has 6
##[error]'g_reback' may be set to null if 'realloc' fails, which may result in a leak of the original buffer [bugprone-suspicious-realloc-usage] (9 in this file, the baseline has 6)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45239787253 — dark (conclusion: `failure`), 2026-11-23 18:34 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Job / step: `Sanitizers (ASan, UBSan and TSan over the host and CPU texture tests)` → `ASan and UBSan, every host unit test (dm/host/tests)`
- Likely cause: ld: symbol(s) not found for architecture arm64

<details><summary>End of the job log</summary>

```
  "_dm_sdk_ounce", referenced from:
      _mem_init_once in t_exl-571728.o
ld: symbol(s) not found for architecture arm64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make[1]: *** [build/asan/t_exl] Error 1
make[1]: *** Waiting for unfinished jobs....
make: *** [asan] Error 2
##[error]Process completed with exit code 2.
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
