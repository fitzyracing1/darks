<!-- dark-draft: KnifeLemon/Filee -->
<!-- draft-state: ready -->
# Upstream issue draft: KnifeLemon/Filee

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/KnifeLemon/Filee/issues/new
- **Stars:** 22174 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/KnifeLemon/Filee/actions/runs/41978323189 — dark (conclusion: `cancelled`), 2026-11-05 06:07 UTC
- Dark since: 2026-11-03 05:57 UTC (first run of the current streak)
- Job / step: `changes`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

<details><summary>End of the job log</summary>

```
From https://github.com/KnifeLemon/Filee
 * [new ref]         20e9c07ddc21a9a745afd4a8d662ba8c429e94ae -> origin/main
  origin/main
20e9c07ddc21a9a745afd4a8d662ba8c429e94ae
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
20e9c07ddc21a9a745afd4a8d662ba8c429e94ae
Needs the build: src/Filee.App/Controls/DonutMenu.cs
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Filee!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
