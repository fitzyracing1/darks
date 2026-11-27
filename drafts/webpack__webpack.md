<!-- dark-draft: webpack/webpack -->
<!-- draft-state: ready -->
# Upstream issue draft: webpack/webpack

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/webpack/webpack/issues/new
- **Stars:** 66016 · **Generated:** 2026-11-27T12:42:45.007Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: "Github Actions" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Github Actions** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/webpack/webpack/actions/runs/45942057936 — dark (conclusion: `failure`), 2026-11-27 04:48 UTC
- Dark since: 2026-11-25 21:14 UTC (first run of the current streak)
- Job / step: `test262` → `Run yarn cover:test262 --parts=auto --maxWorkers=100% --ci --cacheDirectory .jest-cache`
- Likely cause: The operation was canceled.

<details><summary>End of the job log</summary>

```
Cache Size: ~270 MB (283029233 B)
[command]/usr/bin/tar -xf /home/runner/work/_temp/4b6532a9-2da9-4682-9692-662491c49aaa/cache.tzst -P -C /home/runner/work/webpack/webpack --use-compress-program unzstd
Cache restored successfully
Cache restored from key: jest-test262-Linux-520020ccdf20b0702abb22f05d96f44f7de9ac709a866d7e7a653630425a87f4-ddf5a4b35eb33600eb2f5778102c47ef087ef326
yarn run v1.22.22
$ yarn cover:base --testMatch "<rootDir>/test/specCases/test262.spectest.js" --coverage --parts=auto --maxWorkers=100% --ci --cacheDirectory .jest-cache
$ node --expose-gc --max-old-space-size=4096 --experimental-vm-modules node_modules/jest-cli/bin/jest --workerIdleMemoryLimit=512MB --logHeapUsage --testMatch '<rootDir>/test/specCases/test262.spectest.js' --coverage --…
##[error]The runner has received a shutdown signal. This can happen when the runner service is stopped, or a manually started runner is canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining webpack!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
