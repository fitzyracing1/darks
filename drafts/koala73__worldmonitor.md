<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89701 · **Generated:** 2026-10-28T12:44:35.285Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40687926827 — dark (conclusion: `failure`), 2026-10-28 12:27 UTC
- Dark since: 2026-10-28 12:27 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - ais-relay [BUILD_FAILED] the build for 6d5d1f081 failed, so 5557f93ea is still serving; nothing has built since, so run 'railway redeploy --service ais-relay --from-source' to rebuild at head

<details><summary>End of the job log</summary>

```
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 90 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check found 1 service(s) with deployment or source-verification problems:
Railway deploy-drift check: head=6d5d1f081 source=--head vs-origin-main=exact grace=5557f93ea services=90 {"BUILD_FAILED":1,"CURRENT_FOR_CLOSURE":57,"CURRENT":32}
- ais-relay [BUILD_FAILED] the build for 6d5d1f081 failed, so 5557f93ea is still serving; nothing has built since, so run `railway redeploy --service ais-relay --from-source` to rebuild at head
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
