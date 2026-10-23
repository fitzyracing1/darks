<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** resolved — lit again (2026-10-23); nothing to file
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 9221 · **Generated:** 2026-10-22T18:48:47.419Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-10-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-10-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/39833237905 — dark (conclusion: `cancelled`), 2026-10-22 18:39 UTC
- Dark since: 2026-10-22 18:39 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   --> crates/ui-egui/src/dialogs.rs:487:5
    |
485 | enum Begun {
    |      ----- variant in this enum
486 |     /// It computes off the window thread.
487 |     Later(Applying),
    |     ^^^^^
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
