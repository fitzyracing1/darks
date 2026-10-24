<!-- dark-draft: modelcontextprotocol/php-sdk -->
<!-- draft-state: ready -->
# Upstream issue draft: modelcontextprotocol/php-sdk

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/modelcontextprotocol/php-sdk/issues/new
- **Stars:** 1637 · **Generated:** 2026-10-24T06:53:39.693Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "conformance-weekly" workflow failing on main since 2026-10-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **conformance-weekly** workflow (`.github/workflows/conformance-weekly.yaml`) on `main` has been failing since 2026-10-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/modelcontextprotocol/php-sdk/actions/runs/39210327404 — dark (conclusion: `failure`), 2026-10-19 06:30 UTC
- Dark since: 2026-10-05 06:37 UTC (first run of the current streak)
- Job / step: `conformance / client (2026-07-28, alpha)` → `Run conformance tests`
- Likely cause: Unexpected failures detected: these are not in your expected-failures baseline.

<details><summary>End of the job log</summary>

```
  ~ auth/iss-wrong-issuer
  ~ auth/iss-unexpected
  ~ auth/iss-normalized
  ~ auth/metadata-issuer-mismatch
Unexpected failures (not in baseline):
  ✗ auth/resource-mismatch
Unexpected failures detected: these are not in your expected-failures baseline.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining php-sdk!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
