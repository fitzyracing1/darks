<!-- dark-draft: headroomlabs-ai/headroom -->
<!-- draft-state: ready -->
# Upstream issue draft: headroomlabs-ai/headroom

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/headroomlabs-ai/headroom/issues/new
- **Stars:** 76881 · **Generated:** 2026-10-21T06:59:28.963Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("PR Governance", "Security")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### PR Governance (`.github/workflows/pr-health.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/39440331375 — dark (conclusion: `cancelled`), 2026-10-20 14:33 UTC
- Dark since: 2026-10-12 14:43 UTC (first run of the current streak)
- Job / step: `label` → `Label open pull requests`
- Likely cause: The job has exceeded the maximum execution time of 10m0s

<details><summary>End of the job log</summary>

```
https://github.com/headroomlabs-ai/headroom/pull/4067
https://github.com/headroomlabs-ai/headroom/pull/4067
https://github.com/headroomlabs-ai/headroom/pull/4067
https://github.com/headroomlabs-ai/headroom/pull/4064
https://github.com/headroomlabs-ai/headroom/pull/4064
https://github.com/headroomlabs-ai/headroom/pull/4064
https://github.com/headroomlabs-ai/headroom/pull/4064
##[error]The operation was canceled.
```

</details>

### Security (`.github/workflows/security.yml`)

- Latest run on `main`: https://github.com/headroomlabs-ai/headroom/actions/runs/39535067125 — dark (conclusion: `failure`), 2026-10-21 02:48 UTC
- Dark since: 2026-10-21 00:30 UTC (first run of the current streak)
- Job / step: `Dependency audit (pip-audit)` → `Audit dependencies (pip-audit)`
- Likely cause: [pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112899](https://osv.dev/vulnerability/CVE-2026-112899) | 13.0.0 | ''' ============================================================================ EPS load…

<details><summary>End of the job log</summary>

```
[pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112397](https://osv.dev/vulnerability/CVE-2026-112397) | 13.0.0 | ### Summary A PPM or PGM file can declare a width of 0, which Pillow accepts, producing a…
[pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112896](https://osv.dev/vulnerability/CVE-2026-112896) | 13.0.0 | ## Summary  A small attacker-supplied TIFF can be opened and loaded normally, then reach …
[pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112897](https://osv.dev/vulnerability/CVE-2026-112897) | 13.0.0 | ''' ============================================================================ TiffDeco…
[pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112395](https://osv.dev/vulnerability/CVE-2026-112395) | 13.0.0 | ### Summary  Pillow's libImaging `_decodeTile` decoder, used to decode tiled TIFF images,…
[pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112404](https://osv.dev/vulnerability/CVE-2026-112404) | 13.0.0 | ''' ============================================================================ OOB read…
[pillow](https://pypi.org/project/pillow/) | 12.3.0 | [CVE-2026-112899](https://osv.dev/vulnerability/CVE-2026-112899) | 13.0.0 | ''' ============================================================================ EPS load…
Found 9 known vulnerabilities in 2 packages
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining headroom!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
