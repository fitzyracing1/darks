<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 12336 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "tests", "lint-c")
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

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42016317861 — dark (conclusion: `cancelled`), 2026-11-05 11:07 UTC
- Dark since: 2026-11-04 14:36 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42022858871 — dark (conclusion: `failure`), 2026-11-05 11:55 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (1 in this file, the baseline has 0) (dm/gfx/tests/t_int_float_view.m:29)

<details><summary>End of the job log</summary>

```
[231/235] dm/host/tests/t_uecvar.c: 0 findings
[232/235] dm/host/tests/t_vorbis.c: 0 findings
[233/235] dm/host/tests/t_watch_sample.c: 0 findings
[234/235] dm/host/thread.c: 1 findings
[235/235] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 241 findings in 74 files, 135 file/check pairs
dm/gfx/tests/t_int_float_view.m: clang-analyzer-nullability.NullablePassedToNonnull: 1 findings, the baseline has 0
##[error]Nullable pointer is passed to a callee that requires a non-null 1st parameter [clang-analyzer-nullability.NullablePassedToNonnull] (1 in this file, the baseline has 0)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
