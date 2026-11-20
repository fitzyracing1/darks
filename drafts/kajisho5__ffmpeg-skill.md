<!-- dark-draft: kajisho5/ffmpeg-skill -->
<!-- draft-state: ready -->
# Upstream issue draft: kajisho5/ffmpeg-skill

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/kajisho5/ffmpeg-skill/issues/new
- **Stars:** 8358 · **Generated:** 2026-11-20T00:53:29.653Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "pages" workflow getting cancelled on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **pages** workflow (`.github/workflows/pages.yml`) on `main` has been getting cancelled since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/kajisho5/ffmpeg-skill/actions/runs/44579802943 — dark (conclusion: `cancelled`), 2026-11-19 17:41 UTC
- Dark since: 2026-11-19 11:04 UTC (first run of the current streak)
- Job / step: `build` → `Run actions/jekyll-build-pages@44a6e6beabd48582f863aeeb6cb2151cc1716697`
- Likely cause: Canceling since a higher priority waiting request for pages exists

<details><summary>End of the job log</summary>

```
           Writing: /github/workspace/_site/docs/demos.html
           Writing: /github/workspace/_site/docs/design-decisions.html
           Writing: /github/workspace/_site/readme.html
           Writing: /github/workspace/_site/docs/roadmap.html
           Writing: /github/workspace/_site/assets/css/style.css
                    done in 2.113 seconds.
 Auto-regeneration: disabled. Use --watch to enable.
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ffmpeg-skill!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
