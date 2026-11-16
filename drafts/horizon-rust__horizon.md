<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 10252 · **Generated:** 2026-11-16T00:59:22.034Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "mojang republish" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **mojang republish** workflow (`.github/workflows/mojang-republish.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43782588004 — dark (conclusion: `failure`), 2026-11-16 00:48 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: python3: can't open file '/var/lib/gha/light-7/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory

<details><summary>End of the job log</summary>

```
HEAD is now at 4626921895 tooling(claims): an issue's author has the first hour to claim it (#17142)
  origin/main
4626921895df51521be64d485ee763412de2917c
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
4626921895df51521be64d485ee763412de2917c
python3: can't open file '/var/lib/gha/light-7/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
