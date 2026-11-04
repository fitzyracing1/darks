<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 12012 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "lint-c", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41817148591 — dark (conclusion: `failure`), 2026-11-04 10:53 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== cra.Error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.9/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2605== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 4 ShuffleBytes-ChangeBinInt-ShuffleBytes-CMP- DE: "NARC"-; base unit: a024623f5e461d75ee67cab73a930c745c797eca
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-98537b6e227057511532203e7c383c20537b12a4
##[error]shader_split: ==finding== cra.Error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41819072419 — dark (conclusion: `failure`), 2026-11-04 11:10 UTC
- Dark since: 2026-11-03 15:34 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (5 in this file, the baseline has 0) (dm/host/web_apple.m:375)

<details><summary>End of the job log</summary>

```
[229/233] dm/host/tests/t_uecvar.c: 0 findings
[230/233] dm/host/tests/t_vorbis.c: 0 findings
[231/233] dm/host/tests/t_watch_sample.c: 0 findings
[232/233] dm/host/thread.c: 1 findings
[233/233] dm/host/web_apple.m: 5 findings
LLVM 23.1.4: 251 findings in 76 files, 138 file/check pairs
dm/gfx/vk/hle_vk.m: clang-analyzer-core.NullDereference: 1 findings, the baseline has 0
##[error]Access to field 'nvis' results in a dereference of a null pointer (loaded from variable 'q') [clang-analyzer-core.NullDereference] (1 in this file, the baseline has 0)
```

</details>

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41819072418 — dark (conclusion: `failure`), 2026-11-04 11:10 UTC
- Dark since: 2026-11-04 11:10 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: "exec_module" is not a known attribute of "None" (dm/tools/tests/test_jit_capture.py:15)

<details><summary>End of the job log</summary>

```
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Downloading nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
[notice] A new release of pip is available: 26.2.1 -> 26.3
[notice] To update, run: pip install --upgrade pip
##[error]Function definition does not bind loop variable `part`
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
