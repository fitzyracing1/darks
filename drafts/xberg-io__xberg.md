<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9562 · **Generated:** 2026-11-07T12:37:41.487Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42368991545 — dark (conclusion: `cancelled`), 2026-11-07 11:37 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Likely cause: run cancelled

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42368991536 — dark (conclusion: `cancelled`), 2026-11-07 11:37 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (x86_64-unknown-linux-gnu)` → `Set up job`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Getting action download info
Download action repository 'actions/checkout@v7' (SHA:3d3c42e5aac5ba805825da76410c181273ba90b1)
Download action repository 'actions/cache@v6' (SHA:55cc8345863c7cc4c66a329aec7e433d2d1c52a9)
Download action repository 'xberg-io/actions@v1' (SHA:5038579d377ef72d097769c0fddc7ca6dc08c487)
Download action repository 'actions/upload-artifact@v7' (SHA:cf430e030ddbb5b0abf93d22962f4752f3646cd9)
Getting action download info
Download action repository 'actions-rust-lang/setup-rust-toolchain@v2' (SHA:a188e68d0fd2bd36ad51dccb2b07ba6e75105f30)
##[error]A task was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/42368991534 — dark (conclusion: `cancelled`), 2026-11-07 11:37 UTC
- Dark since: 2026-11-07 11:34 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
