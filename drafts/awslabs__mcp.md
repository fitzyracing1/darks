<!-- dark-draft: awslabs/mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: awslabs/mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/awslabs/mcp/issues/new
- **Stars:** 9791 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Check License Header (`.github/workflows/check-license-header.yml`): [PR #4703](https://github.com/awslabs/mcp/pull/4703) "fix(ci): isolate git env in check-license-header pre-commit hook"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "trivy" workflow failing on main since 2026-10-16
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **trivy** workflow (`.github/workflows/trivy.yml`) on `main` has been failing since 2026-10-16. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/awslabs/mcp/actions/runs/38943009170 — dark (conclusion: `failure`), 2026-10-16 17:52 UTC
- Dark since: 2026-10-16 17:52 UTC (first run of the current streak)
- Job / step: `Build src/amazon-sns-sqs-mcp-server` → `Generate Container Software Bill of Materials and Vulnerabilities`
- Likely cause: [error] failed to install syft

<details><summary>End of the job log</summary>

```
[error] hash_sha256_verify checksum for '/tmp/tmp.iJMqvTKbJA/syft_1.39.0_linux_amd64.tar.gz' did not verify bb8f1ba8201d1ce0d99ab4f5243142629c1afba4da97a7c4ca2df97327f97190 vs
tar (child): /tmp/tmp.iJMqvTKbJA/syft_1.39.0_linux_amd64.tar.gz: Cannot open: No such file or directory
tar (child): Error is not recoverable: exiting now
tar: Child returned status 2
tar: Error is not recoverable: exiting now
install: cannot stat '/tmp/tmp.iJMqvTKbJA/syft': No such file or directory
[error] failed to install syft
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
