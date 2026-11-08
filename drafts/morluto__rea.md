<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 441617 · **Generated:** 2026-11-08T06:41:39.628Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CodeQL production", "CI", "Mutation sweep")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42453396120 — dark (conclusion: `skipped`), 2026-11-08 06:06 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42450867801 — dark (conclusion: `failure`), 2026-11-08 05:27 UTC
- Dark since: 2026-11-07 08:56 UTC (first run of the current streak)
- Job / step: `Deep static checks` → `Run deep static checks`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)

<details><summary>End of the job log</summary>

```
> node scripts/clean-build-output.mjs && node scripts/run-typescript.mjs -p tsconfig.build.json && node scripts/record-catalog-digests.mjs && node scripts/record-mcp-catalog.mjs && node scripts/bundle-runtime.mjs
[INEFFECTIVE_DYNAMIC_IMPORT] dist/dotnet/ManagedStaticProvider.js is dynamically imported by dist/composition/auxiliaryAnalysisProviders.js but also statically imported by dist/composition/binary.js, dynamic import will…
[INEFFECTIVE_DYNAMIC_IMPORT] dist/composition/sqlite.js is dynamically imported by dist/cli/desktopCaptureCommands.js but also statically imported by dist/cli/sqliteCommands.js, dynamic import will not move module into …
[INEFFECTIVE_DYNAMIC_IMPORT] dist/composition/webNetworkCaptures.js is dynamically imported by dist/cli/environmentCommands.js but also statically imported by dist/cli/webNetworkCaptureCommands.js, dynamic import will n…
[INEFFECTIVE_DYNAMIC_IMPORT] dist/dotnet/ManagedStaticProvider.js is dynamically imported by dist/composition/auxiliaryAnalysisProviders.js but also statically imported by dist/composition/binary.js, dynamic import will…
knip
cache miss, executing 4b84be927f8c33f4
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)
```

</details>

### Mutation sweep (`.github/workflows/mutation.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42448387126 — dark (conclusion: `cancelled`), 2026-11-08 04:50 UTC
- Dark since: 2026-11-08 04:50 UTC (first run of the current streak)
- Job / step: `Mutation sweep (reverse-tools)` → `Run the complete configuration`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
Mutation testing 96% (elapsed: ~55m, remaining: ~2m) 778/843 tested (147 survived, 2 timed out)
Mutation testing 96% (elapsed: ~55m, remaining: ~2m) 779/843 tested (148 survived, 2 timed out)
Mutation testing 96% (elapsed: ~55m, remaining: ~1m) 780/843 tested (149 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 783/843 tested (151 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 785/843 tested (152 survived, 2 timed out)
Mutation testing 96% (elapsed: ~56m, remaining: ~1m) 788/843 tested (153 survived, 2 timed out)
Mutation testing 97% (elapsed: ~56m, remaining: ~1m) 789/843 tested (154 survived, 2 timed out)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
