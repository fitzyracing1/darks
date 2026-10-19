<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: resolved -->
# Upstream issue draft: t8y2/dbx

- **Status:** resolved — lit again 2026-10-17: https://github.com/t8y2/dbx/actions/runs/39050789572; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27035 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on the default branch ("Update Nix pnpm hash", "CI", "Issue Triage Labels", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on the default branch have been dark recently. Details below, in case they're useful:

### Update Nix pnpm hash (`.github/workflows/update-nix-pnpm-hash.yml`)

- Latest run on the default branch: https://github.com/t8y2/dbx/actions/runs/38942294862 — dark (conclusion: `failure`), 2026-10-16 17:46 UTC
- Dark since: 2026-10-16 05:25 UTC (first run of the current streak)
- Likely cause: step "Update hash when needed" in job "update" exited nonzero

### CI (`.github/workflows/ci.yml`)

- Latest run on the default branch: https://github.com/t8y2/dbx/actions/runs/39031855990 — dark (conclusion: `cancelled`), 2026-10-17 12:16 UTC
- Dark since: 2026-10-17 12:09 UTC (first run of the current streak)
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

### Issue Triage Labels (`.github/workflows/issue-database-label.yml`)

- Latest run on the default branch: https://github.com/t8y2/dbx/actions/runs/38552194717 — dark (conclusion: `failure`), 2026-10-14 10:48 UTC
- Dark since: 2026-10-14 10:48 UTC (first run of the current streak)
- Likely cause: step "Synchronize database labels" in job "sync" exited nonzero

### Deploy Docs (`.github/workflows/docs.yml`)

- Latest run on the default branch: https://github.com/t8y2/dbx/actions/runs/38908819662 — dark (conclusion: `failure`), 2026-10-16 13:33 UTC
- Dark since: 2026-10-16 05:25 UTC (first run of the current streak)
- Likely cause: step "Run cd docs && pnpm install --frozen-lockfile && pnpm build" in job "build" exited nonzero

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
