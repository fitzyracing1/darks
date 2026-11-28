<!-- dark-draft: public-apis/public-apis -->
<!-- draft-state: ready -->
# Upstream issue draft: public-apis/public-apis

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/public-apis/public-apis/issues/new
- **Stars:** 501873 · **Generated:** 2026-11-28T12:37:57.165Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on master ("Tests of push & pull", "Validate links", "Tests of validate package")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Tests of push & pull (`.github/workflows/test_of_push_and_pull.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/46054416857 — dark (conclusion: `failure`), 2026-11-27 19:07 UTC
- Dark since: 2026-10-02 22:11 UTC (first run of the current streak)
- Job / step: `Validate README.md changes` → `Set up Python`
- Likely cause: Version 3.8 with arch x64 not found

<details><summary>End of the job log</summary>

```
Reset branch 'master'
branch 'master' set up to track 'origin/master'.
'1e4904643a17c7a12041c854a1caad3df663245e'
Version 3.8 was not found in the local cache
(node:2149) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:2149) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabili…
##[error]Version 3.8 with arch x64 not found
```

</details>

### Validate links (`.github/workflows/validate_links.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/46087045380 — dark (conclusion: `failure`), 2026-11-28 00:16 UTC
- Dark since: 2026-10-03 00:29 UTC (first run of the current streak)
- Job / step: `Check all links are working` → `Set up Python`
- Likely cause: Version 3.8 with arch x64 not found

<details><summary>End of the job log</summary>

```
Reset branch 'master'
branch 'master' set up to track 'origin/master'.
'1e4904643a17c7a12041c854a1caad3df663245e'
Version 3.8 was not found in the local cache
(node:2422) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:2422) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabili…
##[error]Version 3.8 with arch x64 not found
```

</details>

### Tests of validate package (`.github/workflows/test_of_validate_package.yml`)

- Latest run on `master`: https://github.com/public-apis/public-apis/actions/runs/46054416737 — dark (conclusion: `failure`), 2026-11-27 19:07 UTC
- Dark since: 2026-11-11 16:13 UTC (first run of the current streak)
- Job / step: `Run tests of validate package` → `Set up Python`
- Likely cause: Version 3.8 with arch x64 not found

<details><summary>End of the job log</summary>

```
Reset branch 'master'
branch 'master' set up to track 'origin/master'.
'1e4904643a17c7a12041c854a1caad3df663245e'
Version 3.8 was not found in the local cache
(node:2325) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:2325) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabili…
##[error]Version 3.8 with arch x64 not found
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining public-apis!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
