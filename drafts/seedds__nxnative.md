<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 9731 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "tests", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/40853457362 — dark (conclusion: `failure`), 2026-10-29 09:55 UTC
- Dark since: 2026-10-29 09:55 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== zlib.error@shader_split.py:monolith_shaders>monolith_cmp_data

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.9/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2321== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 4 ShuffleBytes-ChangeASCIIInt-InsertRepeatedBytes-PersAutoDict- DE: "cmp\000zlib"-; base unit: c3ae1c0368d74f2e8c5a3fdd92b70742be8265d5
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-8b7ae3d571b5bb18b10d95516081066d0785a0b7
##[error]shader_split: ==finding== zlib.error@shader_split.py:monolith_shaders>monolith_cmp_data
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/40980248519 — dark (conclusion: `failure`), 2026-10-30 00:31 UTC
- Dark since: 2026-10-30 00:05 UTC (first run of the current streak)
- Job / step: `Tool tests` → `Run the test files`
- Likely cause: dm/gfx/tests/test_dmsh_logic.py failed

<details><summary>End of the job log</summary>

```
    self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0 : docs/env_switches.tsv does not list the switches the code reads: run dm/tools/env_switches.py, then write the new rows' meanings
switches without a meaning or a class (one of player, path, switch, diagnostic, test): DM_WINDOW_TOP
----------------------------------------------------------------------
Ran 1 test in 1.765s
FAILED (failures=1)
##[error]dm/tools/tests/test_env_switches.py failed
```

</details>

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/40980248510 — dark (conclusion: `failure`), 2026-10-30 00:31 UTC
- Dark since: 2026-10-30 00:30 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: "start" is not a known attribute of "None" (dm/gfx/tools/dmsh_logic.py:87)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Downloading nodeenv-1.11.1-py2.py3-none-any.whl (34 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.11.1 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]Function definition does not bind loop variable `struct`
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
