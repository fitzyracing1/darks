<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 15605 · **Generated:** 2026-11-15T12:40:30.415Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/43705921501 — dark (conclusion: `failure`), 2026-11-15 10:49 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts

<details><summary>End of the job log</summary>

```
==2552== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 3 InsertByte-ShuffleBytes-PersAutoDict- DE: "PACx403L"-; base unit: 3e2fa555d7e8b1f3aec95240ff374d5f0b762f86
0x50,0x41,0x43,0x78,0x34,0x30,0x33,0x4c,0x59,0x61,0x7a,0x0,0x10,0x30,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x1,0x0,0xeb,0x0,0x39,0x0,0xe1,0x2b,0x0,0x0,0x0,0x0,0x0,
PACx403LYaz\000\0200\000\000\000\000\000\000\000\000\001\000\353\0009\000\341+\000\000\000\000\000
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-b364bb2ce385c4074e7afc07ae25dd07f8fb6e77
Base64: UEFDeDQwM0xZYXoAEDAAAAAAAAAAAAEA6wA5AOErAAAAAAA=
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/43714030837 — dark (conclusion: `cancelled`), 2026-11-15 12:28 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/43714030750 — dark (conclusion: `cancelled`), 2026-11-15 12:28 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
