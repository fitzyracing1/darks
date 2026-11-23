<!-- dark-draft: tonhowtf/omniget -->
<!-- draft-state: ready -->
# Upstream issue draft: tonhowtf/omniget

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tonhowtf/omniget/issues/new
- **Stars:** 14570 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security" workflow failing on main since 2026-11-23
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security** workflow (`.github/workflows/security.yml`) on `main` has been failing since 2026-11-23. Here is what I saw, in case it's useful:

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

If this is already known or expected, feel free to close. Thanks for maintaining omniget!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
