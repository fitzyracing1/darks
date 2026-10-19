<!-- dark-draft: OpenByteInc/QuantDinger -->
<!-- draft-state: resolved -->
# Upstream issue draft: OpenByteInc/QuantDinger

- **Status:** resolved — lit again 2026-10-18: https://github.com/OpenByteInc/QuantDinger/actions/runs/39119865065; backfilled from past crawls; nothing to file
- **Would be filed at:** https://github.com/OpenByteInc/QuantDinger/issues/new
- **Stars:** 12879 · **Generated:** 2026-10-19T00:45:03.964Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "OpenAPI CI" workflow failing on the default branch since 2026-10-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **OpenAPI CI** workflow (`.github/workflows/openapi-ci.yml`) on the default branch has been failing since 2026-10-17. Here is what I saw, in case it's useful:

- Latest run on the default branch: https://github.com/OpenByteInc/QuantDinger/actions/runs/39092211864 — dark (conclusion: `failure`), 2026-10-18 03:02 UTC
- Dark since: 2026-10-17 17:59 UTC (first run of the current streak)
- Likely cause: docs/api/openapi.yaml is out of date. Run: cd backend_api_python && python scripts/export_openapi.py

If this is already known or expected, feel free to close. Thanks for maintaining QuantDinger!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
