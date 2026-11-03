<!-- dark-draft: Droid-Deck/DroidDeck -->
<!-- draft-state: ready -->
# Upstream issue draft: Droid-Deck/DroidDeck

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Droid-Deck/DroidDeck/issues/new
- **Stars:** 17643 · **Generated:** 2026-11-03T18:36:41.394Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Build validation" workflow getting cancelled on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Build validation** workflow (`.github/workflows/authorship.yml`) on `main` has been getting cancelled since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Droid-Deck/DroidDeck/actions/runs/41690697696 — dark (conclusion: `cancelled`), 2026-11-03 18:07 UTC
- Dark since: 2026-11-03 18:07 UTC (first run of the current streak)
- Job / step: `Validate source and build result` → `Run actions/checkout@v4`
- Likely cause: The job has exceeded the maximum execution time of 5m0s

<details><summary>End of the job log</summary>

```
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
Initialized empty Git repository in /home/runner/work/DroidDeck/DroidDeck/.git/
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining DroidDeck!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
