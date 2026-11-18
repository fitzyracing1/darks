<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 11163 · **Generated:** 2026-11-18T06:45:12.554Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- parity-main (`.github/workflows/parity-main.yml`): [issue #18133](https://github.com/horizon-rust/horizon/issues/18133) "parity-main known failures (#18119)", [issue #15316](https://github.com/horizon-rust/horizon/issues/15316) "parity-main has not passed since 2026-11-07: no Nightly, and its bisect never finishes"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "checks" workflow getting cancelled on main since 2026-11-18
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **checks** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-18. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/44244316935 — dark (conclusion: `cancelled`), 2026-11-18 05:26 UTC
- Dark since: 2026-11-18 05:26 UTC (first run of the current streak)
- Job / step: `verify (tree and Python tests)` → `Keep game artifacts out of Git`
- Likely cause: The job has exceeded the maximum execution time of 30m0s

<details><summary>End of the job log</summary>

```
Updating files: 100% (11374/11374), done.
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
[command]/usr/local/bin/git log -1 --format=%H
1c45cf95d8431a7b49d94df007f7e75a890370c9
Successfully set up CPython (3.12.14)
Public tree check passed.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
