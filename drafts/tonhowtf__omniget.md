<!-- dark-draft: tonhowtf/omniget -->
<!-- draft-state: ready -->
# Upstream issue draft: tonhowtf/omniget

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tonhowtf/omniget/issues/new
- **Stars:** 14697 · **Generated:** 2026-11-25T18:39:22.716Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Security", "dead-code")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Security (`.github/workflows/security.yml`)

- Latest run on `main`: https://github.com/tonhowtf/omniget/actions/runs/45125701072 — dark (conclusion: `failure`), 2026-11-23 06:40 UTC
- Dark since: 2026-11-23 06:40 UTC (first run of the current streak)
- Job / step: `RustSec advisories (cargo-deny)` → `Run EmbarkStudios/cargo-deny-action@70f81531115945ba6eb6b941ec9d39d063438eb9`
- Likely cause: advisories FAILED

<details><summary>End of the job log</summary>

```
      │   │   └── wacore-noise v0.7.0
      │   │       └── wacore v0.7.0 (*)
      │   ├── wacore-noise v0.7.0 (*)
      │   └── whatsapp-rust v0.7.0 (*)
      └── ssh-cipher v0.3.0
          └── ssh-key v0.7.0-rc.11
              └── russh v0.65.1 (*)
advisories FAILED
```

</details>

### dead-code (`.github/workflows/dead-code.yml`)

- Latest run on `main`: https://github.com/tonhowtf/omniget/actions/runs/45145687200 — dark (conclusion: `failure`), 2026-11-23 09:17 UTC
- Dark since: 2026-11-23 09:17 UTC (first run of the current streak)
- Job / step: `scan` → `Unused files and dependencies (knip)`
- Likely cause: ELIFECYCLE  Command failed with exit code 2.

<details><summary>End of the job log</summary>

```
dashjs              package.json:92:6
lottie-web          package.json:94:6
pdfjs-dist          package.json:96:6
thinking-orbs       package.json:100:6
Configuration hints (1)
. (root)    knip.json  Add entry and/or refine project files (898 unused files)
 ELIFECYCLE  Command failed with exit code 2.
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining omniget!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
