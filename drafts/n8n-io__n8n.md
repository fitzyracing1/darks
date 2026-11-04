<!-- dark-draft: n8n-io/n8n -->
<!-- draft-state: ready -->
# Upstream issue draft: n8n-io/n8n

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/n8n-io/n8n/issues/new
- **Stars:** 209535 · **Generated:** 2026-11-04T12:42:48.646Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** latest run was skipped, not failed — probably not worth filing

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Security: Sync from Public", "Docker: Build and Push")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Security: Sync from Public (`.github/workflows/sec-sync-public-to-private.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/41819147935 — dark (conclusion: `skipped`), 2026-11-04 11:10 UTC
- Dark since: 2026-10-13 15:19 UTC (first run of the current streak)
- Likely cause: run skipped

### Docker: Build and Push (`.github/workflows/docker-build-push.yml`)

- Latest run on `master`: https://github.com/n8n-io/n8n/actions/runs/41746902505 — dark (conclusion: `failure`), 2026-11-04 00:27 UTC
- Dark since: 2026-11-04 00:27 UTC (first run of the current streak)
- Job / step: `Security Scan (n8n-pc) / Security - Scan Docker Image With Trivy` → `Run Trivy vulnerability scanner`
- Likely cause: aquasecurity/trivy info found version: 0.69.2 for v0.69.2/Linux/64bit

<details><summary>End of the job log</summary>

```
branch 'main' set up to track 'origin/main'.
4918c342b06b49892d6d4db43f1446f9b25be272
##[end-action id=trivy_scan.__aquasecurity_setup-trivy.__actions_checkout;outcome=success;conclusion=success;duration_ms=1282]
##[start-action display=Install Trivy;id=trivy_scan.__aquasecurity_setup-trivy.__run_2]
installing Trivy binary
aquasecurity/trivy info checking GitHub for tag 'v0.69.2'
aquasecurity/trivy info found version: 0.69.2 for v0.69.2/Linux/64bit
##[error]Process completed with exit code 6.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining n8n!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
