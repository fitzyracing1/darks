<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90951 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Feed Validation" workflow failing on main since 2026-11-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Feed Validation** workflow (`.github/workflows/feed-validation.yml`) on `main` has been failing since 2026-11-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44643770499 — dark (conclusion: `failure`), 2026-11-20 00:11 UTC
- Dark since: 2026-11-20 00:11 UTC (first run of the current streak)
- Job / step: `validate` → `Run npm run test:feeds:ci`
- Likely cause: The Times Group Malawi              | Timeout (15s)        | https://times.mw/feed/

<details><summary>End of the job log</summary>

```
  Liechtensteiner Vaterland           | https://news.google.com/rss/search?q=site%3Avaterland.li+when%3A7d&hl=en-US&gl=US&ceid=US%3Aen
  Los Tiempos                         | https://news.google.com/rss/search?q=site%3Alostiempos.com+when%3A7d&hl=en-US&gl=US&ceid=US%3Aen
  Reuters — St. Kitts & Nevis         | https://news.google.com/rss/search?q=site%3Areuters.com+%28%22St.+Kitts+%26+Nevis%22%29+when%3A30d&hl=en-US&gl=US&ceid=US%3Aen
  The UB Post                         | https://news.google.com/rss/search?q=site%3Aubpost.mn+when%3A7d&hl=en&gl=US&ceid=US%3Aen
  Le Quotidien Luxembourg             | https://news.google.com/rss/search?q=site%3Alequotidien.lu+when%3A7d&hl=en-US&gl=US&ceid=US%3Aen
  Bellingcat                          | https://news.google.com/rss/search?q=site%3Abellingcat.com%20when%3A7d&hl=en-US&gl=US&ceid=US:en
Summary: 1300 OK, 13 stale, 76 dead, 30 empty, 1 skipped
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
