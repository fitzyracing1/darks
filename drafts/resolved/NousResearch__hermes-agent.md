<!-- dark-draft: NousResearch/hermes-agent -->
<!-- draft-state: resolved -->
# Upstream issue draft: NousResearch/hermes-agent

- **Status:** resolved — lit again (2026-11-04); nothing to file
- **Would be filed at:** https://github.com/NousResearch/hermes-agent/issues/new
- **Stars:** 260254 · **Generated:** 2026-11-04T00:52:58.321Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker Build, Test, and Publish" workflow failing on main since 2026-11-03
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker Build, Test, and Publish** workflow (`.github/workflows/docker.yml`) on `main` has been failing since 2026-11-03. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NousResearch/hermes-agent/actions/runs/41739495650 — dark (conclusion: `failure`), 2026-11-03 23:29 UTC
- Dark since: 2026-11-03 18:28 UTC (first run of the current streak)
- Job / step: `Build and test image (slim/amd64)` → `Build image (slim/amd64)`
- Likely cause: buildx failed with: /src/vendor/github.com/tonistiigi/go-actions-cache/cache.go:329

<details><summary>End of the job log</summary>

```
github.com/moby/buildkit/solver/llbsolver.runCacheExporters.func1.1
	/src/solver/llbsolver/export.go:136
7 v0.34.2 /usr/bin/buildkitd --config /etc/buildkit/buildkitd.toml --allow-insecure-entitlement=network.host
github.com/tonistiigi/go-actions-cache.(*Cache).commitV2
	/src/vendor/github.com/tonistiigi/go-actions-cache/cache_v2.go:139
github.com/tonistiigi/go-actions-cache.(*Cache).commit
	/src/vendor/github.com/tonistiigi/go-actions-cache/cache.go:329
##[error]buildx failed with: /src/vendor/github.com/tonistiigi/go-actions-cache/cache.go:329
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining hermes-agent!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
