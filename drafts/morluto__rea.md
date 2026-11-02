<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 418752 · **Generated:** 2026-11-02T00:55:52.981Z
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

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41340724009 — dark (conclusion: `skipped`), 2026-11-01 19:14 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41362198167 — dark (conclusion: `failure`), 2026-11-01 23:27 UTC
- Dark since: 2026-11-01 16:56 UTC (first run of the current streak)
- Job / step: `Static checks` → `Run npm run check:ci:fast`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run format:check exited (1)

<details><summary>End of the job log</summary>

```
Finished in 4335ms on 6700 files using 4 threads.
cache miss, executing 4eb618f9f6934218
> rea-agents@6.8.0 lint
> node scripts/ci/static-check-report.mjs lint && npm run verify:module-boundaries
cache miss, executing 3a60e074759ca130
> rea-agents@6.8.0 typecheck
> node scripts/run-typescript.mjs --noEmit
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run format:check exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
