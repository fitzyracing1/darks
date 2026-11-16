<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 16549 · **Generated:** 2026-11-16T07:03:47.942Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Triage" workflow failing on main since 2026-11-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Triage** workflow (`.github/workflows/triage.yml`) on `main` has been failing since 2026-11-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/43811955910 — dark (conclusion: `failure`), 2026-11-16 05:42 UTC
- Dark since: 2026-11-16 05:42 UTC (first run of the current streak)
- Job / step: `Triage bot` → `Run actions/github-script@3a2844b7e9c422d3c10d287c895573f7108da1b3`
- Likely cause: Unhandled error: HttpError: Server Error

<details><summary>End of the job log</summary>

```
[command]/usr/local/bin/git checkout --progress --force -B main refs/remotes/origin/main
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
[command]/usr/local/bin/git log -1 --format=%H
b809d701eb4e6c555047c758866f140df3d353af
GET /repos/tangency-labs/solidcraft/issues/12221/timeline?per_page=100 - 502 with id 9B4C:230B3F:538C29:10AE16C:6AFA97EE in 405ms
RequestError [HttpError]: Server Error
##[error]Unhandled error: HttpError: Server Error
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
