<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 11216 · **Generated:** 2026-11-02T12:41:31.933Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("lint-c", "fuzz")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41431290480 — dark (conclusion: `failure`), 2026-11-02 10:45 UTC
- Dark since: 2026-11-02 10:43 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: Potential leak of an object stored into 'pr' [clang-analyzer-osx.cocoa.RetainCount] (1 in this file, the baseline has 0) (dm/gfx/tests/t_geometry_hazards.m:141)

<details><summary>End of the job log</summary>

```
[211/215] dm/host/tests/t_time.c: 0 findings
[212/215] dm/host/tests/t_touch.c: 0 findings
[213/215] dm/host/tests/t_uecvar.c: 0 findings
[214/215] dm/host/tests/t_vorbis.c: 0 findings
[215/215] dm/host/thread.c: 1 findings
LLVM 23.1.4: 273 findings in 78 files, 142 file/check pairs
dm/gfx/tests/t_geometry_hazards.m: clang-analyzer-nullability.NullablePassedToNonnull: 1 findings, the baseline has 0
##[error]Nullable pointer is passed to a callee that requires a non-null 6th parameter [clang-analyzer-nullability.NullablePassedToNonnull] (1 in this file, the baseline has 0)
```

</details>

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41433168656 — dark (conclusion: `failure`), 2026-11-02 10:59 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:ndsr_shaders>records_from

<details><summary>End of the job log</summary>

```
==2325== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 4 InsertRepeatedBytes-CopyPart-ChangeBinInt-CMP- DE: "NDSR"-; base unit: 192e86a7b14372293cfa6cdcf5957adcaa16bb95
0x4e,0x44,0x53,0x52,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0…
NDSR\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\00…
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-36f8d28f0e4472ab5df5e8d2c3d519884d466ce4
Base64: TkRTUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tLS0tLS0tbS0AAAAAABCUw==
##[error]shader_split: ==finding== struct.error@shader_split.py:ndsr_shaders>records_from
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
