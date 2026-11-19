<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90938 · **Generated:** 2026-11-19T18:39:01.765Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44586778383 — dark (conclusion: `failure`), 2026-11-19 18:20 UTC
- Dark since: 2026-11-19 18:20 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: 1: operation timed out

<details><summary>End of the job log</summary>

```
node: v24.22.2
npm: 11.19.1
yarn: 1.22.22
railway service list --project 29419572-0b0d-437f-8e71-4fa68daf514f --environment production --json failed (1): Failed to fetch: error sending request for url (https://backboard.railway.com/graphql/v2)
Caused by:
    0: error sending request for url (https://backboard.railway.com/graphql/v2)
    1: operation timed out
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
