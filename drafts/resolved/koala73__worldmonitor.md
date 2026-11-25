<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-11-25); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91147 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- MCP Tool Canary (`.github/workflows/mcp-tool-canary.yml`): [issue #11251](https://github.com/koala73/worldmonitor/issues/11251) "MCP tool canary: production tool failures"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Feed Validation", "Railway Native Deploy Health")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Feed Validation (`.github/workflows/feed-validation.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45516223051 — dark (conclusion: `failure`), 2026-11-25 00:12 UTC
- Dark since: 2026-11-25 00:12 UTC (first run of the current streak)
- Job / step: `validate` → `Run npm run test:feeds:ci`
- Likely cause: FAIL: 1 feed(s) violate the CI guardrails (allowlist drift or plaintext URL).

<details><summary>End of the job log</summary>

```
  Liechtensteiner Vaterland           | https://news.google.com/rss/search?q=site%3Avaterland.li+when%3A7d&hl=en-US&gl=US&ceid=US%3Aen
  Los Tiempos                         | https://news.google.com/rss/search?q=site%3Alostiempos.com+when%3A7d&hl=en-US&gl=US&ceid=US%3Aen
  Reuters — St. Kitts & Nevis         | https://news.google.com/rss/search?q=site%3Areuters.com+%28%22St.+Kitts+%26+Nevis%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen
  The UB Post                         | https://news.google.com/rss/search?q=site%3Aubpost.mn+when%3A7d&hl=en&gl=US&ceid=US%3Aen
  State Dept                          | https://news.google.com/rss/search?q=(site%3Astate.gov%20OR%20%22State%20Department%22)%20when%3A1d&hl=en-US&gl=US&ceid=US:en
  Bellingcat                          | https://news.google.com/rss/search?q=site%3Abellingcat.com%20when%3A7d&hl=en-US&gl=US&ceid=US:en
Summary: 1300 OK, 9 stale, 73 dead, 37 empty, 1 skipped
##[error]Process completed with exit code 1.
```

</details>

### Railway Native Deploy Health (`.github/workflows/railway-deploy-drift.yml`)

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45519591254 — dark (conclusion: `failure`), 2026-11-25 00:38 UTC
- Dark since: 2026-11-25 00:38 UTC (first run of the current streak)
- Job / step: `Railway native deployment health` → `Check Railway deployment configuration and drift`
- Likely cause: - seed-webcams [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run 'railway redeploy --service seed-webcams --from-source' to rebuild at head

<details><summary>End of the job log</summary>

```
- seed-military-maritime [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-military-maritime --from-source` to rebuild at head
- seed-prediction-markets [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-prediction-markets --from-source` to rebuild at he…
- seed-regulatory-actions [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-regulatory-actions --from-source` to rebuild at he…
- seed-research [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-research --from-source` to rebuild at head
- seed-thermal-escalation [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-thermal-escalation --from-source` to rebuild at he…
- seed-unrest-events [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-unrest-events --from-source` to rebuild at head
- seed-webcams [BUILD_FAILED] the build for ad1a897c8 failed, so 9adc0a6e3 is still serving; nothing has built since, so run `railway redeploy --service seed-webcams --from-source` to rebuild at head
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
