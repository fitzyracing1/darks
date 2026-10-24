<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 17536 · **Generated:** 2026-10-24T12:48:18.474Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "Windows ARM64", "SonarCloud")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40094807127 — dark (conclusion: `cancelled`), 2026-10-24 12:39 UTC
- Dark since: 2026-10-24 12:37 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Restore FreeBSD Cargo cache`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Cache restored from key: freebsd-cargo-v3-47f38678c221f6ecb8cf154d2cba3c76a5c4c7a2ba67e156f4132c257be486b2-5693ca62f94c28eaed38271cfb8edac9fe469f216b1ff2dd68ee63ceef1e38e6-c894928e6fdfd3861795e43b1446c6cfc23cc9ab
##[end-action id=cargo-cache.restore;outcome=success;conclusion=success;duration_ms=48772]
##[start-action display=Transfer Cargo data across the VM boundary;id=cargo-cache.__run]
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40094807063 — dark (conclusion: `cancelled`), 2026-10-24 12:39 UTC
- Dark since: 2026-10-24 12:37 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)` → `Build and package (unsigned)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling pdfcraft-edit v0.13.0 (D:\a\pdfcraft\pdfcraft\crates\edit)
   Compiling pdfcraft-forms v0.13.0 (D:\a\pdfcraft\pdfcraft\crates\forms)
   Compiling lopdf v0.45.0 (D:\a\pdfcraft\pdfcraft\vendor\lopdf)
   Compiling hayro v0.7.1 (D:\a\pdfcraft\pdfcraft\vendor\hayro)
   Compiling pdfcraft-xfa v0.13.0 (D:\a\pdfcraft\pdfcraft\crates\xfa)
   Compiling pdfcraft-sign v0.13.0 (D:\a\pdfcraft\pdfcraft\crates\sign)
   Compiling pdfcraft-redact v0.13.0 (D:\a\pdfcraft\pdfcraft\crates\redact)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40094807072 — dark (conclusion: `cancelled`), 2026-10-24 12:39 UTC
- Dark since: 2026-10-24 12:39 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
