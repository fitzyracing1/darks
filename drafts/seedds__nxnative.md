<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16548 · **Generated:** 2026-11-23T12:44:06.505Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("lint-c", "tests", "fuzz")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45170002292 — dark (conclusion: `failure`), 2026-11-23 11:58 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Failed to CreateArtifact: Unable to make request: ENOTFOUND

<details><summary>End of the job log</summary>

```
[390/394] dm/host/tests/t_vorbis.c: 0 findings
[391/394] dm/host/tests/t_watch_sample.c: 0 findings
[392/394] dm/host/tests/t_web_stack.c: 0 findings
[393/394] dm/host/thread.c: 1 findings
[394/394] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 194 findings in 68 files, 108 file/check pairs
dm/gfx/nvn/hle_nvn.c: bugprone-suspicious-realloc-usage: 9 findings, the baseline has 6
##[error]'g_reback' may be set to null if 'realloc' fails, which may result in a leak of the original buffer [bugprone-suspicious-realloc-usage] (9 in this file, the baseline has 6)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45167807554 — dark (conclusion: `failure`), 2026-11-23 11:43 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Job / step: `Build check (Mac host, gfx tests, iOS sources)` → `Every gfx test compiled, not run`
- Likely cause: 61 warnings and 1 error generated.

<details><summary>End of the job log</summary>

```
      |                                         ^
      |                                         CFBridgingRelease( )
61 warnings and 1 error generated.
61 warnings generated.
make: *** [t_pso_depth_stencil] Error 1
make: *** Waiting for unfinished jobs....
61 warnings generated.
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
