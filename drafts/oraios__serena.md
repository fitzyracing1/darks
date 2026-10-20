<!-- dark-draft: oraios/serena -->
<!-- draft-state: ready -->
# Upstream issue draft: oraios/serena

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/oraios/serena/issues/new
- **Stars:** 30409 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/pytest.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/oraios/serena/actions/runs/39294774877 — dark (conclusion: `failure`), 2026-10-19 17:30 UTC
- Dark since: 2026-10-19 15:51 UTC (first run of the current streak)
- Job / step: `native (windows-latest)` → `Install ccls (C/C++ Language Server)`
- Likely cause: ERROR: ccls installation failed

<details><summary>End of the job log</summary>

```
By installing, you accept licenses for the packages.
Failed to fetch results from V2 feed at 'https://community.chocolatey.org/api/v2/Packages(Id='ccls',Version='0.20220729.0')' with following message : Response status code does not indicate success: 504 (Gateway Timeout).
Need to add specific handling for exception type NuGetResolverInputException
Unable to find package 'ccls'. Existing packages must be restored before performing an install or update.
Chocolatey installed 0/0 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
ERROR: ccls installation failed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining serena!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
