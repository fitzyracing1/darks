<!-- dark-draft: microsoft/PowerToys -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/PowerToys

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/PowerToys/issues/new
- **Stars:** 139588 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Publish Dev Docs Website" workflow failing on main since 2026-10-06
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Publish Dev Docs Website** workflow (`.github/workflows/regenerate-devdocs-website.yml`) on `main` has been failing since 2026-10-06. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/PowerToys/actions/runs/39808732553 — dark (conclusion: `failure`), 2026-10-22 15:51 UTC
- Dark since: 2026-10-06 14:52 UTC (first run of the current streak)
- Job / step: `build` → `Build static site with docmd`
- Likely cause: Error: Template Render Error: emitBaseTag is not defined

<details><summary>End of the job log</summary>

```
Error: Template Render Error: emitBaseTag is not defined
    at Module.renderTemplateAsync (file:///home/runner/work/PowerToys/PowerToys/doc/devdocs-website/node_modules/@docmd/parser/dist/html-renderer.js:56:15)
    at async file:///home/runner/work/PowerToys/PowerToys/doc/devdocs-website/node_modules/@docmd/core/dist/engine/generator.js:479:28
    at async Promise.all (index 0)
    at async renderPages (file:///home/runner/work/PowerToys/PowerToys/doc/devdocs-website/node_modules/@docmd/core/dist/engine/generator.js:364:9)
    at async buildLocales (file:///home/runner/work/PowerToys/PowerToys/doc/devdocs-website/node_modules/@docmd/core/dist/engine/i18n.js:248:27)
    at async buildSite (file:///home/runner/work/PowerToys/PowerToys/doc/devdocs-website/node_modules/@docmd/core/dist/commands/build.js:103:35)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining PowerToys!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
