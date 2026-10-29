<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 406858 · **Generated:** 2026-10-29T18:41:19.911Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40921511879 — dark (conclusion: `failure`), 2026-10-29 17:27 UTC
- Dark since: 2026-10-29 05:56 UTC (first run of the current streak)
- Job / step: `Deep static checks` → `Run deep static checks`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)

<details><summary>End of the job log</summary>

```
cache miss, executing f1d88fef14cd8135
> rea-agents@6.8.0 compile
> node scripts/clean-build-output.mjs && node scripts/run-typescript.mjs -p tsconfig.build.json && node scripts/record-catalog-digests.mjs && node scripts/record-mcp-catalog.mjs && node scripts/bundle-runtime.mjs
[INEFFECTIVE_DYNAMIC_IMPORT] dist/dotnet/ManagedStaticProvider.js is dynamically imported by dist/composition/auxiliaryAnalysisProviders.js but also statically imported by dist/composition/binary.js, dynamic import will…
[INEFFECTIVE_DYNAMIC_IMPORT] dist/composition/webNetworkCaptures.js is dynamically imported by dist/cli/environmentCommands.js but also statically imported by dist/cli/webNetworkCaptureCommands.js, dynamic import will n…
[INEFFECTIVE_DYNAMIC_IMPORT] dist/dotnet/ManagedStaticProvider.js is dynamically imported by dist/composition/auxiliaryAnalysisProviders.js but also statically imported by dist/composition/binary.js, dynamic import will…
knip
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
