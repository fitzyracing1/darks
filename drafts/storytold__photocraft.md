<!-- dark-draft: storytold/photocraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/photocraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/photocraft/issues/new
- **Stars:** 67775 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/photocraft/actions/runs/39191094779 — dark (conclusion: `failure`), 2026-10-19 02:40 UTC
- Dark since: 2026-10-19 02:40 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test in a FreeBSD VM`
- Likely cause: ssh exited with code 101

<details><summary>End of the job log</summary>

```
Exec SSH: mkdir -p /home/runner/work
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Syncing via Rsync
[command]/usr/bin/rsync -artopg --rsync-path=sh -c 'PATH=$PATH:/usr/local/bin:/usr/local/sbin:/usr/pkg/bin:/usr/pkg/sbin:/opt/local/bin:/opt/local/sbin exec rsync "$@"' rsync --exclude _actions --exclude _PipelineMappin…
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Exec SSH: [ -L "$HOME/work" ] || ln -s /home/runner/work $HOME/work
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
##[error]ssh exited with code 101
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining photocraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
