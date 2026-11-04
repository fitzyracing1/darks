<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 429174 · **Generated:** 2026-11-04T12:42:48.646Z
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

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41825332008 — dark (conclusion: `skipped`), 2026-11-04 11:58 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41829935194 — dark (conclusion: `failure`), 2026-11-04 12:30 UTC
- Dark since: 2026-11-04 11:22 UTC (first run of the current streak)
- Job / step: `Deep static checks` → `Run deep static checks`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run compile exited (2)

<details><summary>End of the job log</summary>

```
> rea-agents@6.8.0 scan:todos
> node scripts/scan-todos.mjs
No tech-debt markers found.
compile
cache miss, executing 876426fc6fb0ae37
> rea-agents@6.8.0 compile
> node scripts/clean-build-output.mjs && node scripts/run-typescript.mjs -p tsconfig.build.json && node scripts/record-catalog-digests.mjs && node scripts/record-mcp-catalog.mjs && node scripts/bundle-runtime.mjs
##[error]src/domain/javascript/electronCallPathBlockPrefixes.ts(2,10): error TS2300: Duplicate identifier 'childNodes'.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
