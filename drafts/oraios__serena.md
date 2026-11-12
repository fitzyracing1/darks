<!-- dark-draft: oraios/serena -->
<!-- draft-state: ready -->
# Upstream issue draft: oraios/serena

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/oraios/serena/issues/new
- **Stars:** 31306 · **Generated:** 2026-11-12T00:55:01.455Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests** workflow (`.github/workflows/pytest.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/oraios/serena/actions/runs/42666688213 — dark (conclusion: `failure`), 2026-11-09 17:39 UTC
- Dark since: 2026-11-09 17:16 UTC (first run of the current streak)
- Job / step: `native (ubuntu-latest)` → `Install ccls (C/C++ Language Server)`
- Likely cause: Cache not found for input keys: go-binaries-Linux-gopls-latest

<details><summary>End of the job log</summary>

```
Reading package lists...
Building dependency tree...
Reading state information...
Package ccls is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source
E: Package 'ccls' has no installation candidate
##[error]Process completed with exit code 100.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining serena!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
