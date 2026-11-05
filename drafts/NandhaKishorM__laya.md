<!-- dark-draft: NandhaKishorM/laya -->
<!-- draft-state: ready -->
# Upstream issue draft: NandhaKishorM/laya

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NandhaKishorM/laya/issues/new
- **Stars:** 35026 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 5 workflows dark on main (".NET", "CI", "Rust", +2 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### .NET (`.github/workflows/dotnet.yml`)

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/41978612785 — dark (conclusion: `cancelled`), 2026-11-05 06:10 UTC
- Dark since: 2026-11-05 05:22 UTC (first run of the current streak)
- Job / step: `parity (typed-decisions-split)`
- Likely cause: The run was canceled by @NandhaKishorM.

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/41978612913 — dark (conclusion: `cancelled`), 2026-11-05 06:10 UTC
- Dark since: 2026-11-05 05:22 UTC (first run of the current streak)
- Job / step: `Chinese benchmark audit (no models or API)`
- Likely cause: The run was canceled by @NandhaKishorM.

### Rust (`.github/workflows/rust.yml`)

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/41978612810 — dark (conclusion: `cancelled`), 2026-11-05 06:10 UTC
- Dark since: 2026-11-05 05:22 UTC (first run of the current streak)
- Job / step: `parity (typed-decisions)`
- Likely cause: run cancelled in job "parity (typed-decisions)"

### C++ (`.github/workflows/cpp.yml`)

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/41978612883 — dark (conclusion: `cancelled`), 2026-11-05 06:10 UTC
- Dark since: 2026-11-05 06:05 UTC (first run of the current streak)
- Job / step: `cpp security scan`
- Likely cause: The run was canceled by @NandhaKishorM.

### Go (`.github/workflows/go.yml`)

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/41978612836 — dark (conclusion: `cancelled`), 2026-11-05 06:10 UTC
- Dark since: 2026-11-05 06:10 UTC (first run of the current streak)
- Job / step: `go security scan`
- Likely cause: The run was canceled by @NandhaKishorM.

If this is already known or expected, feel free to close. Thanks for maintaining laya!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
