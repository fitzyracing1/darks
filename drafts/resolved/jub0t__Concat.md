<!-- dark-draft: jub0t/Concat -->
<!-- draft-state: resolved -->
# Upstream issue draft: jub0t/Concat

- **Status:** resolved — lit again (2026-10-19); nothing to file
- **Would be filed at:** https://github.com/jub0t/Concat/issues/new
- **Stars:** 9027 · **Generated:** 2026-10-19T01:07:32.637Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build for phones" workflow getting cancelled on main since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build for phones** workflow (`.github/workflows/mobile.yml`) on `main` has been getting cancelled since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39178041341 — dark (conclusion: `cancelled`), 2026-10-18 23:48 UTC
- Dark since: 2026-10-16 06:38 UTC (first run of the current streak)
- Job / step: `iOS simulator smoke` → `Build`
- Likely cause: Canceling since a higher priority waiting request for mobile-Build for phones-refs/heads/main exists

<details><summary>End of the job log</summary>

```
722 |         audio: bool,
    |         ^^^^^^^^^^^
warning: missing documentation for a struct field
   --> crates/concat/src/platform.rs:723:9
    |
723 |         image: bool,
    |         ^^^^^^^^^^^
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Concat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
