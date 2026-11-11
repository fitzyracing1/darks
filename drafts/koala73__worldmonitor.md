<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90491 · **Generated:** 2026-11-11T18:38:34.380Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-11
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-11. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/43076526247 — dark (conclusion: `failure`), 2026-11-11 18:18 UTC
- Dark since: 2026-11-11 18:18 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - seed-conflict-intel [BUILD_FAILED] the build for c301be584 failed, so 6ffc5f48d is still serving; nothing has built since, so run 'railway redeploy --service seed-conflict-intel --from-source' to rebuild at head

<details><summary>End of the job log</summary>

```
yarn: 1.22.22
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 92 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Deepened 1 service history read(s) the 50-record window could not settle (deep window 400): 1 reclassified, 0 failed, 0 unchanged.
Railway deploy-drift check: head=51f8a98a9 source=--head vs-origin-main=exact grace=f4565eff1 services=92 {"CURRENT_FOR_CLOSURE":89,"CURRENT":2,"BUILD_FAILED":1}
Railway deploy-drift check found 1 service(s) with deployment or source-verification problems:
- seed-conflict-intel [BUILD_FAILED] the build for c301be584 failed, so 6ffc5f48d is still serving; nothing has built since, so run `railway redeploy --service seed-conflict-intel --from-source` to rebuild at head
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
