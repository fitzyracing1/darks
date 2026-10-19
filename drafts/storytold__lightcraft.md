<!-- dark-draft: storytold/lightcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/lightcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/lightcraft/issues/new
- **Stars:** 13640 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow failing on main since 2026-10-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been failing since 2026-10-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/lightcraft/actions/runs/39136973066 — dark (conclusion: `failure`), 2026-10-18 14:39 UTC
- Dark since: 2026-10-18 00:37 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test in a FreeBSD VM`
- Likely cause: ssh exited with code 1

<details><summary>End of the job log</summary>

```
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
Sent 0 of 982438052 (0.0%), 0.0 MBs/sec
Sent 536870912 of 982438052 (54.6%), 256.0 MBs/sec
Sent 982438052 of 982438052 (100.0%), 321.5 MBs/sec
Cache saved: freebsd-15.1-2.2.8-aarch64-v3
Exec SSH: [ -L "$HOME/work" ] || ln -s /home/runner/work $HOME/work
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
##[error]ssh exited with code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining lightcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
