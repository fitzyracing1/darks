<!-- dark-draft: Automattic/mongoose -->
<!-- draft-state: ready -->
# Upstream issue draft: Automattic/mongoose

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Automattic/mongoose/issues/new
- **Stars:** 27460 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on master ("Encryption Tests", "Test")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `master` have been dark recently. Details below, in case they're useful:

### Encryption Tests (`.github/workflows/encryption-tests.yml`)

- Latest run on `master`: https://github.com/Automattic/mongoose/actions/runs/39487751339 — dark (conclusion: `failure`), 2026-10-20 19:56 UTC
- Dark since: 2026-10-20 19:56 UTC (first run of the current streak)
- Job / step: `Encryption tests` → `Run Tests`
- Likely cause: SyntaxError: Identifier 'update' has already been declared

<details><summary>End of the job log</summary>

```
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:681:26)
    at async formattedImport (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/nodejs/esm-utils.cjs:11:14)
    at async Object.requireModule [as requireOrImport] (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/nodejs/esm-utils.cjs:106:30)
    at async exports.loadFilesAsync (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/nodejs/esm-utils.cjs:175:20)
    at async singleRun (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/cli/run-helpers.cjs:174:3)
    at async exports.handler (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/cli/run.cjs:143:5)
##[error]Process completed with exit code 1.
```

</details>

### Test (`.github/workflows/test.yml`)

- Latest run on `master`: https://github.com/Automattic/mongoose/actions/runs/39487751386 — dark (conclusion: `failure`), 2026-10-20 19:56 UTC
- Dark since: 2026-10-20 19:56 UTC (first run of the current streak)
- Job / step: `Atlas CLI tests` → `Run tests`
- Likely cause: at async exports.handler (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/cli/run.cjs:143:5)

<details><summary>End of the job log</summary>

```
    at ModuleJob.run (node:internal/modules/esm/module_job:343:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:681:26)
    at async formattedImport (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/nodejs/esm-utils.cjs:11:14)
    at async Object.requireModule [as requireOrImport] (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/nodejs/esm-utils.cjs:106:30)
    at async exports.loadFilesAsync (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/nodejs/esm-utils.cjs:175:20)
    at async singleRun (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/cli/run-helpers.cjs:174:3)
    at async exports.handler (/home/runner/work/mongoose/mongoose/node_modules/mocha/lib/cli/run.cjs:143:5)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mongoose!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
