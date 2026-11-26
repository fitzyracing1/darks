<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16754 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("lint-c", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45762926093 — dark (conclusion: `failure`), 2026-11-26 05:38 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: expression is redundant [misc-redundant-expression] (1 in this file, the baseline has 0) (dm/gfx/tests/t_image_alias.m:309)

<details><summary>End of the job log</summary>

```
[415/419] dm/host/tests/t_watch_sample.c: 0 findings
[416/419] dm/host/tests/t_web_apple.m: 0 findings
[417/419] dm/host/tests/t_web_stack.c: 0 findings
[418/419] dm/host/thread.c: 1 findings
[419/419] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 194 findings in 70 files, 114 file/check pairs
dm/gfx/gl/hle_gl.m: misc-misplaced-const: 2 findings, the baseline has 0
##[error]'gl_config' declared with a const-qualified typedef; results in the type being 'void *const' instead of 'const void *' [misc-misplaced-const] (2 in this file, the baseline has 0)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45752613224 — dark (conclusion: `failure`), 2026-11-26 04:02 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Job / step: `Tool tests` → `Run the test files`
- Likely cause: dm/gfx/tests/test_vbf.py failed

<details><summary>End of the job log</summary>

```
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0 : quoted in the docs but read nowhere (check that each mention says it was removed): DM_FRAME_WG DM_NVN_BAR_FRAG DM_NVN_BLIT_ORDER DM_NVN_COPY_ABSORB DM_NVN_CUT_FIRST DM_NVN_DISPATCH_OWN DM_NVN_DU…
docs/env_switches.tsv does not list the switches the code reads: run dm/tools/env_switches.py, then write the new rows' meanings
switches without a meaning or a class (one of player, path, switch, diagnostic, test): DM_NVN_ROP_F16
----------------------------------------------------------------------
Ran 1 test in 4.729s
FAILED (failures=1)
##[error]dm/tools/tests/test_env_switches.py failed
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
