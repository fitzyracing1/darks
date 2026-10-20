<!-- dark-draft: public-apis/public-apis -->
<!-- draft-state: ready -->
# Upstream issue draft: public-apis/public-apis

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/public-apis/public-apis/issues/new
- **Stars:** 490715 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Tests of push & pull", "Validate links")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Tests of push & pull (`.github/workflows/test_of_push_and_pull.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/39252526232 — dark (conclusion: `failure`), 2026-10-19 12:30 UTC
- Dark since: 2026-10-02 22:11 UTC (first run of the current streak)
- Job / step: `Validate README.md changes` → `Validate Markdown format`
- Likely cause: (L2632) :--- is not a valid CORS option

<details><summary>End of the job log</summary>

```
(L2632) each segment must start and end with exactly 1 space
(L2632) Title syntax should be "[TITLE](LINK)"
(L2632) description should not end with -
(L2632) auth value is not enclosed with `backticks`
(L2632) :--- is not a valid Auth option
(L2632) :--- is not a valid HTTPS option
(L2632) :--- is not a valid CORS option
##[error]Process completed with exit code 1.
```

</details>

### Validate links (`.github/workflows/validate_links.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/39347805522 — dark (conclusion: `failure`), 2026-10-20 00:28 UTC
- Dark since: 2026-10-03 00:29 UTC (first run of the current streak)
- Job / step: `Check all links are working` → `Validate all links from README.md`
- Likely cause: (node:2265) [DEP0169] DeprecationWarning: 'url.parse()' behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for 'url.parse()' vulnerabili…

<details><summary>End of the job log</summary>

```
Checking for duplicate links...
Found duplicate links:
https://isitdownstatus.com
https://tastedive.com/read/api
https://github.com/lukePeavey/quotable
https://api.nasa.gov
https://open-meteo.com
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining public-apis!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
