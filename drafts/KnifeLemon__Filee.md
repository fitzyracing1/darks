<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 21909 · **Generated:** 2026-11-04T18:40:05.885Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41882352504 — dark (conclusion: `cancelled`), 2026-11-04 17:58 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `build` → `Test UI on its own`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
  Passed Filee.App.Tests.LocalizationTests.Every_language_has_exactly_the_english_keys(code: "fr") [3 ms]
  Passed Filee.App.Tests.LocalizationTests.Every_language_has_exactly_the_english_keys(code: "vi") [4 ms]
  Passed Filee.App.Tests.LocalizationTests.Every_language_has_exactly_the_english_keys(code: "hi") [4 ms]
  Passed Filee.App.Tests.LocalizationTests.Format_placeholders_match_english(code: "fr") [12 ms]
  Passed Filee.App.Tests.LocalizationTests.Format_placeholders_match_english(code: "ja") [6 ms]
  Passed Filee.App.Tests.LocalizationTests.Format_placeholders_match_english(code: "tr") [6 ms]
Attempting to cancel the build...
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
