<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 8287 · **Generated:** 2026-11-24T12:41:57.971Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Stable release gap audit" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Stable release gap audit** workflow (`.github/workflows/release-gap-audit.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/45147003049 — dark (conclusion: `failure`), 2026-11-23 09:26 UTC
- Dark since: 2026-11-09 09:25 UTC (first run of the current streak)
- Job / step: `audit` → `Compare published stable releases with main`
- Likely cause: - **Pi npm latest: gap after pi-v0.8.0.** 9 relevant path(s) changed on main: '"plugin/pi/cli.js"', '"plugin/pi/index.ts"', '"plugin/pi/runtime-contract.js"', '"plugin/pi/test/index-source.test.mjs"', '"plugin/pi/test/p…

<details><summary>End of the job log</summary>

```
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 56.580221
## Stable release gap audit
Path changes are a release-lag signal, not proof of a fix.
- **Pi npm latest: gap after pi-v0.8.0.** 9 relevant path(s) changed on main: `"plugin/pi/cli.js"`, `"plugin/pi/index.ts"`, `"plugin/pi/runtime-contract.js"`, `"plugin/pi/test/index-source.test.mjs"`, `"plugin/pi/test/p…
- **Go latest stable GitHub Release: gap after v3.7.2.** 151 relevant path(s) changed on main: `"cmd/engram/cloud.go"`, `"cmd/engram/cloud_runtime_auth_integration_test.go"`, `"cmd/engram/cloud_runtime_e2e_test.go"`, `"…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
