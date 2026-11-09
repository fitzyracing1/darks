<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45494 · **Generated:** 2026-11-09T00:55:42.695Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "autofix.ci")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/42521586544 — dark (conclusion: `failure`), 2026-11-08 20:43 UTC
- Dark since: 2026-11-08 19:20 UTC (first run of the current streak)
- Job / step: `Run unit tests` → `Check package boundaries`
- Likely cause: x cannot import package 'pdfjs-dist' because it is not a dependency

<details><summary>End of the job log</summary>

```
  x cannot import package `pdfjs-dist` because it is not a dependency
   ,-[/home/runner/_work/reactive-resume/reactive-resume/tooling/android/local-import/reader.mjs:1:55]
 1 | import { GlobalWorkerOptions, getDocument, OPS } from "pdfjs-dist/legacy/build/pdf.mjs";
   :                                                       ^^^^^^^^^^^^^^^^|^^^^^^^^^^^^^^^^
   :                                                                       `-- package imported here
 2 | import { parseJSONResume } from "@reactive-resume/import/json-resume";
   `----
##[error]Process completed with exit code 1.
```

</details>

### autofix.ci (`.github/workflows/autofix.yml`)

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/42521586542 — dark (conclusion: `failure`), 2026-11-08 20:43 UTC
- Dark since: 2026-11-08 19:20 UTC (first run of the current streak)
- Job / step: `Apply autofixes` → `Apply Knip fixes`
- Likely cause: [ELIFECYCLE] Command failed with exit code 1.

<details><summary>End of the job log</summary>

```
$ knip --fix
Unlisted dependencies (1)
pdfjs-dist/legacy/build/pdf.mjs  tooling/android/local-import/reader.mjs:1:55
Configuration hints (2)
lingui.config.ts  apps/mobile  knip.json  Remove redundant entry pattern
lingui.config.ts  apps/web     knip.json  Remove redundant entry pattern
[ELIFECYCLE] Command failed with exit code 1.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
