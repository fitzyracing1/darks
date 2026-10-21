<!-- dark-draft: storytold/cadcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/cadcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/cadcraft/issues/new
- **Stars:** 6173 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Release", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/cadcraft/actions/runs/37592319345 — dark (conclusion: `failure`), 2026-10-07 08:13 UTC
- Dark since: 2026-10-07 05:50 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/cadcraft/actions/runs/39365360118 — dark (conclusion: `failure`), 2026-10-20 03:38 UTC
- Dark since: 2026-10-19 03:41 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Start the FreeBSD VM`
- Likely cause: The process '/usr/bin/rsync' failed with exit code 2

<details><summary>End of the job log</summary>

```
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Syncing via Rsync
[command]/usr/bin/rsync -artopg --rsync-path=sh -c 'PATH=$PATH:/usr/local/bin:/usr/local/sbin:/usr/pkg/bin:/usr/pkg/sbin:/opt/local/bin:/opt/local/sbin exec rsync "$@"' rsync --exclude _actions --exclude _PipelineMappin…
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Invalid block index 1918332234 (count=0) [receiver]
rsync error: protocol incompatibility (code 2) at receiver.c(573) [receiver=3.5.0]
rsync: [sender] write error: Broken pipe (32)
##[error]The process '/usr/bin/rsync' failed with exit code 2
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cadcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
