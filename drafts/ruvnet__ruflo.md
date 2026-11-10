<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: ready -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 81384 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI/CD Pipeline", "V3 CI/CD Pipeline")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI/CD Pipeline (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42762687094 — dark (conclusion: `failure`), 2026-11-10 05:31 UTC
- Dark since: 2026-11-10 05:31 UTC (first run of the current streak)
- Job / step: `Build & Package (windows-latest)` → `Daemon survives parent exit (Windows, regression`
- Likely cause: Cannot find module 'nostr-tools/pure' or its corresponding type declarations.

<details><summary>End of the job log</summary>

```
npm error code 2
npm error path D:\a\ruflo\ruflo\v3\@claude-flow\security
npm error command failed
npm error command C:\Windows\system32\cmd.exe /d /s /c npm run build
npm error > @claude-flow/security@3.0.7 build
npm error > tsc && node scripts/verify-oauth-exports.mjs
npm error
##[error]npm error src/keychain-adapter.ts(77,33): error TS2307: Cannot find module '@napi-rs/keyring' or its corresponding type declarations.
```

</details>

### V3 CI/CD Pipeline (`.github/workflows/v3-ci.yml`)

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42762687419 — dark (conclusion: `failure`), 2026-11-10 05:31 UTC
- Dark since: 2026-11-10 05:31 UTC (first run of the current streak)
- Job / step: `CLI npx-install smoke (#1147 / (22)` → `Pack, install, and run cli (asserts no 'Invalid Version' crash)`
- Likely cause: smoke-cli-npx-install: npm install exited 1

<details><summary>End of the job log</summary>

```
npm error       port: 443
npm error     }
npm error   ]
npm error }
npm error
npm error Node.js v22.23.4
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-11-10T05_43_12_195Z-debug-0.log
##[error]smoke-cli-npx-install: npm install exited 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ruflo!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
