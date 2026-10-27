<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 18052 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-10-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-10-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40421232004 — dark (conclusion: `failure`), 2026-10-26 23:39 UTC
- Dark since: 2026-10-26 04:57 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: error: no matching package named 'craft-menu' found

<details><summary>End of the job log</summary>

```
    Updating crates.io index
    Updating git repository `https://github.com/storytold/craft-libs`
    Updating git repository `https://github.com/storytold/craft-libs`
    Updating git repository `https://github.com/storytold/craft-libs`
error: no matching package named `craft-menu` found
location searched: Git repository https://github.com/storytold/craft-libs?rev=edc41f68fa24c46651c3b5117d10f0ead75ec9cb#edc41f68
required by package `pdfcraft-ui-egui v0.14.0 (/home/runner/work/pdfcraft/pdfcraft/crates/ui-egui)`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
