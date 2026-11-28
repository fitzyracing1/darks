<!-- dark-draft: MODSetter/SurfSense -->
<!-- draft-state: ready -->
# Upstream issue draft: MODSetter/SurfSense

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/MODSetter/SurfSense/issues/new
- **Stars:** 17155 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Apple Notarization Credentials" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Apple Notarization Credentials** workflow (`.github/workflows/notarization-credentials.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/MODSetter/SurfSense/actions/runs/45123805035 — dark (conclusion: `failure`), 2026-11-23 06:23 UTC
- Dark since: 2026-11-16 06:26 UTC (first run of the current streak)
- Job / step: `check` → `Ask Apple for the notarization history`
- Likely cause: Error: HTTP status code: 403. A required agreement is missing or has expired. This request requires an in-effect agreement that has not been signed or has expired. Ensure your team has signed the necessary legal agreeme…

<details><summary>End of the job log</summary>

```
Metadata: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Complete job name: check
Error: HTTP status code: 403. A required agreement is missing or has expired. This request requires an in-effect agreement that has not been signed or has expired. Ensure your team has signed the necessary legal agreeme…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining SurfSense!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
