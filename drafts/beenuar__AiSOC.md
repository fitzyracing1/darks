<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7245 · **Generated:** 2026-11-05T00:53:42.006Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Publish Images", "Grading integrity", "CodeQL alert gate")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Images (`.github/workflows/publish-images.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/41935615088 — dark (conclusion: `cancelled`), 2026-11-04 23:40 UTC
- Dark since: 2026-11-04 23:29 UTC (first run of the current streak)
- Likely cause: run cancelled

### Grading integrity (`.github/workflows/grading-integrity.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/41935614675 — dark (conclusion: `failure`), 2026-11-04 23:40 UTC
- Dark since: 2026-11-04 23:40 UTC (first run of the current streak)
- Job / step: `No run on main passed without doing its work` → `Ask the Actions API what each required check actually executed`
- Likely cause: FAIL: could not read runs for integration.yml: HTTP Error 403: Forbidden

<details><summary>End of the job log</summary>

```
branch           main
required checks  28 from .github/required-checks.json
enforced from    2026-09-29T12:00:00+00:00
protection       NOT VERIFIED — this token cannot read branch protection
                 (`administration: read`, which GITHUB_TOKEN cannot be granted).
                 The 28 context(s) graded below come from .github/required-checks.json alone.
FAIL: could not read runs for integration.yml: HTTP Error 403: Forbidden
##[error]Process completed with exit code 2.
```

</details>

### CodeQL alert gate (`.github/workflows/codeql-alert-gate.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/41935646577 — dark (conclusion: `failure`), 2026-11-04 23:41 UTC
- Dark since: 2026-11-04 23:41 UTC (first run of the current streak)
- Job / step: `Zero open CodeQL alerts` → `Gate — main`
- Likely cause: check_codeql_alerts: FAILED to read its inputs: GET https://api.github.com/repos/beenuar/AiSOC/code-scanning/analyses?ref=refs/heads/main&per_page=100 -> HTTP 403: {

<details><summary>End of the job log</summary>

```
waiting for CodeQL analysis of 247b2355 (javascript-typescript, python); 1094s left
waiting for CodeQL analysis of 247b2355 (python); 1061s left
waiting for CodeQL analysis of 247b2355 (python); 1027s left
waiting for CodeQL analysis of 247b2355 (python); 994s left
waiting for CodeQL analysis of 247b2355 (python); 960s left
check_codeql_alerts: FAILED to read its inputs: GET https://api.github.com/repos/beenuar/AiSOC/code-scanning/analyses?ref=refs/heads/main&per_page=100 -> HTTP 403: {
	"message": "API rate limit exceeded for installation. If you reach out to GitHub Support for help, please include the request ID 282C:2A4EAC:400B02:D2C713:6AEBC9C4 and timestamp 2026-11-05 00:11:48 UTC. For more on scr…
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
