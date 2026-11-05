<!-- dark-draft: twbs/bootstrap -->
<!-- draft-state: ready -->
# Upstream issue draft: twbs/bootstrap

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/twbs/bootstrap/issues/new
- **Stars:** 174968 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Linkinator" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Linkinator** workflow (`.github/workflows/linkinator.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/twbs/bootstrap/actions/runs/41272176520 — dark (conclusion: `failure`), 2026-11-01 04:12 UTC
- Dark since: 2026-11-01 04:12 UTC (first run of the current streak)
- Job / step: `linkinator` → `Run linkinator`
- Likely cause: Detected 2 broken links.

<details><summary>End of the job log</summary>

```
  Indexed 1 language
  Indexed 141 pages
  Indexed 9540 words
  Indexed 0 filters
  Indexed 0 sorts
Finished in 0.339 seconds
Scanning _site
##[error][] https://www.srihash.org/ - Hostname/IP does not match certificate's altnames: Host: www.srihash.org. is not in the cert's altnames: DNS:*.github.com, DNS:*.github.io, DNS:*.githubusercontent.com, DNS:github.…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining bootstrap!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
