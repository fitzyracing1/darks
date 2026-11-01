<!-- dark-draft: storytold/filmcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/filmcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/filmcraft/issues/new
- **Stars:** 17086 · **Generated:** 2026-11-01T00:58:31.984Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Packaging lint" workflow getting cancelled on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Packaging lint** workflow (`.github/workflows/packaging-lint.yml`) on `main` has been getting cancelled since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/filmcraft/actions/runs/41250163867 — dark (conclusion: `cancelled`), 2026-10-31 22:53 UTC
- Dark since: 2026-10-31 22:53 UTC (first run of the current streak)
- Job / step: `lint / lint` → `Run packaging lint`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
Ign:11 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages
Ign:12 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe Translation-en
Ign:13 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages
Ign:14 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted Translation-en
Ign:15 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse Translation-en
Get:4 https://archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:5 https://archive.ubuntu.com/ubuntu noble-security InRelease [126 kB]
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining filmcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
