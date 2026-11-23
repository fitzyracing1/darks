<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-11-23); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 91094 · **Generated:** 2026-11-23T12:44:06.505Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow getting cancelled on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-11-23. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/45173637903 — dark (conclusion: `cancelled`), 2026-11-23 12:22 UTC
- Dark since: 2026-11-23 12:08 UTC (first run of the current streak)
- Job / step: `unit-shard (4)` → `Data tests without built output`
- Likely cause: Canceling since a higher priority waiting request for test-main exists

<details><summary>End of the job log</summary>

```
✔ no fresh AND no last-good data → null span → STALE_CONTENT (sustained outage) (0.250229ms)
✔ empty fresh array is treated as "no fresh" and falls back to preserved (0.39996ms)
✔ undatable preserved entries are skipped; a valid one still yields a span (0.239318ms)
✔ relay outcome classes keep throttling and auth separate from faults (1.933784ms)
✔ served coverage degrades below the fixed aviation/RSS floors and recovers at the floor (0.382107ms)
✔ RSS backoff is exponential with jitter but capped so fallback exhaustion stops retry growth (0.568886ms)
✔ served coverage is bounded and remains explicit when no request was observed (1.165344ms)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
