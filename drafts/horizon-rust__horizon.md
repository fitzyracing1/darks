<!-- dark-draft: horizon-rust/horizon -->
<!-- draft-state: ready -->
# Upstream issue draft: horizon-rust/horizon

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/horizon-rust/horizon/issues/new
- **Stars:** 8599 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("mojang republish", "parity-main", "checks")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### mojang republish (`.github/workflows/mojang-republish.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42923573213 — dark (conclusion: `failure`), 2026-11-10 23:27 UTC
- Dark since: 2026-11-10 02:12 UTC (first run of the current streak)
- Job / step: `check` → `Check the manifest`
- Likely cause: python3: can't open file '/home/ludovic/.actions-runners/horizon-light-5/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory

<details><summary>End of the job log</summary>

```
If you want to keep them by creating a new branch, this may be a good time
to do so with:
 git branch <new-branch-name> 214469a4bf5e
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
1b27a37702116f54150048008d8b466021307e53
python3: can't open file '/home/ludovic/.actions-runners/horizon-light-5/_work/horizon/horizon/tools/ci/mojang_republish.py': [Errno 2] No such file or directory
##[error]Process completed with exit code 2.
```

</details>

### parity-main (`.github/workflows/parity-main.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42924065914 — dark (conclusion: `cancelled`), 2026-11-10 23:31 UTC
- Dark since: 2026-11-10 23:20 UTC (first run of the current streak)
- Likely cause: run cancelled

### checks (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/horizon-rust/horizon/actions/runs/42924076122 — dark (conclusion: `failure`), 2026-11-10 23:31 UTC
- Dark since: 2026-11-10 23:25 UTC (first run of the current streak)
- Job / step: `verify` → `Check formatting and lint`
- Likely cause: error: could not compile 'horizon-client-lib' (lib test) due to 1 previous error

<details><summary>End of the job log</summary>

```
164 -                 own.insert(key.clone(), (name, path));
164 +                 own.insert(/* usize */, key.clone());
    |
For more information about this error, try `rustc --explain E0308`.
error: could not compile `horizon-client-lib` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
error: could not compile `horizon-client-lib` (lib test) due to 1 previous error
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining horizon!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
