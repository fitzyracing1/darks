<!-- dark-draft: huggingface/transformers -->
<!-- draft-state: ready -->
# Upstream issue draft: huggingface/transformers

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/huggingface/transformers/issues/new
- **Stars:** 168754 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Secret Leaks" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Secret Leaks** workflow (`.github/workflows/trufflehog.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/huggingface/transformers/actions/runs/42878167943 — dark (conclusion: `failure`), 2026-11-10 18:44 UTC
- Dark since: 2026-11-10 18:44 UTC (first run of the current streak)
- Job / step: `trufflehog` → `Secret Scanning`
- Likely cause: Unable to find image 'ghcr.io/trufflesecurity/trufflehog:latest' locally

<details><summary>End of the job log</summary>

```
49c16260ac47: Pull complete
Digest: sha256:674b2f187620a19df77f44cf9a7d77efcc581a5662accef2f2739cbb46ba4a3a
Status: Downloaded newer image for ghcr.io/trufflesecurity/trufflehog:latest
🐷🔑🐷  TruffleHog. Unearth your secrets. 🐷🔑🐷
2026-11-10T18:45:40Z	info-0	trufflehog	running source	{"source_name": "trufflehog - git", "source_type": "SOURCE_TYPE_GIT", "source_id": 1, "job_id": 1, "source_manager_worker_id": "ZWT86", "with_units": true}
##[warning]Found unverified CloudflareApiToken result 🐷🔑
2026-11-10T18:47:56Z	info-0	trufflehog	finished scanning	{"chunks": 248237, "bytes": 132821276, "verified_secrets": 0, "unverified_secrets": 1, "scan_duration": "3m4.524537315s", "trufflehog_version": "3.99.8", "verific…
##[error]Process completed with exit code 183.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining transformers!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
