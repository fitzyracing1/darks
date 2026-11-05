<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: resolved -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** resolved — lit again (2026-11-05); nothing to file
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45336 · **Generated:** 2026-11-05T00:53:42.006Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-04
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-04. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/41913999310 — dark (conclusion: `failure`), 2026-11-04 21:13 UTC
- Dark since: 2026-11-04 15:37 UTC (first run of the current streak)
- Job / step: `Check mobile Hermes bundle` → `Export iOS and Android Hermes bundles`
- Likely cause: × "pnpm recursive run" failed in /home/runner/_work/reactive-resume/

<details><summary>End of the job log</summary>

```
    ...
    at spawnAsync (/home/runner/_work/reactive-resume/reactive-resume/node_modules/.pnpm/@expo+spawn-async@1.8.0/node_modules/@expo/spawn-async/build/spawnAsync.js:9:23)
    at directlyBuildHermesBundleAsync (/home/runner/_work/reactive-resume/reactive-resume/node_modules/.pnpm/@expo+metro-config@58.0.21_expo@58.0.23_supports-color@7.2.0_typescript@7.0.2/node_modules/@expo/metro-config/…
[ELIFECYCLE] Command failed with exit code 1.
Error: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL
  × "pnpm recursive run" failed in /home/runner/_work/reactive-resume/
  │ reactive-resume/apps/mobile
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
