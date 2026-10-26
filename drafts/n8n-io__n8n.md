<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 208639 · **Generated:** 2026-10-26T14:20:59.370Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "CI: Master (Build, Test, Lint)")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/40334319799 — dark (conclusion: `skipped`), 2026-10-26 13:51 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### CI: Master (Build, Test, Lint) (`.github/workflows/ci-master.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/40333708457 — dark (conclusion: `failure`), 2026-10-26 13:47 UTC
- Dark since: 2026-10-26 06:50 UTC (first run of the current streak)
- Job / step: `Verify single-instance deps (npm-install) / verify` → `Verify npm-install closure (changed packages)`
- Likely cause: {"error":"Command failed: npm install --no-audit --no-fund --ignore-scripts --no-package-lock"}

<details><summary>End of the job log</summary>

```
npm error notsup Valid libc:  musl
npm error notsup Actual libc: glibc
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-26T13_50_15_091Z-debug-0.log
npm install failed — its output is in the "npm install output" group above.
{"error":"Command failed: npm install --no-audit --no-fund --ignore-scripts --no-package-lock"}
ℹ Safe-chain: Some package versions were suppressed during package metadata resolution due to minimum package age.
  To disable this check, use: --safe-chain-skip-minimum-package-age
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
