<!-- dark-draft: NandhaKishorM/laya -->
<!-- draft-state: resolved -->
# Upstream issue draft: NandhaKishorM/laya

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/NandhaKishorM/laya/issues/new
- **Stars:** 34815 · **Generated:** 2026-11-02T00:55:52.981Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security** workflow (`.github/workflows/security.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/41312851106 — dark (conclusion: `failure`), 2026-11-01 13:46 UTC
- Dark since: 2026-11-01 13:46 UTC (first run of the current streak)
- Job / step: `secret scan` → `gitleaks (working tree)`
- Likely cause: 3:51PM DBG Note: this number might be smaller than expected due to commits with no additions

<details><summary>End of the job log</summary>

```
SHA256 digest of uploaded artifact zip is df2f88f90f578cf41a1ee629274a7bfafbd1196814a59fc4a1eb413771f8b06e
Finalizing artifact upload
Artifact gitleaks-results.sarif.zip successfully finalized. Artifact ID 13090645936
✅ No leaks detected
gitleaks.tar.gz: OK
3:51PM INF scanned ~56786368 bytes (56.79 MB) in 1.54s
3:51PM WRN leaks found: 4
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining laya!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
