<!-- dark-draft: storytold/pdfcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: storytold/pdfcraft

- **Status:** resolved — lit again (2026-10-29); nothing to file
- **Would be filed at:** https://github.com/storytold/pdfcraft/issues/new
- **Stars:** 18407 · **Generated:** 2026-10-28T18:42:06.150Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-10-28
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-10-28. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/pdfcraft/actions/runs/40734267834 — dark (conclusion: `failure`), 2026-10-28 17:17 UTC
- Dark since: 2026-10-28 16:09 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Start the FreeBSD VM`
- Likely cause: ssh exited with code 1

<details><summary>End of the job log</summary>

```
Exec SSH: mkdir -p /home/runner/work
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Syncing via Rsync
[command]/usr/bin/rsync -artopg --rsync-path=sh -c 'PATH=$PATH:/usr/local/bin:/usr/local/sbin:/usr/pkg/bin:/usr/pkg/sbin:/opt/local/bin:/opt/local/sbin exec rsync "$@"' rsync --exclude _actions --exclude _PipelineMappin…
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Exec SSH: [ -L "$HOME/work" ] || ln -s /home/runner/work $HOME/work
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
##[error]ssh exited with code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining pdfcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
