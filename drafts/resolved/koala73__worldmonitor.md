<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-11-26); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91211 · **Generated:** 2026-11-26T12:43:47.548Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45819298964 — dark (conclusion: `failure`), 2026-11-26 12:24 UTC
- Dark since: 2026-11-26 12:24 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: railway status --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json timed out after 60000ms

<details><summary>End of the job log</summary>

```
branch 'main' set up to track 'origin/main'.
13b87f7ddf3721c42a6022f1a749e0c5048f9a04
Found in cache @ /opt/hostedtoolcache/node/24.22.3/x64
node: v24.22.3
npm: 11.19.1
yarn: 1.22.22
railway status --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json timed out after 60000ms
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
