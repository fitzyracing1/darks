<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16817 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("lint-c", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45983446953 — dark (conclusion: `failure`), 2026-11-27 10:35 UTC
- Dark since: 2026-11-27 10:01 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: either cast from 'int' to 'NSUInteger' (aka 'unsigned long') is ineffective, or there is loss of precision before the conversion [bugprone-misplaced-widening-cast] (1 in this file, the baseline has 0) (dm/gfx/tests/t_perf_order.m:175)

<details><summary>End of the job log</summary>

```
[416/420] dm/host/tests/t_watch_sample.c: 0 findings
[417/420] dm/host/tests/t_web_apple.m: 0 findings
[418/420] dm/host/tests/t_web_stack.c: 0 findings
[419/420] dm/host/thread.c: 1 findings
[420/420] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 177 findings in 63 files, 100 file/check pairs
dm/gfx/tests/t_perf_order.m: bugprone-misplaced-widening-cast: 1 findings, the baseline has 0
##[error]either cast from 'int' to 'NSUInteger' (aka 'unsigned long') is ineffective, or there is loss of precision before the conversion [bugprone-misplaced-widening-cast] (1 in this file, the baseline has 0)
```

</details>

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45992613930 — dark (conclusion: `failure`), 2026-11-27 11:42 UTC
- Dark since: 2026-11-27 11:07 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: "worker" is not a known attribute of "None" (dm/tools/tests/test_shader_cache.py:748)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]"worker" is not a known attribute of "None"
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
