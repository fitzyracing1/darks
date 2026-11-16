<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 15872 · **Generated:** 2026-11-16T18:39:14.787Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/43855608619 — dark (conclusion: `failure`), 2026-11-16 11:11 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts

<details><summary>End of the job log</summary>

```
==2378== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 5 InsertRepeatedBytes-ChangeBit-CMP-PersAutoDict-PersAutoDict- DE: "SHN!"-"\311\000\000\000"-"\000\000\000\000\000\000\000\030"-; base unit: cd6df2636c65ded1876148689f540dc0b4e3b500
0x50,0x41,0x43,0x78,0x34,0x30,0x33,0x4c,0x53,0x41,0x52,0x43,0x53,0x48,0x4e,0x21,0x14,0x0,0xff,0xfe,0x0,0x10,0x0,0x0,0xa8,0x2,0x0,0x7a,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x0,0x0,0x53,0x46,0x41,0x54,0xc,0x0,0x28…
PACx403LSARCSHN!\024\000\377\376\000\020\000\000\250\002\000z\000\000\000\000\000\000\000\000\000\000\030\000\000SFAT\014\000(\000e\000\000\000\000\000\000\000\000\000\000\000\000xxxxxxxxx\311\000\000\000xxxxxxxxxxxxxxx…
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-b8b84e22715f96ea955496c707130bb81e3ef3b4
Base64: UEFDeDQwM0xTQVJDU0hOIRQA//4AEAAAqAIAegAAAAAAAAAAAAAYAABTRkFUDAAoAGUAAAAAAAAAAAAAAAB4eHh4eHh4eHjJAAAAeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgAAABYDQAAAQAAAAAAAAAAAAAAAE5TSAAAAAA…
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/43928181267 — dark (conclusion: `cancelled`), 2026-11-16 18:22 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/43928182586 — dark (conclusion: `cancelled`), 2026-11-16 18:22 UTC
- Dark since: 2026-11-16 07:54 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
