<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 16177 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Release" workflow failing on main since 2026-11-14
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Release** workflow (`.github/workflows/release.yml`) on `main` has been failing since 2026-11-14. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/43559481862 — dark (conclusion: `failure`), 2026-11-14 05:01 UTC
- Dark since: 2026-11-14 05:01 UTC (first run of the current streak)
- Job / step: `macOS universal` → `Join, sign, package and check (dmg, CLI zip; the dmg is mounted and checked)`
- Likely cause: Error: The value '<stdin>: Property List error: Cannot parse a NULL or zero-length data / JSON error: Unable to parse empty data.' is invalid for '<submission-id>': <stdin>: Property List error: Cannot parse a NULL or z…

<details><summary>End of the job log</summary>

```
==> notarizing /Users/runner/_work/solidcraft/solidcraft/target/macos-package/SolidCraft.app
Error: HTTP status code: 403. A required agreement is missing or has expired. This request requires an in-effect agreement that has not been signed or has expired. Ensure your team has signed the necessary legal agreeme…
Error: The value '<stdin>: Property List error: Cannot parse a NULL or zero-length data / JSON error: Unable to parse empty data.' is invalid for '<submission-id>': <stdin>: Property List error: Cannot parse a NULL or z…
Help:  <submission-id>  Notary Submission ID (UUID)
Usage: notarytool log [<options>] <submission-id> <output-path>
  See 'notarytool log --help' for more information.
notarization of /Users/runner/_work/solidcraft/solidcraft/target/macos-package/SolidCraft-app.zip was not accepted
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
