<!-- dark-draft: oraios/serena -->
<!-- draft-state: ready -->
# Upstream issue draft: oraios/serena

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/oraios/serena/issues/new
- **Stars:** 31381 · **Generated:** 2026-11-15T00:56:28.163Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/pytest.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/oraios/serena/actions/runs/43600980825 — dark (conclusion: `failure`), 2026-11-14 13:40 UTC
- Dark since: 2026-11-09 17:16 UTC (first run of the current streak)
- Job / step: `niche (ubuntu-latest)` → `Install Perl::LanguageServer`
- Likely cause: Building Coro-6.57 ... FAIL

<details><summary>End of the job log</summary>

```
Successfully installed Canary-Stability-2013
Configuring Coro-6.57 ... OK
! Installing Coro failed. See /home/runner/.cpanm/work/1794664234.28158/build.log for details. Retry with --force to force install it.
! Installing the dependencies failed: Module 'Coro' is not installed
! Bailing out the installation for Perl-LanguageServer-v2.6.2.
Building Coro-6.57 ... FAIL
23 distributions installed
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining serena!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
