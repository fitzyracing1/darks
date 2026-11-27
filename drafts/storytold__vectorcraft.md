<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 12139 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "SonarCloud" workflow getting cancelled on main since 2026-11-26
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **SonarCloud** workflow (`.github/workflows/sonarcloud.yml`) on `main` has been getting cancelled since 2026-11-26. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/45983575309 — dark (conclusion: `cancelled`), 2026-11-27 10:36 UTC
- Dark since: 2026-11-26 09:43 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Run actions/upload-artifact@cf430e030ddbb5b0abf93d22962f4752f3646cd9`
- Likely cause: The job has exceeded the maximum execution time of 1h30m0s

<details><summary>End of the job log</summary>

```
Uploaded bytes 1098907648
Uploaded bytes 1107296256
Uploaded bytes 1115684864
Uploaded bytes 1124073472
Uploaded bytes 1132462080
Uploaded bytes 1140850688
Uploaded bytes 1149239296
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
