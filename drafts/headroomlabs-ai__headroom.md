<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 76758 · **Generated:** 2026-10-21T01:13:11.013Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("PR Governance", "Security")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/39440331375 — dark (conclusion: `cancelled`), 2026-10-20 14:33 UTC
- Dark since: 2026-10-12 14:43 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4067
https://github.com/headroomlabs-ai/headroom/pull/4067
https://github.com/headroomlabs-ai/headroom/pull/4067
https://github.com/headroomlabs-ai/headroom/pull/4064
https://github.com/headroomlabs-ai/headroom/pull/4064
https://github.com/headroomlabs-ai/headroom/pull/4064
https://github.com/headroomlabs-ai/headroom/pull/4064
##[error]The operation was canceled.
```

</details>

### Security (`.github/workflows/security.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/39523239012 — dark (conclusion: `failure`), 2026-10-21 00:45 UTC
- Dark since: 2026-10-21 00:30 UTC (first run of the current streak)
- Job / step: `Rust advisories (cargo audit)` → `cargo audit (blocking; exceptions in .cargo/audit.toml)`
- Likely cause: error: 3 vulnerabilities found!

<details><summary>End of the job log</summary>

```
Crate:     webpki-roots
Version:   1.0.9
Title:     Bundled root certificates allow trust in distrusted emSign intermediates
Date:      2026-10-19
ID:        RUSTSEC-2026-0381
URL:       https://rustsec.org/advisories/RUSTSEC-2026-0381
Solution:  Upgrade to >=1.0.10
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
