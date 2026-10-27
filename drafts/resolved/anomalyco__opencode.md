<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: resolved -->
# Upstream issue draft: anomalyco/opencode

- **Status:** resolved — lit again (2026-10-27); nothing to file
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 221971 · **Generated:** 2026-10-27T01:14:41.631Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "bot-nix-hashes" workflow failing on dev since 2026-10-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **bot-nix-hashes** workflow (`.github/workflows/bot-nix-hashes.yml`) on `dev` has been failing since 2026-10-25. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/40429380383 — dark (conclusion: `failure`), 2026-10-27 00:54 UTC
- Dark since: 2026-10-25 22:38 UTC (first run of the current streak)
- Job / step: `update-hashes` → `Commit changes`
- Likely cause: error: failed to push some refs to 'https://github.com/anomalyco/opencode'

<details><summary>End of the job log</summary>

```
remote: - Changes must be made through a pull request.
remote:
remote: - 5 of 5 required status checks are expected.
remote:
To https://github.com/anomalyco/opencode
 ! [remote rejected]       HEAD -> dev (push declined due to repository rule violations)
error: failed to push some refs to 'https://github.com/anomalyco/opencode'
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
