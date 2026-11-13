<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 9180 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("mojang republish", "release")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### mojang republish (`.github/workflows/mojang-republish.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43379482071 — dark (conclusion: `failure`), 2026-11-13 06:33 UTC
- Dark since: 2026-11-12 20:01 UTC (first run of the current streak)
- Job / step: `check` → `Set up job`
- Likely cause: No space left on device

<details><summary>End of the job log</summary>

```
Metadata: read
Secret source: Actions
Cache mode: write
Prepare workflow directory
Prepare all required actions
Getting action download info
Download action repository 'actions/checkout@v7' (SHA:3d3c42e5aac5ba805825da76410c181273ba90b1)
##[error]No space left on device
```

</details>

### release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/43377082908 — dark (conclusion: `cancelled`), 2026-11-13 06:12 UTC
- Dark since: 2026-11-13 06:12 UTC (first run of the current streak)
- Job / step: `decide` → `Run python3 tools/release_train.py decide --kind game ${HEAD_SHA:+--head "$HEAD_SHA"} ${FORCE:+--force} | tee decision.json`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
 * [new tag]               v2026.10.22.16          -> v2026.10.22.16
 * [new tag]               v2026.10.23             -> v2026.10.23
  origin/main
a30ed9e44d35877d01f1ce5ceccb4346e9994c2d
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
a30ed9e44d35877d01f1ce5ceccb4346e9994c2d
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
