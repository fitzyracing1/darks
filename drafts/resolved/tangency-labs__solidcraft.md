<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** resolved — lit again (2026-10-27); nothing to file
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 10962 · **Generated:** 2026-10-27T12:57:18.218Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Pages", "Docker")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Pages (`.github/workflows/pages.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40503838081 — dark (conclusion: `cancelled`), 2026-10-27 12:27 UTC
- Dark since: 2026-10-27 12:12 UTC (first run of the current streak)
- Likely cause: run cancelled

### Docker (`.github/workflows/docker.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/40503837972 — dark (conclusion: `cancelled`), 2026-10-27 12:27 UTC
- Dark since: 2026-10-27 12:27 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
58 |     Later(Deferred),
   |     ^^^^^
   |
   = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default
warning: `solidcraft-engine` (lib) generated 3 warnings
warning: `solidcraft-ui-egui` (lib) generated 2 warnings (run `cargo fix --lib -p solidcraft-ui-egui` to apply 1 suggestion)
   Compiling solidcraft-web v0.24.0 (/home/runner/work/solidcraft/solidcraft/apps/solidcraft-web)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
