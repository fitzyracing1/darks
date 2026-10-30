<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: ready -->
# Upstream issue draft: anomalyco/opencode

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 223069 · **Generated:** 2026-10-30T01:00:38.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "release" workflow failing on dev since 2026-10-29
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **release** workflow (`.github/workflows/release.yml`) on `dev` has been failing since 2026-10-29. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40974415341 — dark (conclusion: `failure`), 2026-10-29 23:37 UTC
- Dark since: 2026-10-29 23:37 UTC (first run of the current streak)
- Job / step: `publish-npm` → `Publish`
- Likely cause: npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-30T00_29_58_614Z-debug-0.log

<details><summary>End of the job log</summary>

```
npm notice
npm notice npm tokens that bypass 2FA are being restricted for account changes and direct publishing. Learn how to prepare: https://gh.io/npm-gat-bypass2fa-deprecation
npm notice Publishing to https://registry.npmjs.org/ with tag dev and public access
npm error code TLOG_CREATE_ENTRY_ERROR
npm error error creating tlog entry - (409) an equivalent entry already exists in the transparency log with UUID 108e9186e8c5677a661b1aa9051e72eb188c14b18b4434cf4a48f956d636ab1ac2aec9b94153d950
npm error cause (409) an equivalent entry already exists in the transparency log with UUID 108e9186e8c5677a661b1aa9051e72eb188c14b18b4434cf4a48f956d636ab1ac2aec9b94153d950
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-10-30T00_29_58_614Z-debug-0.log
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
