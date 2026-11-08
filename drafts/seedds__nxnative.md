<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 13546 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "lint-c", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42470778238 — dark (conclusion: `failure`), 2026-11-08 10:17 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
==2487== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 5 ChangeBit-ChangeBinInt-EraseBytes-CrossOver-CMP- DE: "NARC"-; base unit: ab64bd12b0f167a0435ff755b2125e02dc1ab6eb
0x4e,0x41,0x52,0x43,0xc7,
NARC\307
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-b898503eb8d1f4212855f1b6a9ca4825aff09026
Base64: TkFSQ8c=
##[error]shader_split: ==finding== struct.error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42458632022 — dark (conclusion: `cancelled`), 2026-11-08 07:23 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42476873288 — dark (conclusion: `cancelled`), 2026-11-08 11:41 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
