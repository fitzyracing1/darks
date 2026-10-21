<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: resolved -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 8397 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/39554622005 — dark (conclusion: `cancelled`), 2026-10-21 06:18 UTC
- Dark since: 2026-10-20 22:54 UTC (first run of the current streak)
- Job / step: `portable / Package on Ubuntu 22.04 (linux-x64)`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Beginning upload of artifact content to blob storage
Uploaded bytes 779
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact is 09d7507eda16def5ee81455cb8eab36eb4df45b10d96611327e20497f805e165
Finalizing artifact upload
Artifact ubuntu-22-04-results-linux-x64 successfully finalized. Artifact ID 12325569952
Artifact ubuntu-22-04-results-linux-x64 has been successfully uploaded! Final size is 779 bytes. Artifact ID is 12325569952
Artifact download URL: https://github.com/KnifeLemon/Filee/actions/runs/39554622005/artifacts/12325569952
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
