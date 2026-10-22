<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: ready -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 256186 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Docker Build, Test, and Publish", "auto-fix lint issues & formatting", ".github/workflows/ci.yaml")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Docker Build, Test, and Publish (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39830954142 — dark (conclusion: `cancelled`), 2026-10-22 18:23 UTC
- Dark since: 2026-10-13 19:04 UTC (first run of the current streak)
- Likely cause: run cancelled

### auto-fix lint issues & formatting (`.github/workflows/js-autofix.yml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39830954111 — dark (conclusion: `cancelled`), 2026-10-22 18:23 UTC
- Dark since: 2026-10-22 09:17 UTC (first run of the current streak)
- Job / step: `Generate eslint --fix patch`
- Likely cause: The job has exceeded the maximum execution time of 5m0s

<details><summary>End of the job log</summary>

```
(node:3883) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabili…
Uploaded bytes 255986
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact zip is 4fcff08799ae03072ee95af4cc9f775b59910143435ad1f38a8f965a61ce3a76
Finalizing artifact upload
Artifact js-fix-patch.zip successfully finalized. Artifact ID 12449266036
Artifact js-fix-patch has been successfully uploaded! Final size is 255986 bytes. Artifact ID is 12449266036
Artifact download URL: https://github.com/NousResearch/hermes-agent/actions/runs/39830954111/artifacts/12449266036
```

</details>

### .github/workflows/ci.yaml (`.github/workflows/ci.yaml`)

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/39831821767 — dark (conclusion: `failure`), 2026-10-22 18:29 UTC
- Dark since: 2026-10-22 18:29 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
