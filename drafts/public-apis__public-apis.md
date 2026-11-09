<!-- dark-draft: public-apis/public-apis -->
<!-- draft-state: ready -->
# Upstream issue draft: public-apis/public-apis

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/public-apis/public-apis/issues/new
- **Stars:** 497450 · **Generated:** 2026-11-09T12:43:14.164Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Tests of push & pull", "Validate links")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Tests of push & pull (`.github/workflows/test_of_push_and_pull.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/42407786960 — dark (conclusion: `failure`), 2026-11-07 19:45 UTC
- Dark since: 2026-10-02 22:11 UTC (first run of the current streak)
- Job / step: `Validate README.md changes` → `Validate Markdown format`
- Likely cause: (L2841) :--- is not a valid CORS option

<details><summary>End of the job log</summary>

```
(L2841) each segment must start and end with exactly 1 space
(L2841) Title syntax should be "[TITLE](LINK)"
(L2841) description should not end with -
(L2841) auth value is not enclosed with `backticks`
(L2841) :--- is not a valid Auth option
(L2841) :--- is not a valid HTTPS option
(L2841) :--- is not a valid CORS option
##[error]Process completed with exit code 1.
```

</details>

### Validate links (`.github/workflows/validate_links.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/42539575455 — dark (conclusion: `failure`), 2026-11-09 00:19 UTC
- Dark since: 2026-10-03 00:29 UTC (first run of the current streak)
- Job / step: `Check all links are working` → `Set up Python`
- Likely cause: Version 3.8 with arch x64 not found

<details><summary>End of the job log</summary>

```
Reset branch 'master'
branch 'master' set up to track 'origin/master'.
'88706670ac0ffaad7bf3c6307747e2515f638bed'
Version 3.8 was not found in the local cache
(node:2170) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:2170) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabili…
##[error]Version 3.8 with arch x64 not found
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining public-apis!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
