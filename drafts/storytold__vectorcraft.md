<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 10526 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("FreeBSD", "SonarCloud", "Windows ARM64")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/40045723527 — dark (conclusion: `cancelled`), 2026-10-24 00:35 UTC
- Dark since: 2026-10-23 14:15 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: Canceling since a higher priority waiting request for freebsd-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling vectorcraft-engine v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/crates/engine)
   Compiling vectorcraft-ui-egui v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/crates/ui-egui)
   Compiling vectorcraft v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft)
   Compiling vectorcraft-testkit v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/crates/testkit)
   Compiling vectorcraft-mcp v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/crates/mcp)
   Compiling vectorcraft-web v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-web)
   Compiling vectorcraft-cli v0.16.0 (/home/runner/work/vectorcraft/vectorcraft/apps/vectorcraft-cli)
##[error]The operation was canceled.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/40047460450 — dark (conclusion: `cancelled`), 2026-10-24 00:56 UTC
- Dark since: 2026-10-23 14:15 UTC (first run of the current streak)
- Likely cause: run cancelled

### Windows ARM64 (`.github/workflows/windows-arm64.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/40045723489 — dark (conclusion: `cancelled`), 2026-10-24 00:35 UTC
- Dark since: 2026-10-24 00:02 UTC (first run of the current streak)
- Job / step: `windows-arm64 / package (cross-compiled on x64)`
- Likely cause: Canceling since a higher priority waiting request for windows-arm64-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Uploaded bytes 109051904
Uploaded bytes 115124792
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact is 3893dbcc64287b1f6cf9fd7ac274a7e732aedd9c0eede558b93f4056802c52a5
Finalizing artifact upload
Artifact vectorcraft-windows-arm64 successfully finalized. Artifact ID 12541922654
Artifact vectorcraft-windows-arm64 has been successfully uploaded! Final size is 115124792 bytes. Artifact ID is 12541922654
Artifact download URL: https://github.com/storytold/vectorcraft/actions/runs/40045723489/artifacts/12541922654
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
