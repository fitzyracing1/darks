<!-- dark-draft: affaan-m/ECC -->
<!-- draft-state: resolved -->
# Upstream issue draft: affaan-m/ECC

- **Status:** resolved — lit again (2026-11-07); nothing to file
- **Would be filed at:** https://github.com/affaan-m/ECC/issues/new
- **Stars:** 298421 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Supply-Chain Watch" workflow failing on main since 2026-11-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Supply-Chain Watch** workflow (`.github/workflows/supply-chain-watch.yml`) on `main` has been failing since 2026-11-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/affaan-m/ECC/actions/runs/42270253647 — dark (conclusion: `failure`), 2026-11-06 18:23 UTC
- Dark since: 2026-11-06 18:23 UTC (first run of the current streak)
- Job / step: `IOC watch` → `Verify registry signatures and advisories`
- Likely cause: npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-06T18_23_37_561Z-debug-0.log

<details><summary>End of the job log</summary>

```
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run `npm audit` for details.
npm error code EMISSINGSIGNATUREKEY
npm error @x402/core@2.29.0 has attestations but no corresponding public key(s) can be found
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-06T18_23_37_561Z-debug-0.log
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ECC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
