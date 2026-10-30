<!-- dark-draft: affaan-m/ECC -->
<!-- draft-state: resolved -->
# Upstream issue draft: affaan-m/ECC

- **Status:** resolved — lit again (2026-10-30); nothing to file
- **Would be filed at:** https://github.com/affaan-m/ECC/issues/new
- **Stars:** 293058 · **Generated:** 2026-10-30T12:45:05.868Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Supply-Chain Watch" workflow failing on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Supply-Chain Watch** workflow (`.github/workflows/supply-chain-watch.yml`) on `main` has been failing since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/affaan-m/ECC/actions/runs/41055871279 — dark (conclusion: `failure`), 2026-10-30 12:30 UTC
- Dark since: 2026-10-30 12:30 UTC (first run of the current streak)
- Job / step: `IOC watch` → `Verify registry signatures and advisories`
- Likely cause: 1 package has an invalid attestation:

<details><summary>End of the job log</summary>

```
found 0 vulnerabilities
audited 300 packages in 3s
299 packages have verified registry signatures
43 packages have verified attestations
1 package has an invalid attestation:
eslint-visitor-keys@3.4.3 (https://registry.npmjs.org/)
Someone might have tampered with this package since it was published on the registry!
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ECC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
