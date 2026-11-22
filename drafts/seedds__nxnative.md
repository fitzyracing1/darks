<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16452 · **Generated:** 2026-11-22T12:39:46.823Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("lint-c", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44985562689 — dark (conclusion: `failure`), 2026-11-22 04:33 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: clang-analyzer-security.ArrayBound: 0 findings, the baseline still has 1: shrink it (python3 dm/tools/lint_c.py tidy --update) (dm/gfx/gl/hle_gl.m)

<details><summary>End of the job log</summary>

```
[368/373] dm/host/tests/t_vi_history.c: 0 findings
[369/373] dm/host/tests/t_vorbis.c: 0 findings
[370/373] dm/host/tests/t_watch_sample.c: 0 findings
[371/373] dm/host/tests/t_web_stack.c: 0 findings
[372/373] dm/host/thread.c: 1 findings
[373/373] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 181 findings in 63 files, 102 file/check pairs
##[error]clang-analyzer-nullability.NullablePassedToNonnull: 0 findings, the baseline still has 1: shrink it (python3 dm/tools/lint_c.py tidy --update)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45019650411 — dark (conclusion: `cancelled`), 2026-11-22 11:55 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
