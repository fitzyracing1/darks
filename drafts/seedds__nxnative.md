<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16008 · **Generated:** 2026-11-17T18:39:49.297Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44142606386 — dark (conclusion: `cancelled`), 2026-11-17 17:57 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44138932967 — dark (conclusion: `cancelled`), 2026-11-17 17:36 UTC
- Dark since: 2026-11-16 07:54 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
