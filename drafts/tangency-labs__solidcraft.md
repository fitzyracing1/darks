<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 18815 · **Generated:** 2026-11-28T06:43:29.854Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #17903](https://github.com/tangency-labs/solidcraft/issues/17903) "solidcraft: the Preferences pages (Appearance, Layout, Graphics, Navigation) as kit pages"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""
- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations", [issue #20820](https://github.com/tangency-labs/solidcraft/issues/20820) "Publish a Docker/web image variant with the optional bundled-render-library texture/HDR pack"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/46116790918 — dark (conclusion: `cancelled`), 2026-11-28 06:28 UTC
- Dark since: 2026-11-27 18:08 UTC (first run of the current streak)
- Likely cause: run cancelled

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/46110157334 — dark (conclusion: `failure`), 2026-11-28 05:01 UTC
- Dark since: 2026-11-28 05:01 UTC (first run of the current streak)
- Job / step: `Python wheel and CLI archives` → `Check the wheel downloads its CLI from these files`
- Likely cause: Artifact download URL: https://github.com/tangency-labs/solidcraft/actions/runs/46110157334/artifacts/15251025392

<details><summary>End of the job log</summary>

```
Uploaded bytes 553229174
Finished uploading artifact content to blob storage!
SHA256 digest of uploaded artifact is a1b817b306cf7eac1aaffac06e32d4e5c2467223334f3bcd55c26dfc5910de19
Finalizing artifact upload
Artifact release-python successfully finalized. Artifact ID 15251025392
Artifact release-python has been successfully uploaded! Final size is 553229174 bytes. Artifact ID is 15251025392
Artifact download URL: https://github.com/tangency-labs/solidcraft/actions/runs/46110157334/artifacts/15251025392
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
