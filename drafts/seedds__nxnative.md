<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16843 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("lint-python", "tests", "lint-c")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46066349961 — dark (conclusion: `failure`), 2026-11-27 20:50 UTC
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

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46066467719 — dark (conclusion: `failure`), 2026-11-27 20:51 UTC
- Dark since: 2026-11-27 16:22 UTC (first run of the current streak)
- Job / step: `Host unit tests and CPU-only gfx tests` → `Host unit tests (dm/host/tests)`
- Likely cause: [dm] [RED] MapMemory refused (0xd401): 0x108011020000 <- 0x108012420000 +0x1000

<details><summary>End of the job log</summary>

```
[dm] [mem] heap 0.00 GB (heap region 0.02 GB)
[dm] [RED] MapMemory refused (0xd401): 0x108011020000 <- 0x108010320000 +0x1000
[dm] [RED] MapMemory refused (0xd401): 0x108011020000 <- 0x108012420000 +0x1000
[dm] [RED] MapMemory refused (0xd401): 0x108011020000 <- 0x108012420000 +0x1000
[dm] [mem] heap 0.00 GB (heap region 0.02 GB)
[dm] [mem] heap 0.01 GB (heap region 0.02 GB)
memory SVCs passed (ounce=0, map limit=1, host page=16384, guest files 0)
##[error]Process completed with exit code 2.
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/46066349704 — dark (conclusion: `failure`), 2026-11-27 20:50 UTC
- Dark since: 2026-11-27 18:32 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (15 in this file, the baseline has 14) (dm/gfx/nvn/nvn_mtl.m:4900)

<details><summary>End of the job log</summary>

```
[416/420] dm/host/tests/t_watch_sample.c: 0 findings
[417/420] dm/host/tests/t_web_apple.m: 0 findings
[418/420] dm/host/tests/t_web_stack.c: 0 findings
[419/420] dm/host/thread.c: 1 findings
[420/420] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 193 findings in 63 files, 101 file/check pairs
dm/gfx/nvn/hle_nvn.c: clang-analyzer-security.ArrayBound: 2 findings, the baseline has 0
##[error]Out of bound access to memory after the end of 'piece' [clang-analyzer-security.ArrayBound] (2 in this file, the baseline has 0)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
