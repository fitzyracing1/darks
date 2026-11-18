<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90852 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Feed Validation" workflow failing on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Feed Validation** workflow (`.github/workflows/feed-validation.yml`) on `main` has been failing since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44205858876 — dark (conclusion: `failure`), 2026-11-18 00:12 UTC
- Dark since: 2026-11-18 00:12 UTC (first run of the current streak)
- Job / step: `validate` → `Run npm run test:feeds:ci`
- Likely cause: FAIL: 4 feed(s) violate the CI guardrails (allowlist drift or plaintext URL). Fix shared/news-catalog.json and/or the 4 allowlist mirrors (shared/rss-allowed-domains.json, .cjs, scripts/shared/rss-allowed-domains.json, …

<details><summary>End of the job log</summary>

```
  Reuters — St. Kitts & Nevis         | https://news.google.com/rss/search?q=site%3Areuters.com+%28%22St.+Kitts+%26+Nevis%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen
  Samoa Global News                   | https://samoaglobalnews.com/feed/
  The St. Kitts-Nevis Observer        | https://www.thestkittsnevisobserver.com/feed/
  WINNFM 98.9                         | https://winnfm.com/feed/
  Bellingcat                          | https://news.google.com/rss/search?q=site%3Abellingcat.com%20when%3A7d&hl=en-US&gl=US&ceid=US:en
FAIL: 4 feed(s) violate the CI guardrails (allowlist drift or plaintext URL). Fix shared/news-catalog.json and/or the 4 allowlist mirrors (shared/rss-allowed-domains.json, .cjs, scripts/shared/rss-allowed-domains.json, …
Summary: 1255 OK, 11 stale, 89 dead, 40 empty, 1 skipped
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
