<!-- dark-draft: liketrek/TREK -->
<!-- draft-state: ready -->
# Upstream issue draft: liketrek/TREK

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/liketrek/TREK/issues/new
- **Stars:** 15952 · **Generated:** 2026-11-26T06:45:55.978Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security Scan" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security Scan** workflow (`.github/workflows/security.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/liketrek/TREK/actions/runs/45618134408 — dark (conclusion: `failure`), 2026-11-25 12:53 UTC
- Dark since: 2026-11-25 12:53 UTC (first run of the current streak)
- Job / step: `scout` → `Run docker/scout-action@b265cd48f8a1451d2680815b3e8dc4ed65ee16e7`
- Likely cause: Unexpected HTTP response: 403

<details><summary>End of the job log</summary>

```
}
::***::
builder-c7dad770-aa4a-41a4-a5c9-2a0b6990d59a/builder-c7dad770-aa4a-41a4-a5c9-2a0b6990d59a0/tbrmnp67kuv8kuthlgt678rre
Build summary supported!
Logging into docker.io...
Login Succeeded!
Downloading asset: docker-scout-action_linux_amd64 (187.4 MB)
##[error]Unexpected HTTP response: 403
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TREK!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
