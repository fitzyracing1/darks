<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-11-18); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90863 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44251348336 — dark (conclusion: `failure`), 2026-11-18 06:26 UTC
- Dark since: 2026-11-18 06:26 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: unexpected repository service(s): seed-comtrade-bilateral-hs4-ext

<details><summary>End of the job log</summary>

```
branch 'main' set up to track 'origin/main'.
b502d714e445ad6b92cfc88fd2ccd38d67a3bfd1
Found in cache @ /opt/hostedtoolcache/node/24.22.2/x64
node: v24.22.2
npm: 11.19.1
yarn: 1.22.22
unexpected repository service(s): seed-comtrade-bilateral-hs4-ext
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
