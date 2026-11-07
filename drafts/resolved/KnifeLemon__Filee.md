<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: resolved -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** resolved — lit again (2026-11-07); nothing to file
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 23006 · **Generated:** 2026-11-06T18:37:41.328Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/42263996587 — dark (conclusion: `cancelled`), 2026-11-06 17:41 UTC
- Dark since: 2026-11-05 18:42 UTC (first run of the current streak)
- Job / step: `changes` → `Run everything() { echo "code=true" >> "$GITHUB_OUTPUT"; echo "macos=true" >> "$GITHUB_OUTPUT"; echo "$1"; exit 0; }`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
From https://github.com/KnifeLemon/Filee
 * [new ref]         44274bc23550749c2c69e9afe39e12d4672df0fe -> origin/main
  origin/main
44274bc23550749c2c69e9afe39e12d4672df0fe
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
44274bc23550749c2c69e9afe39e12d4672df0fe
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
