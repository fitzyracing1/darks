<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 16989 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/39698465260 — dark (conclusion: `cancelled`), 2026-10-22 00:14 UTC
- Dark since: 2026-10-18 07:11 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling bit-vec v0.9.1
   Compiling unicode-width v0.2.2
   Compiling bit-set v0.10.0
   Compiling epaint v0.36.2
   Compiling codespan-reporting v0.13.1
   Compiling calloop v0.13.0
   Compiling zbus-lockstep-macros v0.5.2
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/39698464764 — dark (conclusion: `cancelled`), 2026-10-22 00:14 UTC
- Dark since: 2026-10-21 00:17 UTC (first run of the current streak)
- Job / step: `test (windows-latest)` → `Test`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling rfd v0.17.2
   Compiling craft-quit v0.1.0 (https://github.com/storytold/craft-libs?rev=f58bc1a3df490992d633393d0898af0588ce882c#f58bc1a3)
   Compiling craft-ui v0.1.0 (https://github.com/storytold/craft-libs?rev=5c874d51eeb3de70e735c8ce87a59a7dedd47675#5c874d51)
   Compiling sys-locale v0.3.2
   Compiling toml_parser v1.1.3+spec-1.1.0
   Compiling toml_datetime v1.1.1+spec-1.1.0
   Compiling serde_spanned v1.1.1
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
