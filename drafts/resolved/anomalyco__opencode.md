<!-- dark-draft: anomalyco/opencode -->
<!-- draft-state: resolved -->
# Upstream issue draft: anomalyco/opencode

- **Status:** resolved — lit again (2026-11-18); nothing to file
- **Would be filed at:** https://github.com/anomalyco/opencode/issues/new
- **Stars:** 227597 · **Generated:** 2026-11-18T00:55:09.675Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "release" workflow failing on dev since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **release** workflow (`.github/workflows/release.yml`) on `dev` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `dev`: https://github.com/anomalyco/opencode/actions/runs/44147413642 — dark (conclusion: `failure`), 2026-11-17 18:24 UTC
- Dark since: 2026-11-17 18:24 UTC (first run of the current streak)
- Job / step: `sign-macos` → `Sign CLI`
- Likely cause: /var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/tmp.dxyGSkK7Mn/package/bin/opencode: A timestamp was expected but was not found.

<details><summary>End of the job log</summary>

```
verified build-npm
##[end-action id=__self.__run;outcome=success;conclusion=success;duration_ms=5013]
Assuming role with OIDC
Authenticated as assumedRoleId AROAYZO3B27FUYMQNGPWP:opencode-44147413642
1 identity imported.
/var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/tmp.dxyGSkK7Mn/package/bin/opencode: replacing existing signature
/var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/tmp.dxyGSkK7Mn/package/bin/opencode: A timestamp was expected but was not found.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining opencode!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
