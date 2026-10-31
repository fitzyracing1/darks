<!-- dark-draft: liketrek/TREK -->
<!-- draft-state: ready -->
# Upstream issue draft: liketrek/TREK

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/liketrek/TREK/issues/new
- **Stars:** 15266 · **Generated:** 2026-10-31T12:37:42.482Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Tests & SonarQube" workflow getting cancelled on main since 2026-10-31
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Tests & SonarQube** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-10-31. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/liketrek/TREK/actions/runs/41195687746 — dark (conclusion: `cancelled`), 2026-10-31 11:09 UTC
- Dark since: 2026-10-31 11:01 UTC (first run of the current streak)
- Job / step: `Repo: Changed Areas` → `Run actions/checkout@v6`
- Likely cause: The run was canceled by @mauriceboe.

<details><summary>End of the job log</summary>

```
Updating files:  80% (10632/13289)
Updating files:  81% (10765/13289)
Updating files:  82% (10897/13289)
Updating files:  83% (11030/13289)
Updating files:  84% (11163/13289)
Updating files:  85% (11296/13289)
Updating files:  86% (11429/13289)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TREK!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
