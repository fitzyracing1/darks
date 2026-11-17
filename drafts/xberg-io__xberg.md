<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9596 · **Generated:** 2026-11-17T06:45:50.833Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI Lint", "ADRs", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43971840573 — dark (conclusion: `failure`), 2026-11-16 22:37 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust (macos-26)` → `Run tests`
- Likely cause: [rust:test:ci] ERROR task failed

<details><summary>End of the job log</summary>

```
Filesystem      Size    Used   Avail Capacity iused ifree %iused  Mounted on
/dev/disk2s5   320Gi   220Gi    78Gi    74%    2.1M  814M    0%   /System/Volumes/Data
Cargo environment:
cargo 1.100.0 (3acc79c0c 2026-11-05)
rustc 1.100.0 (0ef1bc386 2026-11-09)
Finished in 8868.14s
[rust:test:ci] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43971841111 — dark (conclusion: `failure`), 2026-11-16 22:37 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `Generated e2e suites freshness` → `Verify generated e2e suites are current`
- Likely cause: [e2e:verify] ERROR task failed

<details><summary>End of the job log</summary>

```
@@ -54,5 +61,4 @@ void main() {
     final result = await XbergBridge.listValidators();
     expect(result, isNotNull);
   });
-
 }
[e2e:verify] ERROR task failed
##[error]Process completed with exit code 1.
```

</details>

### ADRs (`.github/workflows/adrs.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425237 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `Decision log`
- Likely cause: The run was canceled by @Goldziher.

### AI-Rulez validation (`.github/workflows/ai-rulez-validation.yml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43891425774 — dark (conclusion: `cancelled`), 2026-11-16 14:58 UTC
- Dark since: 2026-11-16 14:58 UTC (first run of the current streak)
- Job / step: `validate / Validate AI-Rulez`
- Likely cause: The run was canceled by @Goldziher.

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
