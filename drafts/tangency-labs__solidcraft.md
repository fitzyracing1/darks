<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 15392 · **Generated:** 2026-11-10T12:42:46.990Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations"
- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations"
- External corpus (`.github/workflows/external-corpus.yml`): [issue #10788](https://github.com/tangency-labs/solidcraft/issues/10788) "CI: external-corpus failing: 5 NIST STEP files exceed 0.10% volume tolerance (e.g. nist_ctc_04_ap203 -17.77%)"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Fillet rig" workflow getting cancelled on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Fillet rig** workflow (`.github/workflows/fillet-rig.yml`) on `main` has been getting cancelled since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/42811369449 — dark (conclusion: `cancelled`), 2026-11-10 11:55 UTC
- Dark since: 2026-11-10 11:55 UTC (first run of the current streak)
- Job / step: `Fillet rig` → `Build the CLI (release)`
- Likely cause: Canceling since a higher priority waiting request for fillet-rig-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling solidcraft-color v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/color)
   Compiling solidcraft-profile v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/profile)
   Compiling solidcraft-doc v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/doc)
   Compiling solidcraft-io v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/io)
   Compiling solidcraft-derive v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/derive)
   Compiling solidcraft-control v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/control)
   Compiling solidcraft-mcp-server v0.40.0-rc.3 (/home/runner/_work/solidcraft/solidcraft/crates/mcp-server)
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
