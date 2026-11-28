<!-- dark-draft: oraios/serena -->
<!-- draft-state: ready -->
# Upstream issue draft: oraios/serena

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/oraios/serena/issues/new
- **Stars:** 31759 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/pytest.yml`) on `main` has been failing since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/oraios/serena/actions/runs/46028715741 — dark (conclusion: `failure`), 2026-11-27 15:52 UTC
- Dark since: 2026-11-27 15:52 UTC (first run of the current streak)
- Job / step: `jvm (windows-latest)` → `Test with pytest`
- Likely cause: === 2 failed, 184 passed, 29 skipped, 2637 deselected in 381.92s (0:06:21) ====

<details><summary>End of the job log</summary>

```
FAILED test/serena/test_ls_file_sync.py::test_new_csharp_file_is_folded_into_compilation - AssertionError: new file was analyzed as a standalone document instead of being folded into the already-loaded project (phantom …
assert not True
 +  where True = any(<generator object test_new_csharp_file_is_folded_into_compilation.<locals>.<genexpr> at 0x0000019CB3BDEDC0>)
FAILED test/solidlsp/vbnet/test_vbnet_basic.py::TestVBNetLanguageServer::test_find_referencing_symbols[vbnet] - solidlsp.ls_exceptions.SolidLSPException: Error processing request textDocument/references with params:
{'textDocument': {'uri': 'file:///D:/a/serena/serena/test/resources/repos/vbnet/test_repo/Module1.vb'}, 'position': {'line': 14, 'character': 25}, 'context': {'includeDeclaration': False}}
(caused by Unexpected null - file FindAllReferencesHandler.cs line 55 (-32000))
=== 2 failed, 184 passed, 29 skipped, 2637 deselected in 381.92s (0:06:21) ====
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining serena!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
