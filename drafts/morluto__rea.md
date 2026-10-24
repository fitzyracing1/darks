<!-- dark-draft: morluto/rea -->
<!-- draft-state: ready -->
# Upstream issue draft: morluto/rea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/morluto/rea/issues/new
- **Stars:** 373265 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40047452029 — dark (conclusion: `cancelled`), 2026-10-24 00:56 UTC
- Dark since: 2026-10-22 17:37 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/morluto/rea/actions/runs/40047726148 — dark (conclusion: `failure`), 2026-10-24 01:00 UTC
- Dark since: 2026-10-24 00:49 UTC (first run of the current streak)
- Job / step: `Update release proposal` → `Run googleapis/release-please-action@5c625bfb5d1ff62eadeeb3772007f7f66fdcf071`
- Likely cause: release-please failed: API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID 7019:23E9FB:2C780FF:905DE2C:6ADC0320 and timestamp 2026-10-24 01:00:16 UTC. For more on scraping Git

<details><summary>End of the job log</summary>

```
Prepare all required actions
Getting action download info
Download action repository 'googleapis/release-please-action@5c625bfb5d1ff62eadeeb3772007f7f66fdcf071' (SHA:5c625bfb5d1ff62eadeeb3772007f7f66fdcf071)
Complete job name: Update release proposal
Running release-please version: 17.3.0
❯ Fetching release-please-config.json from branch main
❯ Fetching .release-please-manifest.json from branch main
##[error]release-please failed: API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID 7019:23E9FB:2C780FF:905DE2C:6ADC0320 and timestamp 2026-10-24 01:00:16…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining rea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
