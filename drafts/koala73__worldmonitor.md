<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90405 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Railway Native Deploy Health** workflow (`.github/workflows/railway-deploy-drift.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/42616761272 — dark (conclusion: `failure`), 2026-11-09 12:24 UTC
- Dark since: 2026-11-09 12:24 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - seed-gdelt-intel [BEHIND] running bce1caeca from 2026-11-09T07:00:16.046Z, which predates fefc3e7bc and is missing 1 path(s) that reach it — no build and no rejection recorded

<details><summary>End of the job log</summary>

```
npm: 11.19.1
yarn: 1.22.22
Railway operational-config audit passed: live Railway configuration matches repository policy.
Read 92 service histories in 1 fleet page(s) (500 records), 0 direct fallback(s).
Railway deploy-drift check found 1 service(s) with deployment or source-verification problems:
Railway deploy-drift check: head=fefc3e7bc source=--head vs-origin-main=exact grace=fefc3e7bc services=92 {"CURRENT_FOR_CLOSURE":89,"CURRENT":2,"BEHIND":1}
- seed-gdelt-intel [BEHIND] running bce1caeca from 2026-11-09T07:00:16.046Z, which predates fefc3e7bc and is missing 1 path(s) that reach it — no build and no rejection recorded
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
