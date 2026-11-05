<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 13955 · **Generated:** 2026-11-05T12:43:00.618Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"
- External corpus (`.github/workflows/external-corpus.yml`): [issue #10788](https://github.com/tangency-labs/solidcraft/issues/10788) "CI: external-corpus failing: 5 NIST STEP files exceed 0.10% volume tolerance (e.g. nist_ctc_04_ap203 -17.77%)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42025374645 — dark (conclusion: `cancelled`), 2026-11-05 12:13 UTC
- Dark since: 2026-11-05 12:12 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling eframe v0.37.0
   Compiling solidcraft-render v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/render)
   Compiling solidcraft-step v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/step)
   Compiling solidcraft-smlib v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/smlib)
   Compiling solidcraft-kernel v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/kernel)
   Compiling solidcraft-sketch v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/sketch)
   Compiling solidcraft-gpu v0.40.0-rc.2 (/home/runner/work/solidcraft/solidcraft/crates/gpu)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
