<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16133 · **Generated:** 2026-11-18T18:38:42.583Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44296411599 — dark (conclusion: `failure`), 2026-11-18 11:37 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2721== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 1 CMP- DE: "\000\000\000\000\000\000\000H"-; base unit: 44c9de156135ea0600c1e489717a05af64b57ab8
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-7a577f96f2d5059085b70e469b2a6db97eb1edeb
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44369801987 — dark (conclusion: `cancelled`), 2026-11-18 18:26 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44363579654 — dark (conclusion: `cancelled`), 2026-11-18 17:53 UTC
- Dark since: 2026-11-16 07:54 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
