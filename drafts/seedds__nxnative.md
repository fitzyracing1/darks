<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16106 · **Generated:** 2026-11-18T12:42:30.883Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "tests", "lint-c")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44296411599 — dark (conclusion: `failure`), 2026-11-18 11:37 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2721== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 1 CMP- DE: "\000\000\000\000\000\000\000H"-; base unit: 44c9de156135ea0600c1e489717a05af64b57ab8
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-7a577f96f2d5059085b70e469b2a6db97eb1edeb
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44285451978 — dark (conclusion: `failure`), 2026-11-18 10:26 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Job / step: `Build check (Mac host, gfx tests, iOS sources)` → `Every gfx test compiled, not run`
- Likely cause: 69 warnings and 2 errors generated.

<details><summary>End of the job log</summary>

```
 13086 | static int encode_args(id<MTLCommandEncoder> en, NvShader *sh, int nvn_stage, int metal_vertex) { cbs_note(sh); za_shader((__bridge const void *)sh, sh->key[0] ? sh->key : sh->builtin ? sh->builtin : "?"); AP_B…
       |                                              ^
69 warnings and 2 errors generated.
make: *** [t_geometry] Error 1
make: *** Waiting for unfinished jobs....
make: *** [t_geometry_feedback] Error 1
make: *** [t_geometry_hazards] Error 1
##[error]Process completed with exit code 2.
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44285451950 — dark (conclusion: `failure`), 2026-11-18 10:26 UTC
- Dark since: 2026-11-16 07:54 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: clang-analyzer-unix.cstring.UninitializedRead: 0 findings, the baseline still has 1: shrink it (python3 dm/tools/lint_c.py tidy --update) (dm/gfx/tests/t_primitive_restart.m)

<details><summary>End of the job log</summary>

```
[352/356] dm/host/tests/t_vorbis.c: 0 findings
[353/356] dm/host/tests/t_watch_sample.c: 0 findings
[354/356] dm/host/tests/t_web_stack.c: 0 findings
[355/356] dm/host/thread.c: 1 findings
[356/356] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 176 findings in 61 files, 103 file/check pairs
dm/gfx/tests/t_geometry.m: clang-diagnostic-error: 2 findings, the baseline has 0
##[error]use of undeclared identifier 'g_mdi_v'; did you mean 'g_mdx_n'? [clang-diagnostic-error] (2 in this file, the baseline has 0)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
