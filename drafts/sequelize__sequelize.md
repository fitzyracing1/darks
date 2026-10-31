<!-- dark-draft: sequelize/sequelize -->
<!-- draft-state: ready -->
# Upstream issue draft: sequelize/sequelize

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/sequelize/sequelize/issues/new
- **Stars:** 30346 · **Generated:** 2026-10-31T18:33:59.606Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "auto-update PRs & label conflicts" workflow failing on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **auto-update PRs & label conflicts** workflow (`.github/workflows/autoupdate.yml`) on `main` has been failing since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/sequelize/sequelize/actions/runs/41177006943 — dark (conclusion: `failure`), 2026-10-31 06:32 UTC
- Dark since: 2026-10-31 00:50 UTC (first run of the current streak)
- Job / step: `autoupdate` → `Run sequelize/pr-auto-update-and-handle-conflicts@fcc8633eb414be54676e16dc17f3340ec40dda27`
- Likely cause: "fatal: Authentication failed for 'https://github.com/emmayusufu/sequelize.git/'\n"

<details><summary>End of the job log</summary>

```
  killed: false,
  signal: null,
  cmd: 'git push --quiet origin test/12961-fk-duplication-schema',
  stdout: '',
  stderr: 'remote: Invalid username or token. Password authentication is not supported for Git operations.\n' +
    "fatal: Authentication failed for 'https://github.com/emmayusufu/sequelize.git/'\n"
}
Node.js v24.22.1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining sequelize!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
