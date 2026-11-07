<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 13061 · **Generated:** 2026-11-07T06:41:09.321Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42205662806 — dark (conclusion: `failure`), 2026-11-06 10:50 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== cra.Error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2567== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 5 CrossOver-CMP-EraseBytes-ChangeBinInt-CMP- DE: "_\007\000\000\000\000\000\000"-"NARC"-; base unit: 799f83c831f20357afdfb3b7f8cacbcd4010165b
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-907602530e2dee6a1213b35b74f757c1e5f442a5
##[error]shader_split: ==finding== cra.Error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42345858953 — dark (conclusion: `cancelled`), 2026-11-07 06:11 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42346980118 — dark (conclusion: `cancelled`), 2026-11-07 06:25 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42347228274 — dark (conclusion: `failure`), 2026-11-07 06:29 UTC
- Dark since: 2026-11-07 04:16 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: "group" is not a known attribute of "None" (dm/gfx/tools/dmsh_build.py:1425)

<details><summary>End of the job log</summary>

```
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
[notice] A new release of pip is available: 26.2.2 -> 26.3
[notice] To update, run: pip install --upgrade pip
##[error]"group" is not a known attribute of "None"
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
