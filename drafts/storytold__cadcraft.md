<!-- dark-draft: storytold/cadcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/cadcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/cadcraft/issues/new
- **Stars:** 5962 · **Generated:** 2026-10-19T18:50:18.546Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

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

- Latest run on `main`: https://github.com/storytold/cadcraft/actions/runs/39195859144 — dark (conclusion: `cancelled`), 2026-10-19 03:41 UTC
- Dark since: 2026-10-19 03:41 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Build and test in a FreeBSD VM`
- Likely cause: The job has exceeded the maximum execution time of 5h0m0s

<details><summary>End of the job log</summary>

```
   Compiling potential_utf v0.1.6
   Compiling zbus_macros v5.19.0
   Compiling async-broadcast v0.7.2
   Compiling ordered-stream v0.2.0
   Compiling async-recursion v1.2.0
   Compiling async-trait v0.1.92
   Compiling serde_repr v0.1.21
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining cadcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
