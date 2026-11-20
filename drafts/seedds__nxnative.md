<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16269 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("fuzz", "tests", "lint-python", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44516219765 — dark (conclusion: `cancelled`), 2026-11-19 11:35 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: Canceling since a higher priority waiting request for fuzz-refs/heads/main exists

<details><summary>End of the job log</summary>

```
==3158== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 4 PersAutoDict-InsertByte-CrossOver-EraseBytes- DE: "+\005\000\000"-; base unit: b307e01c0081a138a5581f802a4ba22951e35430
0x50,0x41,0x43,0x78,0x34,0x30,0x33,0x4c,0x2e,0x6e,0x6e,0x6e,0x3d,0x6e,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,
PACx403L.nnn=n\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-2b166a0a23c82f1cb4e03db9e4f477d493cde4ad
Base64: UEFDeDQwM0wubm5uPW4AAAAAAAAAAAAAAAAAAAAAAAAAAAA=
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44688328845 — dark (conclusion: `cancelled`), 2026-11-20 06:30 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-python (`.github/workflows/lint-python.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44682278464 — dark (conclusion: `failure`), 2026-11-20 05:37 UTC
- Dark since: 2026-11-19 19:37 UTC (first run of the current streak)
- Job / step: `ruff and pyright (ratchet)` → `ruff and pyright against the baseline`
- Likely cause: Argument of type "TextIOWrapper[_WrappedBuffer] | int" cannot be assigned to parameter "creationflags" of type "int" in function "__init__" Type "TextIOWrapper[_WrappedBuffer] | int" is not assignable to type "int" "TextIOWrapper[_WrappedBu (scripts/build_ipa_from_nsp.py:1765)

<details><summary>End of the job log</summary>

```
Using cached lz4-4.4.5-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.manylinux_2_28_x86_64.whl (1.4 MB)
Using cached capstone-5.0.9-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.5 MB)
Using cached fonttools-4.67.0-cp314-cp314-manylinux2014_x86_64.manylinux_2_17_x86_64.whl (5.3 MB)
Using cached nodeenv-1.12.0-py3-none-any.whl (39 kB)
Using cached typing_extensions-4.16.0-py3-none-any.whl (45 kB)
Installing collected packages: typing-extensions, ruff, nodeenv, lz4, fonttools, capstone, pyright
Successfully installed capstone-5.0.9 fonttools-4.67.0 lz4-4.4.5 nodeenv-1.12.0 pyright-1.1.414 ruff-0.17.2 typing-extensions-4.16.0
##[error]No overloads for "__init__" match the provided arguments
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44682278614 — dark (conclusion: `failure`), 2026-11-20 05:37 UTC
- Dark since: 2026-11-19 19:54 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: bugprone-suspicious-memory-comparison: 0 findings, the baseline still has 1: shrink it (python3 dm/tools/lint_c.py tidy --update) (dm/gfx/vk/hle_vk.m)

<details><summary>End of the job log</summary>

```
[361/365] dm/host/tests/t_vorbis.c: 0 findings
[362/365] dm/host/tests/t_watch_sample.c: 0 findings
[363/365] dm/host/tests/t_web_stack.c: 0 findings
[364/365] dm/host/thread.c: 1 findings
[365/365] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 186 findings in 65 files, 106 file/check pairs
dm/gfx/tests/t_present_crop.m: clang-analyzer-nullability.NullablePassedToNonnull: 2 findings, the baseline has 1
##[error]Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (2 in this file, the baseline has 1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
