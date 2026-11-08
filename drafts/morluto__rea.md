<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 441042 · **Generated:** 2026-11-08T00:55:40.555Z
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

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42415903245 — dark (conclusion: `skipped`), 2026-11-07 21:26 UTC
- Dark since: 2026-11-01 07:24 UTC (first run of the current streak)
- Likely cause: run skipped

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/42425358575 — dark (conclusion: `failure`), 2026-11-07 23:27 UTC
- Dark since: 2026-11-07 08:56 UTC (first run of the current streak)
- Job / step: `Deep static checks` → `Run deep static checks`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)

<details><summary>End of the job log</summary>

```
[INEFFECTIVE_DYNAMIC_IMPORT] dist/dotnet/ManagedStaticProvider.js is dynamically imported by dist/composition/auxiliaryAnalysisProviders.js but also statically imported by dist/composition/binary.js, dynamic import will…
knip
cache miss, executing 21af7ae92e873c8c
> rea-agents@6.8.0 knip
> knip --cache
Unused files (1)
scripts/verify-real-ghidra-function-bundle.mjs
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
