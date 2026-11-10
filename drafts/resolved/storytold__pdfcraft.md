<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-11-10); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 20192 · **Generated:** 2026-11-10T00:51:51.652Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("FreeBSD", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42727624602 — dark (conclusion: `cancelled`), 2026-11-10 00:21 UTC
- Dark since: 2026-11-09 23:08 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling dynify v0.1.2
   Compiling num_enum v0.7.6
   Compiling boa_parser v0.22.0
   Compiling ocrs v0.13.1
   Compiling rsa v0.10.0-rc.18
   Compiling ed25519-dalek v3.0.0
   Compiling zbus_names v4.3.4
##[error]The operation was canceled.
```

</details>

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/42727624247 — dark (conclusion: `cancelled`), 2026-11-10 00:21 UTC
- Dark since: 2026-11-10 00:21 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Uploaded bytes 109051904
Uploaded bytes 117143989
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact is 2ad50b8b8a1502af97ea312afb97ac5c16511421c58630802d6f1dd39abfdc55
Finalizing artifact upload
Artifact pdfcraft-windows-arm64 successfully finalized. Artifact ID 13724565161
Artifact pdfcraft-windows-arm64 has been successfully uploaded! Final size is 117143989 bytes. Artifact ID is 13724565161
Artifact download URL: https://github.com/storytold/pdfcraft/actions/runs/42727624247/artifacts/13724565161
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
