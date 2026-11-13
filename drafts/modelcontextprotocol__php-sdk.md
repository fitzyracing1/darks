<!-- dark-draft: modelcontextprotocol/php-sdk -->
<!-- draft-state: ready -->
# Upstream issue draft: modelcontextprotocol/php-sdk

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/modelcontextprotocol/php-sdk/issues/new
- **Stars:** 1671 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "conformance-weekly" workflow failing on main since 2026-10-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **conformance-weekly** workflow (`.github/workflows/conformance-weekly.yaml`) on `main` has been failing since 2026-10-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/modelcontextprotocol/php-sdk/actions/runs/42572424051 — dark (conclusion: `failure`), 2026-11-09 06:20 UTC
- Dark since: 2026-10-05 06:37 UTC (first run of the current streak)
- Job / step: `conformance / server (2026-07-28, alpha)` → `Run composer install --prefer-dist --no-progress --no-interaction`
- Likely cause: fopen(https://github.com/phpDocumentor/phpDocumentor/releases/download/v3.10.0/phpDocumentor.phar): Failed to open stream: HTTP request failed! HTTP/1.1 504 Gateway Time-out

<details><summary>End of the job log</summary>

```
  - Installing php-http/discovery (1.20.0): Extracting archive
  - Installing phar-io/filesystem (2.0.1): Extracting archive
  - Installing phar-io/executor (1.0.1): Extracting archive
  - Installing phar-io/gnupg (1.0.3): Extracting archive
  - Installing phar-io/composer-distributor (1.0.2): Extracting archive
  - Installing phpdocumentor/shim (v3.10.0): Extracting archive
  - Downloading artifact from https://github.com/phpDocumentor/phpDocumentor/releases/download/v3.10.0/phpDocumentor.phar
##[error]fopen(https://github.com/phpDocumentor/phpDocumentor/releases/download/v3.10.0/phpDocumentor.phar): Failed to open stream: HTTP request failed! HTTP/1.1 504 Gateway Time-out
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining php-sdk!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
