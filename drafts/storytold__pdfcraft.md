<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 16835 · **Generated:** 2026-10-21T12:55:24.472Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "CI")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/39520435155 — dark (conclusion: `cancelled`), 2026-10-21 00:17 UTC
- Dark since: 2026-10-18 07:11 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling epaint_default_fonts v0.36.2
   Compiling epaint v0.36.2
   Compiling bit-set v0.10.0
   Compiling codespan-reporting v0.13.1
   Compiling calloop v0.13.0
   Compiling zbus-lockstep-macros v0.5.2
   Compiling ron v0.12.2
##[error]The operation was canceled.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/39565939296 — dark (conclusion: `failure`), 2026-10-21 07:59 UTC
- Dark since: 2026-10-21 00:17 UTC (first run of the current streak)
- Job / step: `dependency licences and advisories` → `Run EmbarkStudios/cargo-deny-action@v2`
- Likely cause: advisories FAILED, bans ok, licenses ok, sources ok

<details><summary>End of the job log</summary>

```
              │   │                           ├── pdfcraft v0.10.1 (*)
              │   │                           └── pdfcraft-web v0.10.1
              │   └── sigstore-verify v0.6.6 (*)
              ├── sigstore-tsa v0.6.6
              │   ├── sigstore-bundle v0.6.6 (*)
              │   └── sigstore-verify v0.6.6 (*)
              └── (build) winprint v0.2.1 (*)
advisories FAILED, bans ok, licenses ok, sources ok
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
