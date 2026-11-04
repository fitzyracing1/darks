<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 11880 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("fuzz", "tests", "lint-c")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41622472781 — dark (conclusion: `failure`), 2026-11-03 10:49 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:ndsr_shaders>records_from

<details><summary>End of the job log</summary>

```
==2594== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 1 InsertRepeatedBytes-; base unit: e4ef11e5e8ede68b9a500ea1147ab924bdcbfef3
0x4e,0x44,0x53,0x52,0xb9,0x53,0x42,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d,0x8d…
NDSR\271SB\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\215\…
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-71c6596118dbbfd0709f451d43b720bc3fc3ba40
Base64: TkRTUrlTQo2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NsVM=
##[error]shader_split: ==finding== struct.error@shader_split.py:ndsr_shaders>records_from
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41746013254 — dark (conclusion: `cancelled`), 2026-11-04 00:19 UTC
- Dark since: 2026-11-03 00:57 UTC (first run of the current streak)
- Job / step: `Build check (Mac host, gfx tests, iOS sources)`
- Likely cause: Canceling since a higher priority waiting request for tests-refs/heads/main exists

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/41742974965 — dark (conclusion: `cancelled`), 2026-11-03 23:55 UTC
- Dark since: 2026-11-03 15:34 UTC (first run of the current streak)
- Job / step: `clang-tidy (ratchet)`
- Likely cause: Canceling since a higher priority waiting request for lint-c-refs/heads/main exists

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
