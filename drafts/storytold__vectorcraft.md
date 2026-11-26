<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12123 · **Generated:** 2026-11-26T18:38:05.420Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45871572261 — dark (conclusion: `cancelled`), 2026-11-26 17:54 UTC
- Dark since: 2026-11-26 09:43 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45874015455 — dark (conclusion: `failure`), 2026-11-26 18:12 UTC
- Dark since: 2026-11-26 12:31 UTC (first run of the current streak)
- Job / step: `affinity3 / gate (ubuntu-24.04)` → `Lockfile unchanged`
- Likely cause: "thiserror 2.0.21",

<details><summary>End of the job log</summary>

```
  "proptest",
  "serde",
  "serde_json",
- "sha2",
+ "sha2 0.10.9",
  "thiserror 2.0.21",
 ]
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
