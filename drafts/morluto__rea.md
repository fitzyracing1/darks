<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 467939 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CodeQL production", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CodeQL production (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44367752956 — dark (conclusion: `cancelled`), 2026-11-18 18:15 UTC
- Dark since: 2026-11-18 17:54 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/44367753197 — dark (conclusion: `failure`), 2026-11-18 18:15 UTC
- Dark since: 2026-11-18 17:59 UTC (first run of the current streak)
- Job / step: `Static checks` → `Run npm run check:ci:fast`
- Likely cause: command (/home/runner/work/rea/rea/) /opt/hostedtoolcache/node/24.22.1/x64/bin/npm run typecheck exited (2)

<details><summary>End of the job log</summary>

```
Checking formatting...
All matched files use the correct format.
Finished in 7616ms on 8699 files using 4 threads.
typecheck
cache miss, executing f3979f02acf0a461
> rea-agents@6.9.0 typecheck
> node scripts/run-typescript.mjs --noEmit && node scripts/run-typescript.mjs --noEmit -p tsconfig.scripts.json
##[error]tests/boundary/providers/CutterBridgeService.test.ts(108,31): error TS2322: Type 'Promise<{ sessions: never[]; bridge_directory: string; discovery_status: "no_live_bridge_found"; bridge_directory_security: "pri…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
