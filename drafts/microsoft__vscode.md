<!-- dark-draft: microsoft/vscode -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/vscode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/vscode/issues/new
- **Stars:** 195345 · **Generated:** 2026-11-13T18:39:18.847Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Rulesets", "CodeQL")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Rulesets (`.github/workflows/rulesets.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/43415708162 — dark (conclusion: `failure`), 2026-11-13 11:16 UTC
- Dark since: 2026-11-13 11:16 UTC (first run of the current streak)
- Job / step: `Check rulesets` → `Check rulesets`
- Likely cause: microsoft/vscode has no ruleset named "main merge queue". An admin needs to apply it (see .github/rulesets/README.md). (.github/rulesets/main-merge-queue.json)

<details><summary>End of the job log</summary>

```
Acquiring 24.22.1 - x64 from https://github.com/actions/node-versions/releases/download/24.22.1-39619001896/node-24.22.1-linux-x64.tar.gz
Extracting ...
[command]/usr/bin/tar xz --strip 1 --warning=no-unknown-keyword --overwrite -C /home/runner/work/_temp/687e439d-516e-4208-896e-d8736aecdbd6 -f /home/runner/work/_temp/38b1424b-e04d-414d-8509-de83525dda9b
Adding to the cache ...
node: v24.22.1
npm: 11.19.1
yarn: 1.22.22
##[error]microsoft/vscode has no ruleset named "main merge queue". An admin needs to apply it (see .github/rulesets/README.md).
```

</details>

### CodeQL (`.github/workflows/codeql.yml`)

- Latest run on `main`: https://github.com/microsoft/vscode/actions/runs/43482641565 — dark (conclusion: `cancelled`), 2026-11-13 18:26 UTC
- Dark since: 2026-11-13 18:25 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining vscode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
