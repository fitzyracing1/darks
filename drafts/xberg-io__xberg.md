<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9426 · **Generated:** 2026-10-19T07:12:02.054Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- CI E2E (`.github/workflows/ci-e2e.yaml`): [issue #2163](https://github.com/xberg-io/xberg/issues/2163) "ci(e2e): kotlin-android job loses its runner after ~1h50 on every completed run"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI Rust" workflow failing on main since 2026-10-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI Rust** workflow (`.github/workflows/ci-rust.yaml`) on `main` has been failing since 2026-10-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/39148349652 — dark (conclusion: `failure`), 2026-10-18 17:10 UTC
- Dark since: 2026-10-09 00:25 UTC (first run of the current streak)
- Job / step: `Rust (ubuntu-latest)` → `Run tests`
- Likely cause: exit status 1

<details><summary>End of the job log</summary>

```
Collecting diagnostic information...
Disk space:
Filesystem      Size  Used Avail Use% Mounted on
/dev/root       145G   39G  106G  27% /
Cargo environment:
cargo 1.99.1 (5f94df478 2026-08-27)
rustc 1.99.1 (58cf8f9c3 2026-10-13)
##[error]exit status 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
