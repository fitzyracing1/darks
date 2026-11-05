<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 432831 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL production", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42012360653 — dark (conclusion: `skipped`), 2026-11-05 10:38 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42019093696 — dark (conclusion: `failure`), 2026-11-05 11:27 UTC
- Dark since: 2026-11-05 08:52 UTC (first run of the current streak)
- Job / step: `Static checks` → `Run npm run check:ci:fast`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run lint exited (1)

<details><summary>End of the job log</summary>

```
All matched files use the correct format.
Finished in 5554ms on 6936 files using 4 threads.
cache miss, executing 7ded44eca3a41f93
> rea-agents@6.8.0 typecheck
> node scripts/run-typescript.mjs --noEmit
lint
cache miss, executing e27a246b06446fd0
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run lint exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
