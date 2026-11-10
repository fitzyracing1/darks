<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11570 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- FreeBSD (`.github/workflows/freebsd.yml`): [issue #6318](https://github.com/storytold/vectorcraft/issues/6318) "Layers: the thumbnails test races its worker in its second half (flaky on FreeBSD x86_64)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "Affinity 3 corpus")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42768773068 — dark (conclusion: `cancelled`), 2026-11-10 06:28 UTC
- Dark since: 2026-11-10 05:17 UTC (first run of the current streak)
- Likely cause: run cancelled

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42768772598 — dark (conclusion: `cancelled`), 2026-11-10 06:28 UTC
- Dark since: 2026-11-10 06:28 UTC (first run of the current streak)
- Job / step: `affinity3` → `Check every artboard, native save, SVG, PDF and PSD exports`
- Likely cause: Canceling since a higher priority waiting request for affinity-corpus-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling winnow v1.0.4
   Compiling weezl v0.2.1
   Compiling jpeg-encoder v0.6.1
   Compiling toml_parser v1.1.5+spec-1.1.0
   Compiling craft-pdf v0.1.0 (https://github.com/storytold/craft-libs?rev=9be9a63782298ab59cd9b7a42ee9cba4f42a5ccb#9be9a637)
   Compiling aes v0.8.4
   Compiling jxl-color v0.11.0
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
