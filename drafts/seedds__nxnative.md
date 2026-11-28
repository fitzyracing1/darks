<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16869 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("tests", "lint-c", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46134049545 — dark (conclusion: `cancelled`), 2026-11-28 10:12 UTC
- Dark since: 2026-11-27 16:22 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46130861651 — dark (conclusion: `failure`), 2026-11-28 09:31 UTC
- Dark since: 2026-11-27 18:32 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: clang-analyzer-unix.cstring.UninitializedRead: 1 findings, the baseline still has 3: shrink it (python3 dm/tools/lint_c.py tidy --update) (dm/gfx/nvn/nvn_mtl.m)

<details><summary>End of the job log</summary>

```
[424/428] dm/host/tests/t_watch_sample.c: 0 findings
[425/428] dm/host/tests/t_web_apple.m: 0 findings
[426/428] dm/host/tests/t_web_stack.c: 0 findings
[427/428] dm/host/thread.c: 1 findings
[428/428] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 171 findings in 64 files, 100 file/check pairs
dm/gfx/nvn/nvn_mtl.m: clang-analyzer-unix.cstring.NullArg: 3 findings, the baseline has 2
##[error]Null pointer passed as 2nd argument to memory comparison function [clang-analyzer-unix.cstring.NullArg] (3 in this file, the baseline has 2)
```

</details>

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46128186726 — dark (conclusion: `failure`), 2026-11-28 08:57 UTC
- Dark since: 2026-11-28 07:18 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Operator "+" not supported for types "Unknown | Literal['csp', 0, 'o']" and "Unknown | Literal[0]" Operator "+" not supported for types "Literal['csp']" and "Literal[0]" Operator "+" not supported for types "Literal['o']" and "Literal[0]" (dm/tools/jump_solver.py:867)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]Function definition does not bind loop variable `seen`
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
