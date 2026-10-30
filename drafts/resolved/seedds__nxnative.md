<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: resolved -->
# Upstream issue draft: seedds/nxnative

- **Status:** resolved — lit again (2026-10-30); nothing to file
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 9872 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "fuzz" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **fuzz** workflow (`.github/workflows/fuzz.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/40853457362 — dark (conclusion: `failure`), 2026-10-29 09:55 UTC
- Dark since: 2026-10-29 09:55 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: shader_split: ==finding== zlib.error@shader_split.py:monolith_shaders>monolith_cmp_data

<details><summary>End of the job log</summary>

```
Traceback (most recent call last):
  File "/opt/hostedtoolcache/Python/3.14.9/x64/lib/python3.14/logging/__init__.py", line 891, in _removeHandlerRef
TypeError: 'NoneType' object is not callable
==2321== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 4 ShuffleBytes-ChangeASCIIInt-InsertRepeatedBytes-PersAutoDict- DE: "cmp\000zlib"-; base unit: c3ae1c0368d74f2e8c5a3fdd92b70742be8265d5
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-8b7ae3d571b5bb18b10d95516081066d0785a0b7
##[error]shader_split: ==finding== zlib.error@shader_split.py:monolith_shaders>monolith_cmp_data
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
