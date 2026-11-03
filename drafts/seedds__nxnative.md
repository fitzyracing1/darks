<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 11584 · **Generated:** 2026-11-03T06:44:54.436Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("fuzz", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

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

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41587153978 — dark (conclusion: `cancelled`), 2026-11-03 06:00 UTC
- Dark since: 2026-11-03 00:57 UTC (first run of the current streak)
- Job / step: `Unsigned iOS app (synthetic modules, Swift and link)`
- Likely cause: Canceling since a higher priority waiting request for tests-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
