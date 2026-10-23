<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89230 · **Generated:** 2026-10-23T01:13:37.909Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-10-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-10-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/39881128818 — dark (conclusion: `failure`), 2026-10-23 00:56 UTC
- Dark since: 2026-10-23 00:56 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: Railway deploy-drift check: head=165615161 source=--head vs-origin-main=exact grace=165615161 services=88 {"CURRENT_FOR_CLOSURE":84,"CURRENT":2,"BUILD_FAILED":2}

<details><summary>End of the job log</summary>

```
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 88 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check found 2 service(s) with deployment or source-verification problems:
- seed-bundle-resilience [BUILD_FAILED] the build for 272450272 failed, so bb18957ee is still serving; nothing has built since, so run `railway redeploy --service seed-bundle-resilience --from-source` to rebuild at head
- seed-commodity-quotes [BUILD_FAILED] the build for 272450272 failed, so bb18957ee is still serving; nothing has built since, so run `railway redeploy --service seed-commodity-quotes --from-source` to rebuild at head
Railway deploy-drift check: head=165615161 source=--head vs-origin-main=exact grace=165615161 services=88 {"CURRENT_FOR_CLOSURE":84,"CURRENT":2,"BUILD_FAILED":2}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
