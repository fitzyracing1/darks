<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 13289 · **Generated:** 2026-11-07T18:36:17.303Z
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

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42362304896 — dark (conclusion: `failure`), 2026-11-07 10:03 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== cra.Error@cra.py:narc_members

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.10/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2349== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 2 PersAutoDict-CMP- DE: "yV4\022"-"NARC"-; base unit: e0994a6d8b1a39e9e02449dff468c8d8e916748a
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-0ce1ed79030abafdbb1bd010031c8eb3c8895c08
##[error]shader_split: ==finding== cra.Error@cra.py:narc_members
```

</details>

### lint-c (`.github/workflows/lint-c.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42396749017 — dark (conclusion: `cancelled`), 2026-11-07 17:31 UTC
- Dark since: 2026-11-05 11:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/42396748927 — dark (conclusion: `cancelled`), 2026-11-07 17:31 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
