<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 13946 · **Generated:** 2026-11-09T12:43:14.164Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42609173666 — dark (conclusion: `failure`), 2026-11-09 11:27 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
==2633== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 3 ChangeByte-ChangeBit-CMP- DE: "NARC"-; base unit: 9ec647b540cbabcf9f4f9b8f7a30e7e1ab8e6d8e
0x4e,0x41,0x52,0x43,0x4e,0x44,0x53,0x52,0xfe,0xff,0x1d,
NARCNDSR\376\377\035
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-728420c951c362a4d18af2ba7e46b5b4879cc9e5
Base64: TkFSQ05EU1L+/x0=
##[error]shader_split: ==finding== struct.error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42610506480 — dark (conclusion: `cancelled`), 2026-11-09 11:37 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42610506462 — dark (conclusion: `cancelled`), 2026-11-09 11:37 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
