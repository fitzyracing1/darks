<!-- dark-draft: vitejs/vite -->
<!-- draft-state: resolved -->
# Upstream issue draft: vitejs/vite

- **Status:** resolved — lit again (2026-10-30); nothing to file
- **Would be filed at:** https://github.com/vitejs/vite/issues/new
- **Stars:** 83622 · **Generated:** 2026-10-30T06:48:43.256Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/vitejs/vite/actions/runs/40996084381 — dark (conclusion: `failure`), 2026-10-30 03:12 UTC
- Dark since: 2026-10-27 08:50 UTC (first run of the current streak)
- Job / step: `Build&Test: node-24, windows-latest` → `Test serve`
- Likely cause: (node:9984) [DEP0169] DeprecationWarning: 'url.parse()' behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for 'url.parse()' vulnerabili…

<details><summary>End of the job log</summary>

```
`transformWithEsbuild` is deprecated and will be removed in the future. Please migrate to `transformWithOxc`.
·········································-····················--·······················-···························--············-----·······--·············--------···················································--··…
✓ 11 modules transformed.
rendering chunks...
computing gzip size...
[ELIFECYCLE] Command failed with exit code 1.
-·-················---························--·-·······································-············-----····---·····--········--······-··--·----·--················-·------·---------·-····--
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vite!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
