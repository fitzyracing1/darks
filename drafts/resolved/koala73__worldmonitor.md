<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-11-06); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90221 · **Generated:** 2026-11-06T00:51:57.865Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42138108060 — dark (conclusion: `failure`), 2026-11-06 00:36 UTC
- Dark since: 2026-11-05 18:20 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead

<details><summary>End of the job log</summary>

```
npm warn install-scripts
npm warn install-scripts Run `npm install -g --allow-scripts=@railway/cli` to allow these scripts once, or `npm config set allow-scripts=@railway/cli --location=user` to allow them for all global installs.
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 92 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check found 1 service(s) with deployment or source-verification problems:
Railway deploy-drift check: head=711140c8c source=--head vs-origin-main=exact grace=711140c8c services=92 {"CURRENT_FOR_CLOSURE":89,"CURRENT":2,"BEHIND":1}
- seed-market-breadth [BEHIND] running f979a9d45 from 2026-11-05T07:20:09.821Z, which predates 711140c8c and is missing 2 path(s) that reach it — no build and no rejection recorded
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
