<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89592 · **Generated:** 2026-10-26T18:57:58.513Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/40379534956 — dark (conclusion: `failure`), 2026-10-26 18:38 UTC
- Dark since: 2026-10-24 18:27 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead

<details><summary>End of the job log</summary>

```
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Railway operational-config audit found 1 drifted service(s):
- seed-notam-nms: source checkSuites true != false
Read 89 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check: head=c0c5d0f45 source=--head vs-origin-main=exact grace=c0c5d0f45 services=89 {"CURRENT_FOR_CLOSURE":87,"CURRENT":2}
Every service this repository deploys is running c0c5d0f45 or building it.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
