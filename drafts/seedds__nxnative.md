<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16071 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "tests", "lint-c")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44077227136 — dark (conclusion: `failure`), 2026-11-17 11:47 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts

<details><summary>End of the job log</summary>

```
==2333== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 3 ChangeBinInt-ShuffleBytes-CopyPart-; base unit: c7733055b2e55e6c874c44036711bc82055ea46d
0x50,0x41,0x43,0x78,0x34,0x30,0x33,0x4c,0x42,0x41,0x48,0x53,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x4e,0x41,0x52,0x43,0x0,0x0,0x0,0x0,0x2,0x0,0x0,0x0,0x0,0x0,0x0,0x7b,0x0,0x0,0x0,0x0,0x0,0x…
PACx403LBAHS\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000NARC\000\000\000\000\002\000\000\000\000\000\000{\000\000\000\000\000\000\000\200\010\000\000\250\000\000\000 \000\000\000\001\000\000\000\…
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-1bb5f1c34d7a03bac82d99297421928fb462fb5c
Base64: UEFDeDQwM0xCQUhTAAAAAAAAAAAAAAAAAAAAAABOQVJDAAAAAAIAAAAAAAB7AAAAAAAAAIAIAACoAAAAIAAAAAEAAAAAAAAAAAAAAAABAAAAAAAAgAgAAAAAAAACAAAAAAAAewAAAAAAAACACAAAqAAAACAAAAABAAAAAAAAAAAAAAAAAQAAAAAAAIAIAAAAAAD8AAAB/AAAAQAAAAA…
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44247465463 — dark (conclusion: `failure`), 2026-11-18 05:54 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Job / step: `Host unit tests and CPU-only gfx tests` → `Host unit tests (dm/host/tests)`
- Likely cause: Assertion failed: (a->vs && !a->soft), function vt_session_lifecycle, file t_codec_video.c, line 111.

<details><summary>End of the job log</summary>

```
[dm] [movie] AVC: VideoToolbox decoding 64×64, profile 66, reorder depth 0
[dm] [movie] AVC: VideoToolbox decoding 64×64, profile 66, reorder depth 0
[dm] [RED] movie: VideoToolbox cannot create an AV1 session (-12906)
[dm] [movie] AV1: dav1d decodes the stream instead
[dm] [movie] AV1: dav1d 1.5.4 decoding, 4 threads on 3 frames at once (a stream VideoToolbox refused)
Assertion failed: (a->vs && !a->soft), function vt_session_lifecycle, file t_codec_video.c, line 111.
make: *** [run] Abort trap: 6
##[error]Process completed with exit code 2.
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44250625766 — dark (conclusion: `failure`), 2026-11-18 06:20 UTC
- Dark since: 2026-11-16 07:54 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)` → `clang-tidy against the baseline`
- Likely cause: clang-analyzer-unix.cstring.UninitializedRead: 0 findings, the baseline still has 1: shrink it (python3 dm/tools/lint_c.py tidy --update) (dm/gfx/tests/t_primitive_restart.m)

<details><summary>End of the job log</summary>

```
[348/352] dm/host/tests/t_vorbis.c: 0 findings
[349/352] dm/host/tests/t_watch_sample.c: 0 findings
[350/352] dm/host/tests/t_web_stack.c: 0 findings
[351/352] dm/host/thread.c: 1 findings
[352/352] dm/host/web_apple.m: 0 findings
LLVM 23.1.4: 176 findings in 61 files, 103 file/check pairs
dm/gfx/tests/t_geometry.m: clang-diagnostic-error: 2 findings, the baseline has 0
##[error]use of undeclared identifier 'g_mdi_v'; did you mean 'g_mdx_n'? [clang-diagnostic-error] (2 in this file, the baseline has 0)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
