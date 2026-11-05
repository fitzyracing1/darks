<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7294 · **Generated:** 2026-11-05T06:44:39.106Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish Images", "Grading integrity")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Images (`.github/workflows/publish-images.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/41978555854 — dark (conclusion: `failure`), 2026-11-05 06:09 UTC
- Dark since: 2026-11-04 23:29 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Grading integrity (`.github/workflows/grading-integrity.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/41978555927 — dark (conclusion: `cancelled`), 2026-11-05 06:09 UTC
- Dark since: 2026-11-04 23:40 UTC (first run of the current streak)
- Job / step: `No run on main passed without doing its work` → `Ask the Actions API what each required check actually executed`
- Likely cause: The job has exceeded the maximum execution time of 15m0s

<details><summary>End of the job log</summary>

```
Web — Build                                                     80 /  80  (100.0%)   80/80
Web — Lint & Type-check                                         80 /  80  (100.0%)   80/80
Zero open CodeQL alerts                                         80 /  80  (100.0%)   80/80
docker compose up — full stack                                  80 /  80  (100.0%)   80/80
security-audit                                                  80 /  80  (100.0%)   80/80
OK — 28 required check(s) graded over 2208 run(s) in the enforced
     window; every one of them executed its assertions
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
