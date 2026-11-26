<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16740 · **Generated:** 2026-11-26T00:53:15.119Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45676368668 — dark (conclusion: `failure`), 2026-11-25 18:33 UTC
- Dark since: 2026-11-22 01:45 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: expression is redundant [misc-redundant-expression] (1 in this file, the baseline has 0) (dm/gfx/tests/t_image_alias.m:309)

<details><summary>End of the job log</summary>

```
[414/418] dm/host/tests/t_watch_sample.c: 0 findings
[415/418] dm/host/tests/t_web_apple.m: 0 findings
[416/418] dm/host/tests/t_web_stack.c: 0 findings
[417/418] dm/host/thread.c: 1 findings
[418/418] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 191 findings in 69 files, 112 file/check pairs
dm/gfx/gl/hle_gl.m: misc-misplaced-const: 2 findings, the baseline has 0
##[error]'gl_config' declared with a const-qualified typedef; results in the type being 'void *const' instead of 'const void *' [misc-misplaced-const] (2 in this file, the baseline has 0)
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/45720876173 — dark (conclusion: `cancelled`), 2026-11-25 23:22 UTC
- Dark since: 2026-11-22 07:46 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
