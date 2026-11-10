<!-- dark-draft: github/spec-kit -->
<!-- draft-state: ready -->
# Upstream issue draft: github/spec-kit

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/github/spec-kit/issues/new
- **Stars:** 149126 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Deploy Documentation to Pages" workflow failing on main since 2026-11-09
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Deploy Documentation to Pages** workflow (`.github/workflows/docs.yml`) on `main` has been failing since 2026-11-09. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/github/spec-kit/actions/runs/42711981767 — dark (conclusion: `failure`), 2026-11-09 22:27 UTC
- Dark since: 2026-11-09 22:27 UTC (first run of the current streak)
- Job / step: `deploy` → `Deploy to GitHub Pages`
- Likely cause: Deployment cancelled.

<details><summary>End of the job log</summary>

```
{
	"artifact_id": 13717704857,
	"pages_build_version": "0382d7a08d7d37b13f40cd3c385e40c394206113",
	"oidc_token": "***"
}
Created deployment for 0382d7a08d7d37b13f40cd3c385e40c394206113, ID: 0382d7a08d7d37b13f40cd3c385e40c394206113
Getting Pages deployment status...
##[error]Deployment cancelled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining spec-kit!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
