<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90439 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42815196322 — dark (conclusion: `failure`), 2026-11-10 12:22 UTC
- Dark since: 2026-11-09 12:24 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: Deepened 1 service history read(s) the 50-record window could not settle (deep window 400): 0 reclassified, 0 failed, 1 unchanged.

<details><summary>End of the job log</summary>

```
yarn: 1.22.22
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 92 service histories in 1 fleet page(s) (500 records), 1 direct fallback(s).
Deepened 1 service history read(s) the 50-record window could not settle (deep window 400): 0 reclassified, 0 failed, 1 unchanged.
Railway deploy-drift check found 1 service(s) with deployment or source-verification problems:
- seed-fx-yoy [BEHIND] running c7a551f1c from 2026-11-06T20:07:56.509Z, which predates 96e7cc628 and is missing 1 path(s) that reach it — no build and no rejection recorded
Railway deploy-drift check: head=0d625f757 source=--head vs-origin-main=exact grace=96e7cc628 services=92 {"PENDING_BUILD":28,"CURRENT":56,"CURRENT_FOR_CLOSURE":7,"BEHIND":1}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
