<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12115 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45745422901 — dark (conclusion: `failure`), 2026-11-26 02:53 UTC
- Dark since: 2026-11-26 02:53 UTC (first run of the current streak)
- Job / step: `release / Linux aarch64` → `Build and package (AppImage, deb, rpm, tar.gz)`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
   --> crates/ui-egui/src/panels/color_wheel.rs:930:29
    |
930 |         bucket: app.session.bucket_paints(),
    |                             ^^^^^^^^^^^^^ method not found in `vectorcraft_engine::Session`
For more information about this error, try `rustc --explain E0599`.
error: could not compile `vectorcraft-ui-egui` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
