<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 65969 · **Generated:** 2026-10-22T12:57:28.437Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow getting cancelled on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been getting cancelled since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/39771995468 — dark (conclusion: `cancelled`), 2026-10-22 11:37 UTC
- Dark since: 2026-10-22 11:37 UTC (first run of the current streak)
- Job / step: `parser (minify-corpora)` → `Run yarn cover:minify --ci --cacheDirectory .jest-cache`
- Likely cause: The job has exceeded the maximum execution time of 1h0m0s

<details><summary>End of the job log</summary>

```
$ yarn cover:base --testMatch "<rootDir>/test/specCases/minify-corpora.spectest.js" "<rootDir>/test/specCases/js-fuzz.spectest.js" --coverage --ci --cacheDirectory .jest-cache
$ node --expose-gc --max-old-space-size=4096 --experimental-vm-modules node_modules/jest-cli/bin/jest --workerIdleMemoryLimit=512MB --logHeapUsage --testMatch '<rootDir>/test/specCases/minify-corpora.spectest.js' '<root…
[BABEL] Note: The code generator has deoptimised the styling of /home/runner/work/webpack/webpack/lib/javascript/syntax-printer.js as it exceeds the max of 500KB.
[BABEL] Note: The code generator has deoptimised the styling of /home/runner/work/webpack/webpack/lib/javascript/syntax-printer.js as it exceeds the max of 500KB.
PASS test/specCases/js-fuzz.spectest.js (1709.448 s, 722 MB heap size)
async-function
async-arrow
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
