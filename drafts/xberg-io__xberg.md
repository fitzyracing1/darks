<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9600 · **Generated:** 2026-11-18T18:38:42.583Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI Rust", "ADRs")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/44270178383 — dark (conclusion: `failure`), 2026-11-18 08:48 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-24.04)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem            Size  Used Avail Use% Mounted on
/dev/mapper/cow-root  145G   69G   76G  48% /
Cargo environment:
cargo 1.100.0 (3acc79c0c 2026-11-05)
rustc 1.100.0 (0ef1bc386 2026-11-09)
Finished in 7320.25s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
