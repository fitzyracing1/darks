<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 15613 · **Generated:** 2026-10-22T07:02:51.161Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "FreeBSD" workflow getting cancelled on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **FreeBSD** workflow (`.github/workflows/freebsd.yml`) on `main` has been getting cancelled since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/39535332126 — dark (conclusion: `cancelled`), 2026-10-21 02:51 UTC
- Dark since: 2026-10-19 02:52 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling filmcraft-web v0.10.0 (/home/runner/work/filmcraft/filmcraft/apps/filmcraft-web)
   Compiling sys-locale v0.3.2
   Compiling filmcraft-golden v0.10.0 (/home/runner/work/filmcraft/filmcraft/crates/golden)
   Compiling glob v0.3.4
   Compiling schemars v1.2.2
   Compiling filmcraft-automation v0.10.0 (/home/runner/work/filmcraft/filmcraft/crates/automation)
   Compiling filmcraft-cli v0.10.0 (/home/runner/work/filmcraft/filmcraft/apps/filmcraft-cli)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
