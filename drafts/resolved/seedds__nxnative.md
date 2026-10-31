<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: resolved -->
# Upstream issue draft: seedds/nxnative

- **Status:** resolved — lit again (2026-10-31); nothing to file
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 10233 · **Generated:** 2026-10-31T00:51:41.679Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("lint-python", "lint-c")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41146577280 — dark (conclusion: `failure`), 2026-10-30 23:47 UTC
- Dark since: 2026-10-30 17:06 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Operator "<<" not supported for "None" (dm/tools/patch_nso.py:1188)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Downloading nodeenv-1.11.1-py2.py3-none-any.whl (34 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.11.1 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]Function definition does not bind loop variable `ins`
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41146055203 — dark (conclusion: `failure`), 2026-10-30 23:42 UTC
- Dark since: 2026-10-30 23:28 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Nullable pointer is dereferenced [clang-analyzer-nullability.NullableDereferenced] (1 in this file, the baseline has 0) (dm/host/tests/t_pollwait.c:12)

<details><summary>End of the job log</summary>

```
[197/201] dm/host/tests/t_time.c: 0 findings
[198/201] dm/host/tests/t_touch.c: 0 findings
[199/201] dm/host/tests/t_uecvar.c: 0 findings
[200/201] dm/host/tests/t_vorbis.c: 0 findings
[201/201] dm/host/thread.c: 1 findings
LLVM 23.1.4: 274 findings in 78 files, 141 file/check pairs
dm/host/tests/t_pollwait.c: clang-analyzer-nullability.NullableDereferenced: 1 findings, the baseline has 0
##[error]Nullable pointer is dereferenced [clang-analyzer-nullability.NullableDereferenced] (1 in this file, the baseline has 0)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
