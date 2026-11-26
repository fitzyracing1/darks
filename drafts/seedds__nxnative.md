<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16769 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("lint-c", "tests", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45810630407 — dark (conclusion: `failure`), 2026-11-26 11:26 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (1 in this file, the baseline has 0) (dm/gfx/tests/t_gpu_lost.m:57)

<details><summary>End of the job log</summary>

```
[415/419] dm/host/tests/t_watch_sample.c: 0 findings
[416/419] dm/host/tests/t_web_apple.m: 0 findings
[417/419] dm/host/tests/t_web_stack.c: 0 findings
[418/419] dm/host/thread.c: 1 findings
[419/419] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 196 findings in 71 files, 116 file/check pairs
dm/gfx/gl/hle_gl.m: misc-misplaced-const: 2 findings, the baseline has 0
##[error]'gl_config' declared with a const-qualified typedef; results in the type being 'void *const' instead of 'const void *' [misc-misplaced-const] (2 in this file, the baseline has 0)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45809738280 — dark (conclusion: `cancelled`), 2026-11-26 11:20 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45809738367 — dark (conclusion: `failure`), 2026-11-26 11:20 UTC
- Dark since: 2026-11-26 08:40 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Argument of type "ModuleSpec | None" cannot be assigned to parameter "spec" of type "ModuleSpec" in function "module_from_spec" Type "ModuleSpec | None" is not assignable to type "ModuleSpec" "None" is not assignable to "ModuleSpec" (dm/tools/tests/test_regress.py:1239)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]Function definition does not bind loop variable `roots`
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
