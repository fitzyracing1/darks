<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 343392 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/39419984480 — dark (conclusion: `failure`), 2026-10-20 12:08 UTC
- Dark since: 2026-10-20 11:29 UTC (first run of the current streak)
- Job / step: `Static checks` → `Run npm run check:ci`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.18.0/x64/bin/npm run jscpd exited (1)

<details><summary>End of the job log</summary>

```
JSON report saved to .cache/static-checks/jscpd/jscpd-report.json
time: 5.76s
Duplication: 3488 files, 3015 clones, 3.53% duplicated lines.
Full diagnostics: .cache/static-checks/jscpd/jscpd-report.json; npm run jscpd:details
cache miss, executing 3e97ff0fa44bb407
> rea-agents@6.7.0 typecheck
> tsc --noEmit
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.18.0/x64/bin/npm run jscpd exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
