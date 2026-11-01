<!-- dark-draft: morluto/rea -->
<!-- draft-state: resolved -->
# Upstream issue draft: morluto/rea

- **Status:** resolved — lit again (2026-11-01); nothing to file
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 415543 · **Generated:** 2026-11-01T00:58:31.984Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/41252596621 — dark (conclusion: `failure`), 2026-10-31 23:27 UTC
- Dark since: 2026-10-31 18:12 UTC (first run of the current streak)
- Job / step: `Deep static checks` → `Run deep static checks`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)

<details><summary>End of the job log</summary>

```
[INEFFECTIVE_DYNAMIC_IMPORT] dist/dotnet/ManagedStaticProvider.js is dynamically imported by dist/composition/auxiliaryAnalysisProviders.js but also statically imported by dist/composition/binary.js, dynamic import will…
knip
cache miss, executing 508ef4f0a46683a1
> rea-agents@6.8.0 knip
> knip --cache
Unused exported types (1)
DarwinHelperCache  type  src/process/DarwinHelperCache.ts:465:13
##[error]command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run knip exited (1)
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
