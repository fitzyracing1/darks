<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: resolved -->
# Upstream issue draft: t8y2/dbx

- **Status:** resolved — lit again (2026-10-21); nothing to file
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27416 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39557677191 — dark (conclusion: `cancelled`), 2026-10-21 06:47 UTC
- Dark since: 2026-10-20 06:40 UTC (first run of the current streak)
- Job / step: `jdbc`
- Likely cause: Canceling since a higher priority waiting request for CI-refs/heads/main exists

<details><summary>End of the job log</summary>

```
Configured MAVEN_ARGS to include -ntp to suppress Maven transfer progress logs. Set 'show-download-progress: true' to keep the download progress output.
gradle cache is not found
gradle-wrapper cache is not found
JDBC plugin version check passed (0.1.47).
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
/home/runner/work/dbx/dbx/plugins/jdbc/dist/dbx-jdbc-plugin-0.1.47.zip
/home/runner/work/dbx/dbx/plugins/jdbc/dist/dbx-jdbc-plugin-latest.zip
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
