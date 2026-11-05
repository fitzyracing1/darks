<!-- dark-draft: mksglu/context-mode -->
<!-- draft-state: ready -->
# Upstream issue draft: mksglu/context-mode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/mksglu/context-mode/issues/new
- **Stars:** 33546 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "readme-stats" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **readme-stats** workflow (`.github/workflows/readme-stats.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/mksglu/context-mode/actions/runs/41961322458 — dark (conclusion: `failure`), 2026-11-05 03:23 UTC
- Dark since: 2026-11-05 03:23 UTC (first run of the current streak)
- Job / step: `readme-stats` → `commit only if a file changed`
- Likely cause: error: failed to push some refs to 'https://github.com/mksglu/context-mode'

<details><summary>End of the job log</summary>

```
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/mksglu/context-mode'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining context-mode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
