<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: resolved -->
# Upstream issue draft: t8y2/dbx

- **Status:** resolved — lit again (2026-11-13); nothing to file
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 30180 · **Generated:** 2026-11-12T18:39:27.411Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Sync Mirrors" workflow failing on main since 2026-11-12
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Sync Mirrors** workflow (`.github/workflows/sync-mirrors.yml`) on `main` has been failing since 2026-11-12. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/43257684991 — dark (conclusion: `failure`), 2026-11-12 16:21 UTC
- Dark since: 2026-11-12 16:21 UTC (first run of the current streak)
- Job / step: `Sync to Gitee` → `Push to Gitee`
- Likely cause: fatal: unable to access 'https://gitee.com/codetty/dbx.git/': Recv failure: Connection reset by peer

<details><summary>End of the job log</summary>

```
branch 'main' set up to track 'origin/main'.
01c41bd205bd90e0dff87f0588af9a41173bc011
remote: Powered by GITEE.COM [1.1.23]
remote: Set trace flag 694f7087
To https://gitee.com/codetty/dbx.git
   ee9cf1ec5..01c41bd20  main -> main
fatal: unable to access 'https://gitee.com/codetty/dbx.git/': Recv failure: Connection reset by peer
##[error]Process completed with exit code 128.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
