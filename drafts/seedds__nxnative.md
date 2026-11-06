<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 12519 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "lint-c", "lint-python")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42014086151 — dark (conclusion: `failure`), 2026-11-05 10:50 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
==2564== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 3 ChangeByte-ChangeBinInt-CMP- DE: "NARC"-; base unit: ab64bd12b0f167a0435ff755b2125e02dc1ab6eb
0x4e,0x41,0x52,0x43,0x0,0x0,0x8d,0x0,0x0,
NARC\000\000\215\000\000
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-4692f6f26f9db4d97ac8a589c20b3488caec5da9
Base64: TkFSQwAAjQAA
##[error]shader_split: ==finding== struct.error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42044778761 — dark (conclusion: `failure`), 2026-11-05 14:24 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `LLVM 23.1.4 (clang-tidy)`
- Likely cause: curl: (56) The requested URL returned error: 504

<details><summary>End of the job log</summary>

```
[command]/opt/homebrew/bin/git config --local --unset includeif.gitdir:/github/workspace/.git.path \/github\/runner_temp\/git\-credentials\-0bb9a70e\-7973\-4a19\-8e4b\-0413d8ee956f\.config
[command]/opt/homebrew/bin/git config --local --get-all includeif.gitdir:/github/workspace/.git/worktrees/*.path
/github/runner_temp/git-credentials-0bb9a70e-7973-4a19-8e4b-0413d8ee956f.config
[command]/opt/homebrew/bin/git config --local --unset includeif.gitdir:/github/workspace/.git/worktrees/*.path \/github\/runner_temp\/git\-credentials\-0bb9a70e\-7973\-4a19\-8e4b\-0413d8ee956f\.config
[command]/opt/homebrew/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
Removing credentials config '/Users/runner/work/_temp/git-credentials-0bb9a70e-7973-4a19-8e4b-0413d8ee956f.config'
curl: (56) The requested URL returned error: 504
##[error]Process completed with exit code 56.
```

</details>

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42062501408 — dark (conclusion: `failure`), 2026-11-05 16:15 UTC
- Dark since: 2026-11-05 16:15 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: "__setitem__" method not defined on type "str" (dm/tools/tests/test_nso_match.py:203)

<details><summary>End of the job log</summary>

```
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
[notice] A new release of pip is available: 26.2.2 -> 26.3
[notice] To update, run: pip install --upgrade pip
##[error]"__setitem__" method not defined on type "str"
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
