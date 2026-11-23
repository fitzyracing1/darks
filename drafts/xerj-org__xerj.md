<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 19421 · **Generated:** 2026-11-23T00:56:34.623Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 7 workflows dark on main ("Release", "CI", "pack publish", +4 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/44980788530 — dark (conclusion: `cancelled`), 2026-11-22 03:28 UTC
- Dark since: 2026-11-06 03:27 UTC (first run of the current streak)
- Job / step: `Build aarch64-apple-darwin`
- Likely cause: The configuration 'macos-14-arm64-us-default' is not supported

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45035864550 — dark (conclusion: `failure`), 2026-11-22 15:00 UTC
- Dark since: 2026-11-07 06:22 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### pack publish (`.github/workflows/pack-publish.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42562030700 — dark (conclusion: `failure`), 2026-11-09 04:28 UTC
- Dark since: 2026-11-09 04:28 UTC (first run of the current streak)
- Job / step: `hubpack rust-vulns` → `Consumer end-to-end (pull, --def, one question)`
- Likely cause: estimate excludes: server-side indexing, embedding and merge time (autoindex cannot measure it without writing)

<details><summary>End of the job log</summary>

```
next: xerj code rust-vulns "<what you need>"
pack rust-vulns dc058bad 7262503 3 2916
built rust-vulns dc058bad: 7262503 bytes, 3 indices, 2916 definitions
signature verifies: /home/runner/work/_temp/pack-out/rust-vulns-dc058bad.hubpack.tar.zst
layout ok: 991 members
https://github.com/xerj-org/xerj/releases/tag/untagged-17d9af01f0130e8a6164
HTTP 500 (https://api.github.com/repos/xerj-org/xerj/releases/assets/726257115)
##[error]Process completed with exit code 1.
```

</details>

### hub packs (`.github/workflows/hub-packs.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42566888510 — dark (conclusion: `failure`), 2026-11-09 05:22 UTC
- Dark since: 2026-11-09 05:22 UTC (first run of the current streak)
- Job / step: `re-pin moved upstreams (opens PRs)` → `Open re-pin pull requests`
- Likely cause: 8 re-pin PR(s) could not be opened

<details><summary>End of the job log</summary>

```
##[warning]exploit-pocs-2026/ZeroDayEvil--CVE-2026-40369-EXPLOIT: cannot read HEAD of https://github.com/ZeroDayEvil/CVE-2026-40369-EXPLOIT; skipped
##[warning]exploit-pocs-2026/jelasin--CVE-2026-42945: cannot read HEAD of https://github.com/jelasin/CVE-2026-42945; skipped
##[warning]exploit-pocs-2026/hnytgl--CVE-2026-42945: cannot read HEAD of https://github.com/hnytgl/CVE-2026-42945; skipped
##[warning]exploit-pocs-2026/fan-67--local-mcp: cannot read HEAD of https://github.com/fan-67/local-mcp; skipped
##[warning]exploit-pocs-2026/MRdark-ops--CVE-2026-8065: cannot read HEAD of https://github.com/MRdark-ops/CVE-2026-8065; skipped
##[warning]exploit-pocs-2026/K52-ai--CVE-2026-83627: cannot read HEAD of https://github.com/K52-ai/CVE-2026-83627; skipped
repin: classes=weekly; 8 corpus(es) moved
##[error]8 re-pin PR(s) could not be opened
```

</details>

### Fresh-agent field report (`.github/workflows/field-report-e2e.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45020468103 — dark (conclusion: `failure`), 2026-11-22 12:05 UTC
- Dark since: 2026-11-17 17:53 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### Deploy site (Cloudflare Pages) (`.github/workflows/deploy-pages.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45020455893 — dark (conclusion: `failure`), 2026-11-22 12:05 UTC
- Dark since: 2026-11-18 17:14 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

### SEO (`.github/workflows/seo.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/45020455890 — dark (conclusion: `failure`), 2026-11-22 12:05 UTC
- Dark since: 2026-11-18 17:14 UTC (first run of the current streak)
- Likely cause: no cause found in annotations

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
