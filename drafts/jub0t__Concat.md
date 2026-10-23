<!-- dark-draft: jub0t/Concat -->
<!-- draft-state: ready -->
# Upstream issue draft: jub0t/Concat

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/jub0t/Concat/issues/new
- **Stars:** 11054 · **Generated:** 2026-10-23T18:49:31.715Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39902059751 — dark (conclusion: `failure`), 2026-10-23 04:45 UTC
- Dark since: 2026-10-21 11:12 UTC (first run of the current streak)
- Job / step: `Format, locales and models` → `Run python3 scripts/locales.py --check`
- Likely cause: ##[start-action display=Work around spurious network errors in curl 8.0;id=__dtolnay_rust-toolchain.__run_9]

<details><summary>End of the job log</summary>

```
info: syncing channel updates for 1.93.1-x86_64-unknown-linux-gnu
info: latest update on 2026-02-12 for version 1.93.1 (01f6ddf75 2026-02-11)
info: component rustfmt is up to date
info: downloading component clippy
en.json is out of date: run scripts/locales.py
    gone:    start.safeMode
    gone:    start.safeModePhone
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Concat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
