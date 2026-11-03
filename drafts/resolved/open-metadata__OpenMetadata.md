<!-- dark-draft: open-metadata/OpenMetadata -->
<!-- draft-state: resolved -->
# Upstream issue draft: open-metadata/OpenMetadata

- **Status:** resolved — lit again (2026-11-03); nothing to file
- **Would be filed at:** https://github.com/open-metadata/OpenMetadata/issues/new
- **Stars:** 15659 · **Generated:** 2026-11-02T18:39:26.456Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Prune dead merge-queue refs" workflow getting cancelled on main since 2026-11-02
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Prune dead merge-queue refs** workflow (`.github/workflows/prune-ephemeral-caches.yml`) on `main` has been getting cancelled since 2026-11-02. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/open-metadata/OpenMetadata/actions/runs/41501417820 — dark (conclusion: `cancelled`), 2026-11-02 18:31 UTC
- Dark since: 2026-11-02 18:31 UTC (first run of the current streak)
- Job / step: `cancel-stale-runs`
- Likely cause: Canceling since a higher priority waiting request for cancel-stale-merge-queue-runs exists

If this is already known or expected, feel free to close. Thanks for maintaining OpenMetadata!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
