<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 8524 · **Generated:** 2026-11-11T12:41:41.842Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43020752931 — dark (conclusion: `cancelled`), 2026-11-11 12:29 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Changes`
- Likely cause: Canceling since a higher priority waiting request for ci-refs/heads/main exists

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43012611288 — dark (conclusion: `cancelled`), 2026-11-11 11:31 UTC
- Dark since: 2026-11-11 11:25 UTC (first run of the current streak)
- Job / step: `Language smoke (java)` → `Run Swatinem/rust-cache@v2`
- Likely cause: The run was canceled by @l0ng-ai.

<details><summary>End of the job log</summary>

```
Received 314572800 of 1008186756 (31.2%), 149.9 MBs/sec
Received 524288000 of 1008186756 (52.0%), 166.6 MBs/sec
Received 700448768 of 1008186756 (69.5%), 166.8 MBs/sec
Received 897581056 of 1008186756 (89.0%), 171.0 MBs/sec
Received 1008186756 of 1008186756 (100.0%), 171.5 MBs/sec
Cache Size: ~961 MB (1008186756 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/d9031b0b-8b98-412f-8a3c-00d959ef7963/cache.tzst -P -C /home/runner/work/openidea/openidea --use-compress-program unzstd
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
